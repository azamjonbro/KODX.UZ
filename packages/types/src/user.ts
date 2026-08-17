export type UserRole = 'USER' | 'ADMIN' | 'SUPER_ADMIN' | 'INSTRUCTOR' | 'MODERATOR' | 'EDITOR';

export interface User {
  id: string;
  email: string;
  username: string;
  firstName?: string | null;
  lastName?: string | null;
  avatar?: string | null;
  role: UserRole;
  isVerified: boolean;
  xp: number;
  level: number;
  streak: number;
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string | null;
}

export type SafeUser = Omit<User, 'passwordHash'>;

export interface UserProfile extends SafeUser {
  completedLessonsCount: number;
  completedCoursesCount: number;
  solvedTasksCount: number;
  certificatesCount: number;
}
