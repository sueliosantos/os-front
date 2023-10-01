import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent {
  idCliente = ''

  cliente: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    telefone: ''
  }

  nome = new FormControl('', [Validators.minLength(5)]);
  cpf = new FormControl('', [Validators.minLength(11)])
  telefone = new FormControl('', [Validators.minLength(11)])

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
    this.service.findById(this.idCliente).subscribe((data) => {
      this.cliente = data
    })
  }

  cancelar(): void {
    this.router.navigate(['clientes'])
  }

  update(): void {
    this.service.update(this.cliente).subscribe(data => {
      this.cliente = data
      this.router.navigate(['clientes'])
      this.service.message("Técnico atualizado com sucesso")
    }, err => {
      if (err.error.error.match('já cadastrado')) {
        this.service.message(err.error.error);
      } else {
        this.service.message("Campo(s) inválido(s)!");
      }
    })
  }

  errorValidateNome() {
    if (this.nome.invalid) {
      return 'O Nome deve ter entre 5 e 100 caracteres';
    }
    return false;
  }

  errorValidateCpf() {
    if (this.cpf.invalid) {
      return 'O CPF deve ter deve ter entre 11 e 15 caracteres';
    }
    return false;
  }

  errorValidateTelefone() {
    if (this.telefone.invalid) {
      return 'O Telefone deve ter entre 11 e 15 caracteres';
    }
    return false;
  }
}
