import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email({ message: "To'g'ri email manzil kiriting" }),
  username: z
    .string()
    .min(3, { message: "Foydalanuvchi nomi kamida 3 ta belgidan iborat bo'lishi kerak" })
    .max(30, { message: "Foydalanuvchi nomi ko'pi bilan 30 ta belgidan iborat bo'lishi kerak" })
    .regex(/^[a-zA-Z0-9_]+$/, { message: "Foydalanuvchi nomi faqat harflar, raqamlar va _ belgilaridan iborat bo'lishi mumkin" }),
  password: z
    .string()
    .min(8, { message: "Parol kamida 8 ta belgidan iborat bo'lishi kerak" })
    .max(100, { message: "Parol juda uzun" }),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

export type RegisterInput = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  login: z.string().min(1, { message: "Email yoki foydalanuvchi nomini kiriting" }),
  password: z.string().min(1, { message: "Parolni kiriting" }),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(1, { message: "Refresh token talab qilinadi" }),
});

export type RefreshTokenInput = z.infer<typeof refreshTokenSchema>;
