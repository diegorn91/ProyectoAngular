import { Component } from '@angular/core';
import { ConversacionService } from '../conversacion.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {

  constructor(conversacionService: ConversacionService) {
  }
  ngOnChange() {
  }
}
