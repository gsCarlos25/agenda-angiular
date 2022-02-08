import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  storage:StorageService;

  constructor(datos: StorageService) { 
    this.storage = datos;
  }

  buscarTarea(){
    this.storage.tareasIntroducidas = this.storage.tareas.filter(tarea => tarea.nombre.includes(this.storage.textoBuscar));
}

  insertarTarea(){
    let tarea = {
        nombre:this.storage.nombreTarea,
        fecha: new Date(),
        completada:false,
        prioridad:0,
        tiempo:0,
    }
    this.storage.tareas.push(tarea)
    this.storage.actualizarLocalStorage();
    this.storage.nombreTarea="";
    this.storage.ordenar();
  }
  ngOnInit(): void {
    if (localStorage['tareas']){
      this.storage.tareas = JSON.parse(localStorage['tareas']);
    }
    this.storage.tareasIntroducidas = this.storage.tareas;
  }

}
