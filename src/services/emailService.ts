import { getAppCheckToken } from '@/lib/firebase';

const CONTACT_EMAIL_URL = 'https://asia-northeast1-realable-hp.cloudfunctions.net/sendContactEmail';
const REPLY_EMAIL_URL = 'https://asia-northeast1-realable-hp.cloudfunctions.net/sendReplyEmail';

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface EmailServiceResponse {
  success: boolean;
  messageId?: string;
}

/**
 * メール送信サービスのインターフェース
 */
export interface EmailService {
  sendContactForm(data: ContactFormData): Promise<EmailServiceResponse>;
}

/**
 * Firebase Functions経由でメール送信を行うサービス
 */
class FirebaseEmailService implements EmailService {
  private async fetchWithAppCheck(
    url: string,
    data: object
  ): Promise<Response> {
    const appCheckToken = await getAppCheckToken();

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (appCheckToken) {
      headers['X-Firebase-AppCheck'] = appCheckToken;
    } else {
      console.warn('App Check token not available, request may be rejected');
    }

    return fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
  }

  async sendContactForm(data: ContactFormData): Promise<EmailServiceResponse> {
    try {
      // 管理者へお問い合わせメールを送信
      const contactResponse = await this.fetchWithAppCheck(CONTACT_EMAIL_URL, data);

      if (!contactResponse.ok) {
        throw new Error(`HTTP error! status: ${contactResponse.status}`);
      }

      const contactResult = await contactResponse.json();

      // クライアントへ確認メールを送信
      try {
        const replyResponse = await this.fetchWithAppCheck(REPLY_EMAIL_URL, {
          name: data.name,
          email: data.email,
        });

        if (!replyResponse.ok) {
          console.warn('Reply email failed with status:', replyResponse.status);
        } else {
          const replyResult = await replyResponse.json();
          console.log('Reply email sent successfully:', replyResult);
        }
      } catch (replyError) {
        // 確認メール送信失敗してもエラーにしない（管理者メールは送信済み）
        console.warn('Reply email failed but continuing:', replyError);
      }

      return { success: true, messageId: contactResult.messageId };
    } catch (error) {
      console.error('Error calling sendContactEmail function:', error);
      throw new Error('メール送信に失敗しました');
    }
  }
}

/**
 * メール送信サービスのインスタンスを作成
 */
export function createEmailService(): EmailService {
  return new FirebaseEmailService();
}
