export type Question = {
    id: string;
    type: QuestionType;
    text: string;
    category: string;
    answerOptions: AnswerOption[];
};

export type AnswerOption = {
    id: string;
    text: string;
};

export type TaskConfiguration = {
    id: string;
    name: string;
    value: TaskConfigurationValue;
};

export type Task = {
    id: string;
    type: TaskType;
    name: string;
    displayName: string;
    configuration: TaskConfiguration;
    questionSet: Question[];
};

export type TaskConfigurationValue = {
    dynamic?: boolean;
    randomQuestionsOrder?: boolean;
    randomAnswersOrder?: boolean;
    timeAllowed?: string;
    dueDate?: string;
    available?: boolean;
    questionsCount?: number;
};

export enum QuestionType {
    SINGLE = 'single',
    MULTIPLE = 'multiple'
}

export enum TaskType {
    TEST = 'test'
}
