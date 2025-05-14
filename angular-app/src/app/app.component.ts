import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Hello World!</h1>
      <p>Welcome to your Angular application</p>
    </div>
  `,
  styles: [`
    .container {
      text-align: center;
      margin-top: 50px;
    }
    h1 {
      color: #1976d2;
    }
  `]
})
export class AppComponent {
  title = 'hello-world';
} 