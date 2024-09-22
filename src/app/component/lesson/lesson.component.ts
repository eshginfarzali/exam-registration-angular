import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css',
})
export class LessonComponent {
  lessons = [
    {
      courseCode: 'MAT',
      courseName: 'Mathematics',
      classNumber: 10,
      teacherFirstName: 'John',
      teacherLastName: 'Doe',
    },
    {
      courseCode: 'PHY',
      courseName: 'Physics',
      classNumber: 11,
      teacherFirstName: 'Jane',
      teacherLastName: 'Smith',
    },
    {
      courseCode: 'CHE',
      courseName: 'Chemistry',
      classNumber: 10,
      teacherFirstName: 'Albert',
      teacherLastName: 'Einstein',
    },
    {
      courseCode: 'BIO',
      courseName: 'Biology',
      classNumber: 9,
      teacherFirstName: 'Marie',
      teacherLastName: 'Curie',
    },
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

  // Method to add a new lesson
  addNewLesson() {
    // Logic to add a new lesson
    console.log('Add new lesson');
    this.lessons.push({
      courseCode: 'NEW101',
      courseName: 'New Lesson',
      classNumber: 12,
      teacherFirstName: 'New',
      teacherLastName: 'Teacher',
    });
  }

  // Method to edit a lesson
  editLesson(lesson: any) {
    // Logic to edit the lesson
    console.log('Edit lesson', lesson);
  }

  // Method to delete a lesson
  deleteLesson(lesson: any) {
    // Logic to delete the lesson
    console.log('Delete lesson', lesson);
    this.lessons = this.lessons.filter((l) => l !== lesson);
  }
}
