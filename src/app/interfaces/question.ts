import { Answer } from "./answer";

export interface Question {
    subject: string;
    content: string;
    difficulty: string;
    answers: Answer[];
}
