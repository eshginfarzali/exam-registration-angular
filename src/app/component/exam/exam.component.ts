import { Component } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
})
export class ExamComponent {
  exams = [
    {
      courseCode: 'MAT',
      studentNumber: 10001,
      examDate: new Date('2024-05-10'),
      grade: 9,
    },
    {
      courseCode: 'PHY',
      studentNumber: 10002,
      examDate: new Date('2024-05-11'),
      grade: 8,
    },
    {
      courseCode: 'CHE',
      studentNumber: 10003,
      examDate: new Date('2024-05-12'),
      grade: 7,
    },
    {
      courseCode: 'BIO',
      studentNumber: 10004,
      examDate: new Date('2024-05-13'),
      grade: 6,
    },
    {
      courseCode: 'ENG',
      studentNumber: 10005,
      examDate: new Date('2024-05-14'),
      grade: 10,
    },
  ];

  addNewExam() {
    console.log('Add new Exam');
    this.exams.push({
      courseCode: 'HIS',
      studentNumber: 10008,
      examDate: new Date('2024-05-18'),
      grade: 6,
    });
  }

  editExam(exam: any) {
    console.log('Edit exam', exam);
  }

  deleteExam(exam: any) {
    console.log('Delete exam', exam);
    this.exams = this.exams.filter((l) => l !== exam);
  }
}
