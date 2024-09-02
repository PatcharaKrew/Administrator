import { Component } from '@angular/core';
import { NgZorroModule } from '../../../shared/ng-zorro.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-genadmin',
  standalone: true,
  imports: [NgZorroModule,CommonModule,FormsModule,RouterOutlet],
  templateUrl: './genadmin.component.html',
  styleUrl: './genadmin.component.scss'
})
export class GenadminComponent {

  username: string = '';
  id: string = '';

  onGenerate() {
    console.log('Username:', this.username);
    console.log('ID:', this.id);

  }

}
