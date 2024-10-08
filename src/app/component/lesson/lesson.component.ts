import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css',
})
export class LessonComponent {
  lessons = [
    {
      courseCode: 'ENG',
      courseName: 'English',
      classNumber: 12,
      teacherFirstName: 'William',
      teacherLastName: 'Shakespeare',
    },
    {
      courseCode: 'GEO',
      courseName: 'Geography',
      classNumber: 8,
      teacherFirstName: 'Alexander',
      teacherLastName: 'Humboldt',
    },
    {
      courseCode: 'HIS',
      courseName: 'History',
      classNumber: 7,
      teacherFirstName: 'George',
      teacherLastName: 'Washington',
    },
    {
      courseCode: 'ART',
      courseName: 'Art',
      classNumber: 9,
      teacherFirstName: 'Leonardo',
      teacherLastName: 'da Vinci',
    },
    {
      courseCode: 'PE',
      courseName: 'Physical Education',
      classNumber: 6,
      teacherFirstName: 'Michael',
      teacherLastName: 'Jordan',
    },
    {
      courseCode: 'MUS',
      courseName: 'Music',
      classNumber: 5,
      teacherFirstName: 'Ludwig',
      teacherLastName: 'Beethoven',
    },
  ];

  addNewLesson() {
    console.log('Add new lesson');
    this.lessons.push({
      courseCode: 'NEW101',
      courseName: 'New Lesson',
      classNumber: 12,
      teacherFirstName: 'New',
      teacherLastName: 'Teacher',
    });
  }

  editLesson(lesson: any) {
    console.log('Edit lesson', lesson);
  }

  deleteLesson(lesson: any) {
    console.log('Delete lesson', lesson);
    this.lessons = this.lessons.filter((l) => l !== lesson);
  }
}
