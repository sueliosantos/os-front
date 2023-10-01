import { Tecnico } from './../../../../models/tecnico';
import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-os-create',
  templateUrl: './os-create.component.html',
  styleUrls: ['./os-create.component.css']
})
export class OsCreateComponent {
  selected = ""
  tecnicos: Tecnico[] = []
  clientes: Cliente[] = []

  constructor(
    private tecnicoService: TecnicoService,
    private clienteService: ClienteService,
  ) { }

  ngOnInit(): void {
    this.listarTecnicos();
    this.listarClientes();
  }

  listarTecnicos(): void {
    this.tecnicoService.findAll().subscribe(data => {
      this.tecnicos = data;
    })
  }

  listarClientes(): void {
    this.clienteService.findAll().subscribe(data => {
      this.clientes = data;
    })
  }

}
