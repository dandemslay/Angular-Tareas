import { Component, OnInit } from "@angular/core";
import { Tarea } from "src/app/models/Tarea";

@Component({
  selector: "app-tareas",
  templateUrl: "./tareas.component.html",
  styleUrls: ["./tareas.component.css"]
})
export class TareasComponent implements OnInit {
  title = "Tareas";

  listTareas: Tarea[] = [];
  nombreTarea = "";

  constructor() {}

  ngOnInit(): void {}

  agregarTarea() {
    // Crear un objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    };

    // Agreger el objeto tarea al Array
    this.listTareas.push(tarea);
    // Reset form
    this.nombreTarea = "";
  }

  actualizarTarea(index: number, tarea: Tarea): void{
    this.listTareas[index].estado =!tarea.estado
  }

  eliminarTarea(index: number): void{
    this.listTareas.splice(index, 1)
  }
}
