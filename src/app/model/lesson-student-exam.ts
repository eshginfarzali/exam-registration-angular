export interface Lesson {
  id: string;
  lessonCode: string;
  lessonName: string;
  classLevel: number;
  teacherFirstName: string;
  teacherLastName: string;
}

export interface Student {
  id: string;
  studentNumber: number;
  firstName: string;
  lastName: string;
  classLevel: number;
}

export interface Exam {
  id: string;
  lessonCode: string;
  studentNumber: number;
  examDate: Date;
  grade: number;
}
