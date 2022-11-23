import { Component } from "@angular/core";

@Component(
    {
     selector:'app-server',
     templateUrl:'./server.component.html'   
    }
)

export class ServerComponent{

ID: number = 10;
Estatus: string = "Inactivo"

metodoRetornastring()
{
    return "Estado del servidor:"+ this.Estatus;
}

}