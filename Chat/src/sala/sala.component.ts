import { Component } from '@angular/core';
import { UserMessageComponent } from '../mensaje/mensaje.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [UserMessageComponent, CommonModule],
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class ChatRoomComponent {
  user1 = 'Pepe';
  user2 = 'María';

  messages: { user: string, text: string }[] = [];

  addMessage(newMessage: { user: string, text: string }) {
    this.messages.push(newMessage);
  }
}