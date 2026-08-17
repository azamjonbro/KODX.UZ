export interface Achievement {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
}

export interface UserAchievement {
  id: string;
  userId: string;
  achievementId: string;
  achievement: Achievement;
  earnedAt: string;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  avatar?: string | null;
  xp: number;
  level: number;
}

export type LeaderboardPeriod = 'WEEKLY' | 'MONTHLY' | 'ALL_TIME';
