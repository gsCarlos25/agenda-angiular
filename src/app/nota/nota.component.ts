import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  storage:StorageService;

  constructor(datos:StorageService) { 
    this.storage = datos;
  }
  completarTarea(index:any){
    if (this.storage.tareas[index].completada == false){
      this.storage.tareas[index].completada = true;
      this.storage.actualizarLocalStorage();
    }
    else{
      this.storage.tareas[index].completada = false;
      this.storage.actualizarLocalStorage();
    }
  }
  prioridadBaja(index:any){
    let indice = this.storage.tareas.indexOf(this.storage.tareasIntroducidas[index]);
    this.storage.tareasIntroducidas[index].prioridad = -1;
    this.storage.tareas[indice].prioridad = -1;
    this.storage.ordenar();
    this.storage.actualizarLocalStorage();
}
prioridadMedia(index:any){
    let indice = this.storage.tareas.indexOf(this.storage.tareasIntroducidas[index]);
    this.storage.tareasIntroducidas[index].prioridad = 0;
    this.storage.tareas[indice].prioridad = 0;
    this.storage.ordenar();
    this.storage.actualizarLocalStorage();
}
prioridadAlta(index:any){
    let indice = this.storage.tareas.indexOf(this.storage.tareasIntroducidas[index]);
    this.storage.tareasIntroducidas[index].prioridad = 1;
    this.storage.tareas[indice].prioridad = 1;
    this.storage.ordenar();
    this.storage.actualizarLocalStorage();
}
borrarTarea(index:any){
    let ndx = this.storage.tareas.indexOf(this.storage.tareasIntroducidas[index]);
    this.storage.tareasIntroducidas.splice(index,1);
    if(this.storage.todas==false){
        this.storage.tareas.splice(ndx,1)
    }
    this.storage.actualizarLocalStorage();
}

  ngOnInit(): void {
    if (localStorage['tareas']){
      this.storage.tareas = JSON.parse(localStorage['tareas']);
    }
    this.storage.tareasIntroducidas = this.storage.tareas;
  }

}
