import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  tareas = new Array();
  nombreTarea = "";
  tareasIntroducidas = new Array();
  todas = true;
  textoBuscar = "";
  constructor() { }

  actualizarLocalStorage(){
    localStorage['tareas'] = JSON.stringify(this.tareas);

}

ordenar(){
    this.tareasIntroducidas.sort((a,b)=>{
        return b.prioridad - a.prioridad;
    });
}
tiempoTranscurrido(index:any){
    let actual = new Date()
    this.tareas[index].tiempo = Math.floor((actual.getTime() - (new Date(this.tareas[index].fecha)).getTime())/60000)
    this.actualizarLocalStorage;
    return this.tareas[index].tiempo
}


} 