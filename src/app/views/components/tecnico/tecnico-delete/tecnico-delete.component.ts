import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.css']
})
export class TecnicoDeleteComponent {
  idTecnico = ''

  tecnico: Tecnico = {
    id: '',
    nome: '',
    cpf: '',
    telefone: ''
  }

  constructor(
    private router: Router,
    private service: TecnicoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idTecnico = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.idTecnico).subscribe(data => {
      this.tecnico = data
    })
  }

  delete(): void {
    this.service.delete(this.idTecnico).subscribe(data => {
      this.router.navigate(['tecnicos'])
      this.service.message('Técnico excluído com sucesso!');
    }, err => {

      this.service.message(err.error.error);

    })
  }
  cancelar(): void {
    this.router.navigate(['tecnicos'])
  }

}
