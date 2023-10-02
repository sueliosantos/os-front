import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { OS } from 'src/app/models/os';
import { Tecnico } from 'src/app/models/tecnico';
import { ClienteService } from 'src/app/services/cliente.service';
import { OSService } from 'src/app/services/os.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-os-edit',
  templateUrl: './os-edit.component.html',
  styleUrls: ['./os-edit.component.css']
})
export class OsEditComponent {
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
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log("chegou" + this.os.id);
    this.os.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.listarTecnicos();
    this.listarClientes();
  }

  update(): void {
    this.osService.update(this.os).subscribe(data => {
      this.osService.message("Ordem de Serviço atualizada com sucesso!");
      this.router.navigate(['os'])
    })
  }

  findById(): void {
    this.osService.findById(this.os.id).subscribe(data => {
      this.os = data;
      this.converterDados();
    })
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

  converterDados(): void {
    if (this.os.status == "ABERTO") {
      this.os.status = 0;
    } else if (this.os.status == "ANDAMENTO") {
      this.os.status = 1;
    } else {
      this.os.status = 2;
    }

    if (this.os.prioridade == "BAIXA") {
      this.os.prioridade = 0;
    } else if (this.os.prioridade == "MEDIA") {
      this.os.prioridade = 1;
    } else {
      this.os.prioridade = 2;
    }
  }

}
