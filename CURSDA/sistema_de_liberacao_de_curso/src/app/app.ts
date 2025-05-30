import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './components/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] 
})
export class App {
  protected title = 'sistema_de_liberacao_de_curso';
}