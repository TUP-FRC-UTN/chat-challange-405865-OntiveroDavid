import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatRoomComponent } from "../sala/sala.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatRoomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Chat';
}
