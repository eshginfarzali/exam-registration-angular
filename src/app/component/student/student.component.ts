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
  ];

  addNewStudent() {
    console.log('Add new Student');
    this.students.push({
      studentNumber: 10002,
      firstName: 'Grace',
      lastName: 'Taylor',
      classNumber: 8,
    });
  }

  editStudent(student: any) {
    console.log('Edit Student', student);
  }

  deleteStudent(student: any) {
    console.log('Delete Student', student);
    this.students = this.students.filter((l) => l !== student);
  }
}
