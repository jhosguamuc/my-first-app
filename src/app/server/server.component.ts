import { Component } from "@angular/core";

@Component(
    {
     selector:'app-server',
     templateUrl:'./server.component.html',
     styleUrls:['./server.component.css' ]  
    }
)

export class ServerComponent{

ID: number = 10;
Estatus: string = "Inactivo"

constructor() {
    this.Estatus = Math.random() > 0.5 ? "Activo" : "Inactivo";
}

metodoRetornastring()
{
    return "Estado del servidor:"+ this.Estatus;
}

getColor() : string {
    return this.Estatus == "Activo" ? "green": "red";
}

}