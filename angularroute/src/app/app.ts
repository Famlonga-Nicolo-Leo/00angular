import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { foooComponent } from './fooo/fooo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,CommonModule,fooo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('angularroute');
}
