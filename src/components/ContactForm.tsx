'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { useContactForm } from '@/hooks/useContactForm';
import { CONTACT_SUBJECTS } from '@/constants/contactOptions';

interface ContactFormProps {
  onSubmissionSuccess?: (data: {
    name: string;
    company: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }) => void;
}

export default function ContactForm({ onSubmissionSuccess }: ContactFormProps) {
  const router = useRouter();

  const { formData, isSubmitting, error, handleChange, handleSubmit } = useContactForm(
    (data) => {
      if (onSubmissionSuccess) {
        onSubmissionSuccess(data);
      } else {
        router.push('/contact/thanks');
      }
    }
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive">
          <p className="text-sm">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">
            お名前 <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="山田 太郎"
            className="transition-colors focus:!outline-none focus:!ring-0 focus:!ring-offset-0 focus:!shadow-[0_0_0_2px_rgb(16,185,129)]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">会社名</Label>
          <Input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="株式会社サンプル"
            className="transition-colors focus:!outline-none focus:!ring-0 focus:!ring-offset-0 focus:!shadow-[0_0_0_2px_rgb(16,185,129)]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">
            メールアドレス <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@email.com"
            className="transition-colors focus:!outline-none focus:!ring-0 focus:!ring-offset-0 focus:!shadow-[0_0_0_2px_rgb(16,185,129)]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">電話番号</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="03-1234-5678"
            className="transition-colors focus:!outline-none focus:!ring-0 focus:!ring-offset-0 focus:!shadow-[0_0_0_2px_rgb(16,185,129)]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">
          お問い合わせ種別 <span className="text-destructive">*</span>
        </Label>
        <Select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="focus:!outline-none focus:!ring-0 focus:!ring-offset-0 focus:!shadow-[0_0_0_2px_rgb(16,185,129)]"
        >
          <option value="">選択してください</option>
          {CONTACT_SUBJECTS.map((subject) => (
            <option key={subject.value} value={subject.value}>
              {subject.label}
            </option>
          ))}
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          お問い合わせ内容 <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="お問い合わせの詳細をご記入ください..."
          className="resize-none transition-colors focus:!outline-none focus:!ring-0 focus:!ring-offset-0 focus:!shadow-[0_0_0_2px_rgb(16,185,129)]"
        />
      </div>

      <div className="rounded-lg p-4 border border-black-100">
        <p className="text-xs text-black leading-relaxed">
          このサイトはreCAPTCHAによって保護されており、Googleの
          <a 
            href="https://policies.google.com/privacy" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-emerald-500 hover:text-teal-300 hover:underline ml-1"
          >
            プライバシーポリシー
          </a>
          と
          <a 
            href="https://policies.google.com/terms" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-emerald-500 hover:text-teal-300 hover:underline ml-1"
          >
            利用規約
          </a>
          が適用されます。
        </p>
      </div>

      <div className="pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto min-w-[200px]"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              送信中...
            </>
          ) : (
            '送信する'
          )}
        </Button>
      </div>
    </form>
  );
}