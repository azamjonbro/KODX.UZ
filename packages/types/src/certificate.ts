export interface Certificate {
  id: string;
  userId: string;
  courseId: string;
  certificateNumber: string;
  issuedAt: string;
  user?: {
    firstName?: string | null;
    lastName?: string | null;
    username: string;
  };
  course?: {
    title: string;
    slug: string;
  };
}

export interface CertificateVerificationResult {
  valid: boolean;
  certificate?: Certificate;
}
