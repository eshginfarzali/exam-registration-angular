import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './component/exam/exam.component';
import { LessonComponent } from './component/lesson/lesson.component';
import { StudentComponent } from './component/student/student.component';

export const routes: Routes = [
  { path: '', redirectTo: 'lessons', pathMatch: 'full' },
  { path: 'lessons', component: LessonComponent },
  { path: 'exams', component: ExamComponent },
  { path: 'students', component: StudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
