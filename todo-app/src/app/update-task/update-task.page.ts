import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {
  @Input() task;
  categories = [];

  taskName;
  taskDate;
  taskPriority;
  taskCategory;
  taskObject;
  constructor(
    public modalCtr: ModalController,
    public todoService: TodoService
  ) {}

  ngOnInit() {
    this.categories.push('work');
    this.categories.push('personal');

    this.taskName = this.task.value.itemName;
    this.taskDate = this.task.value.itemDate;
    this.taskCategory = this.task.value.itemCategory;
    this.taskPriority = this.task.value.itemPriority;
  }

  async dismis() {
    await this.modalCtr.dismiss();
  }

  selectedCategory(index) {
    this.taskCategory = this.categories[index];
  }
  async update() {
    this.taskObject = {
      itemName: this.taskName,
      itemDate: this.taskDate,
      itemPriority: this.taskPriority,
      itemCategory: this.taskCategory,
    };
    let uid = this.task.key;
    await this.todoService.updateTask(uid, this.taskObject);
    this.dismis();
  }
}
