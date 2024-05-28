import { Answer } from "./answer.interface";

export interface Question {
    subject: string;
    content: string;
    difficulty: string;
    answers: Answer[];
}
