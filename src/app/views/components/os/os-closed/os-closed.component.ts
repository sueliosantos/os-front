import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OS } from 'src/app/models/os';
import { ClienteService } from 'src/app/services/cliente.service';
import { OSService } from 'src/app/services/os.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-os-closed',
  templateUrl: './os-closed.component.html',
  styleUrls: ['./os-closed.component.css']
})
export class OsClosedComponent {
  os: OS[] = [];

  displayedColumns: string[] = ['cliente', 'tecnico', 'prioridade', 'status', 'abertura', 'fechamento', 'action'];
  dataSource = new MatTableDataSource<OS>(this.os);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: OSService,
    private router: Router,
    private tecnicoService: TecnicoService,
    private clienteService: ClienteService,
  ) { }

  ngAfterViewInit() {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach((x) => {
        if (x.status === "ENCERRADO")
          this.os.push(x);
      })

      this.listarTecnico();
      this.listarCliente();
      this.dataSource = new MatTableDataSource<OS>(this.os);
      this.dataSource.paginator = this.paginator;
    });
  }

  //Convertendo o id que vem na resposta para um tecnico.nome
  listarTecnico(): void {
    this.os.forEach(element => {
      this.tecnicoService.findById(element.tecnico).subscribe(data => {
        element.tecnico = data.nome
      })
    });
  }

  //Convertendo o id que vem na resposta para um cliente.nome
  listarCliente(): void {
    this.os.forEach(element => {
      this.clienteService.findById(element.cliente).subscribe(data => {
        element.cliente = data.nome
      })
    });
  }

  prioridade(x: any) {
    if (x == 'BAIXA') {
      return 'baixa'
    }
    else if (x == 'MEDIA') {
      return 'media'
    } else {
      return 'alta'
    }
  }

  update(x: any) {
  }
}
