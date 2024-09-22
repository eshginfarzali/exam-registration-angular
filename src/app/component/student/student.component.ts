import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  students = [
    {
      studentNumber: 10001,
      firstName: 'Alice',
      lastName: 'Johnson',
      classNumber: 10,
    },
    {
      studentNumber: 10002,
      firstName: 'Bob',
      lastName: 'Smith',
      classNumber: 11,
    },
    {
      studentNumber: 10003,
      firstName: 'Charlie',
      lastName: 'Brown',
      classNumber: 10,
    },
    {
      studentNumber: 10004,
      firstName: 'David',
      lastName: 'Lee',
      classNumber: 9,
    },
    {
      studentNumber: 10005,
      firstName: 'Eve',
      lastName: 'Davis',
      classNumber: 12,
    },
    {
      studentNumber: 10006,
      firstName: 'Frank',
      lastName: 'Williams',
      classNumber: 8,
    },
    {
      studentNumber: 10007,
      firstName: 'Grace',
      lastName: 'Taylor',
      classNumber: 7,
    },
    {
      studentNumber: 10008,
      firstName: 'Henry',
      lastName: 'Wilson',
      classNumber: 9,
    },
    {
      studentNumber: 10009,
      firstName: 'Isabella',
      lastName: 'Martinez',
      classNumber: 6,
    },
    {
      studentNumber: 10010,
      firstName: 'Jack',
      lastName: 'Garcia',
      classNumber: 5,
    },
  ];

  // Method to add a new lesson
  addNewLesson() {
    // Logic to add a new lesson
    console.log('Add new lesson');
    this.students.push({
      studentNumber: 10002,
      firstName: 'Grace',
      lastName: 'Taylor',
      classNumber: 8,
    });
  }

  // Method to edit a lesson
  editLesson(student: any) {
    // Logic to edit the lesson
    console.log('Edit lesson', student);
  }

  // Method to delete a lesson
  deleteLesson(student: any) {
    // Logic to delete the lesson
    console.log('Delete lesson', student);
    this.students = this.students.filter((l) => l !== student);
  }
}
