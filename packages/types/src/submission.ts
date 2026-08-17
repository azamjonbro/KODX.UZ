import { ProgrammingLanguage } from './practice';

export type SubmissionStatus = 'PENDING' | 'RUNNING' | 'PASSED' | 'FAILED' | 'TIMEOUT' | 'ERROR';

export interface Submission {
  id: string;
  userId: string;
  taskId: string;
  code: string;
  language: ProgrammingLanguage;
  status: SubmissionStatus;
  score: number;
  executionTime?: number | null;
  errorMessage?: string | null;
  createdAt: string;
}

export interface SubmissionResult {
  submissionId: string;
  status: SubmissionStatus;
  score: number;
  executionTime: number;
  testResults: {
    testCaseId: string;
    passed: boolean;
    input?: string;
    expected?: string;
    actual?: string;
    error?: string;
  }[];
}
