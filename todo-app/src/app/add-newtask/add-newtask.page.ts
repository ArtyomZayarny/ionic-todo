import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-newtask',
  templateUrl: './add-newtask.page.html',
  styleUrls: ['./add-newtask.page.scss'],
})
export class AddNewtaskPage implements OnInit {
  showPicker = false;
  categories = [];

  taskName;
  taskDate;
  taskPriority;
  taskCategory;
  taskObject;
  constructor(
    public modalCtrl: ModalController,
    public todoService: TodoService
  ) {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    this.taskDate = today.toISOString();
  }
  ngOnInit() {
    this.categories.push('work');
    this.categories.push('personal');
  }
  async dismiss() {
    await this.modalCtrl.dismiss(this.taskObject);
  }

  selectedCategory(index) {
    this.taskCategory = this.categories[index];
  }

  dateChanged(value) {
    this.taskDate = value;
  }
  async AddTask() {
    this.taskObject = {
      itemName: this.taskName,
      itemDate: this.taskDate,
      itemPriority: this.taskPriority,
      itemCategory: this.taskCategory,
    };
    let uid = this.taskName + this.taskDate;
    if (uid) {
      await this.todoService.addTask(uid, this.taskObject);
    } else {
      console.log('Cant save empty task');
    }

    this.dismiss();
  }
}
