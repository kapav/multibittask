import { Routes } from '@angular/router';
import { TaskList } from './components/task-list/task-list';
import { TaskForm } from './components/task-form/task-form';
import { TaskDetail } from './components/task-detail/task-detail';

export const routes: Routes = [
  { path: 'tasks', component: TaskList },
  { path: 'tasks/add', component: TaskForm },
  { path: 'tasks/:id', component: TaskDetail },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
];
