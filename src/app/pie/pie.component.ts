import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  storage:StorageService;
  constructor(datos:StorageService) { 
    this.storage = datos;
  }
  borrarCompletada(){
    this.storage.tareas = this.storage.tareas.filter(tarea => tarea.completada == false);
    this.storage.tareasIntroducidas = this.storage.tareasIntroducidas.filter(tarea => tarea.completada == false);
    this.storage.actualizarLocalStorage();
}
mostrarTodas(){
    this.storage.tareasIntroducidas = this.storage.tareas;
    this.storage.todas = true;
}
mostrarCompletadas(){
    this.storage.tareasIntroducidas = this.storage.tareas.filter(tarea => tarea.completada == true);
    this.storage.todas = false;
}
mostrarNoCompletadas(){
    this.storage.tareasIntroducidas = this.storage.tareas.filter(tarea => tarea.completada == false);
    this.storage.todas = false;
}
tareasCompletadas(){
  var completadas = 0;
  for (let tarea of this.storage.tareas){
      if(tarea.completada == true){
          completadas += 1;
      }
  }
  return completadas;
}
  ngOnInit(): void {
  }

}
