import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JsonPipe, CommonModule } from '@angular/common'; // Aggiungi questo

@Component({
  selector: 'app-fooo',
  standalone: true, 
  imports: [JsonPipe, CommonModule], 
  templateUrl: './fooo.html',
  styleUrls: ['./fooo.css']
})
export class foooComponent {
   data!: Object; 
   loading: boolean=false;
   o! :Observable<Object>;
   constructor(public http: HttpClient) {}
   makeRequest(): void {
     console.log("here");
     this.loading = true;
     this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
     this.o.subscribe(this.getData);
   }
   getData = (d : Object) =>
   {
     this.data = new Object(d);
     this.loading = false;
   }
   makeCompactRequest(): void {
     this.loading = true;
     this.http
       .get('https://jsonplaceholder.typicode.com/posts/1')
       .subscribe(newData => {
       this.data = newData;
       this.loading = false;
       });
      }
}
