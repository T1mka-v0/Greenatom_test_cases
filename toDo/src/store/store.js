import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from 'uuid';

// const test_id_1 = uuidv4();
// const test_id_2 = uuidv4();
// const test_id_3 = uuidv4();

class TaskList {
  list = [{id: uuidv4(), title: 'Попасть на стажировку в Гринатом', isCompleted: false}, {id: uuidv4(), title: 'Попробовать сынчуанский соус', isCompleted: false}];
  completed = [{id: uuidv4(), title: 'Не умереть на учебе', isCompleted: true}];
  oddSelected = false;
  evenSelected = false;

  addTask(title) {
    this.list.push({id: uuidv4(), title, isCompleted: false});
    console.log(`Task with title ${title} was added`);
  }
  removeTask(id) {
    this.list = this.list.filter((item) => item.id !== id);
    this.completed = this.completed.filter((item) => item.id !== id);
    console.log(`Task with id ${id} removed`);
  }
  completeTask(id) {
    const item = this.list.find((item) => item.id === id);
    item.isCompleted = true;
    this.completed.push(item);
    this.list = this.list.filter((item) => item.id !== id)
    console.log(`Задача с id ${id} была выполнена`);
  }
  uncompleteTask(id) {
    const item = this.completed.find((item) => item.id === id);
    item.isCompleted = false;
    this.list.push(item);
    this.completed = this.completed.filter((item) => item.id !== id);
    console.log('Something happened');
  }
  deleteFirst() {
    this.list.shift();
    console.log('Something happened');
  }
  deleteLast() {
    this.list.pop();
    console.log('Something happened');
  }
  switchOdd() {
    this.oddSelected = !this.oddSelected;
    console.log('Something happened');
  } 
  switchEven() {
    this.evenSelected = !this.evenSelected;
    console.log('Something happened');
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export const taskListStore = new TaskList();