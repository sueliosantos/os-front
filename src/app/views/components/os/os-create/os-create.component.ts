import { Router } from '@angular/router';
import { Tecnico } from './../../../../models/tecnico';
import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { TecnicoService } from 'src/app/services/tecnico.service';
import { OS } from 'src/app/models/os';
import { OSService } from 'src/app/services/os.service';

@Component({
  selector: 'app-os-create',
  templateUrl: './os-create.component.html',
  styleUrls: ['./os-create.component.css']
})
export class OsCreateComponent {
  os: OS = {
    tecnico: '',
    cliente: '',
    observacao: '',
    status: '',
    prioridade: '',

  }

  tecnicos: Tecnico[] = []
  clientes: Cliente[] = []

  constructor(
    private tecnicoService: TecnicoService,
    private clienteService: ClienteService,
    private router: Router,
    private osService: OSService,
  ) { }

  create(): void {
    this.osService.create(this.os).subscribe(data => {
      this.osService.message("Ordem de Serviço criada com sucesso!");
      this.router.navigate(['os'])
    })
  }

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

  cancelar(): void {
    this.router.navigate(['os'])
  }


}
