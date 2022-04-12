import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewtaskPage } from '../add-newtask/add-newtask.page';
import { TodoService } from '../todo.service';
import { UpdateTaskPage } from '../update-task/update-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList: any = [];

  today: number = Date.now();
  constructor(
    public modalCtrl: ModalController,
    public todoService: TodoService
  ) {
    this.getAllTask();
  }

  async addTask() {
    const modal = await this.modalCtrl.create({
      component: AddNewtaskPage,
    });
    modal.onDidDismiss().then((newTaskObj) => {
      this.getAllTask();
    });
    return await modal.present();
  }
  getAllTask() {
    this.todoList = this.todoService.getAllTask();
  }
  delete(key) {
    this.todoService.deleteTask(key);
    this.getAllTask();
  }
  async update(selectedTask) {
    const modal = await this.modalCtrl.create({
      component: UpdateTaskPage,
      componentProps: { task: selectedTask },
    });
    modal.onDidDismiss().then(() => {
      this.getAllTask();
    });
    return await modal.present();
  }
}
