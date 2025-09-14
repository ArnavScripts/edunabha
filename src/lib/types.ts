export type Lesson = {
  id: string;
  title: string;
  subject: 'Digital Literacy' | 'Math' | 'English' | 'Science';
  description: string;
  content: string;
  thumbnailUrl: string;
  videoUrl?: string;
  downloadUrl?: string;
  chapters?: Chapter[];
  quiz: Quiz;
  completion: number;
};

export type Chapter = {
  id: string;
  title: string;
  downloadUrl: string;
};

export type Quiz = {
  questions: Question[];
};

export type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export type Student = {
  id: string;
  name: string;
  class: string;
  lessonsCompleted: number;
  totalLessons: number;
  averageScore: number;
  avatarUrl: string;
};

export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
};

export type Activity = {
  id: string;
  studentName: string;
  action: string;
  timestamp: string;
  avatarUrl: string;
};
