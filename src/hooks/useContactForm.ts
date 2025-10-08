'use client';

import { useState } from 'react';
import { createEmailService } from '@/services/emailService';

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface UseContactFormReturn {
  formData: ContactFormData;
  isSubmitting: boolean;
  error: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  setFormData: React.Dispatch<React.SetStateAction<ContactFormData>>;
}

export function useContactForm(
  onSuccess?: (data: ContactFormData) => void
): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { name, company, email, phone, subject, message } = formData;

      // Validate required fields
      if (!name || !email || !subject || !message) {
        throw new Error('必須項目が入力されていません');
      }

      // Send email via email service
      const emailService = createEmailService();
      await emailService.sendContactForm({
        name,
        company,
        email,
        phone,
        subject,
        message,
      });

      console.log('お問い合わせフォーム送信完了:', {
        name,
        company,
        email,
        phone,
        subject,
        timestamp: new Date().toISOString(),
      });

      if (onSuccess) {
        onSuccess(formData);
      }
    } catch (err) {
      setError('送信中にエラーが発生しました。もう一度お試しください。');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    error,
    handleChange,
    handleSubmit,
    setFormData,
  };
}
