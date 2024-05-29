import { Answer } from './answer.interface';

export interface Question {
  id: number;
  subject: string;
  content: string;
  difficulty: string;
  answers: Answer[];
}
