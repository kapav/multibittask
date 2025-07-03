import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, title: 'Купить хлеб', description: 'Белый', status: 'open' },
    { id: 2, title: 'Заплатить за интернет', description: '', status: 'in progress' },
  ];
  private tasks$ = new BehaviorSubject<Task[]>(this.tasks);
  private nextId = 3;

  getTasks(): Observable<Task[]> {
    return this.tasks$.asObservable();
  }

  getTask(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  addTask(task: Omit<Task, 'id' | 'status'>): void {
    const newTask: Task = {
      id: this.nextId++,
      status: 'open',
      ...task
    };
    this.tasks = [...this.tasks, newTask];
    this.tasks$.next(this.tasks);
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.tasks$.next(this.tasks);
  }
}
