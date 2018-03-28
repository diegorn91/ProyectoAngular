import { Component, OnInit } from '@angular/core';
import { Amigo } from '../amigo';
import { AMIGOS } from '../mock-amigos';
import {Input, Output} from '@angular/compiler/src/core';
import { ConversacionService } from '../conversacion.service';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.css']
})
export class AmigosComponent implements OnInit {
  amigos = AMIGOS;

  selectedAmigo: Amigo;

  constructor(private conversacionService: ConversacionService) {}

  ngOnInit() {
  }

  onSelect(amigo: Amigo): void {
    this.selectedAmigo = amigo;
    console.log(this.selectedAmigo.id);
    this.conversacionService.obtenerId(this.selectedAmigo);
  }
}
