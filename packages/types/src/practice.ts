export type TaskDifficulty = 'EASY' | 'MEDIUM' | 'HARD';
export type ProgrammingLanguage = 'javascript' | 'typescript' | 'html' | 'css' | 'json';

export interface PracticeTask {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  difficulty: TaskDifficulty;
  starterCode: string;
  solution?: string;
  language: ProgrammingLanguage;
  points: number;
  testCases?: TestCase[];
  createdAt: string;
  updatedAt: string;
}

export interface TestCase {
  id: string;
  taskId: string;
  input: string;
  expectedOutput: string;
  isHidden: boolean;
}
