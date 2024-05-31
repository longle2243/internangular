import { Answer } from './answer.interface';

export interface Question {
  id: number;
  subject: string;
  content: string;
  difficulty: string;
  type: string;
  answers: Answer[];
}
