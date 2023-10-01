import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent {
  idCliente = ''

  cliente: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    telefone: ''
  }

  constructor(
    private router: Router,
    private service: ClienteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idCliente = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.idCliente).subscribe(data => {
      this.cliente = data
    })
  }

  delete(): void {
    this.service.delete(this.idCliente).subscribe(data => {
      this.router.navigate(['clientes'])
      this.service.message('Técnico excluído com sucesso!');
    }, err => {

      this.service.message(err.error.error);

    })
  }
  cancelar(): void {
    this.router.navigate(['clientes'])
  }
}
