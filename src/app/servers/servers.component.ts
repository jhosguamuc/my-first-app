import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  ServerCreationStatus: string ="No server was created";
  ServerName: string = "";
  ServerCreated: boolean = false;
  Servers: Array<string> = ["test","test2"];

  ngOnInit(): void {

  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },5000);
  }

 

  onCreateServer(): void {
    this.ServerCreated = true;
    this.Servers.push(this.ServerName);
    this.ServerCreationStatus ="Server was created "+ this.ServerName;
  }

  onUpdateServerName(event: Event): void {
    this.ServerName = (<HTMLInputElement>event.target).value;
  }

}
