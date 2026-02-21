import { z } from 'zod';


// 1) Zod Schema (ولیدیشن سمت کلاینت)

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(80, 'Full name is too long'),
  email: z
    .string()
    .email('Email is not valid')
    .max(120, 'Email is too long'),
  projectType: z
    .string()
    .min(1, 'Project type is required'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message is too long'),
  // honeypot (ضد اسپم ساده)
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;