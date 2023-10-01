import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent {
  tecnico: Tecnico = {
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
    private service: TecnicoService
  ) { }

  cancelar(): void {
    this.router.navigate(['tecnicos'])
  }

  create(): void {
    this.service.create(this.tecnico).subscribe((resposta) => {
      this.router.navigate(['tecnicos'])
      this.service.message("Técnico criado com sucesso!");
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
