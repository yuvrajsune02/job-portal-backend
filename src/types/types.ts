export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  role: 'job_seeker' | 'recruiter' | 'admin';
}
