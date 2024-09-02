import { Component } from '@angular/core';
import { NgZorroModule } from '../../../shared/ng-zorro.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-all-admin',
  standalone: true,
  imports: [NgZorroModule,CommonModule,FormsModule,RouterOutlet],
  templateUrl: './all-admin.component.html',
  styleUrl: './all-admin.component.scss'
})
export class AllAdminComponent {
  listOfData = [
    { id: 1, username: 'admin1', password: 'password1' },
    { id: 2, username: 'admin2', password: 'password2' },
    { id: 3, username: 'admin3', password: 'password3' },
    // เพิ่มข้อมูลอื่น ๆ ตามที่ต้องการ
  ];

  onCurrentPageDataChange($event: any): void {
    // สามารถเพิ่มการจัดการข้อมูลในหน้าปัจจุบันได้
  }

  onDelete(id: number): void {
    this.listOfData = this.listOfData.filter(item => item.id !== id);
  }
}
