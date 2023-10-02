import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OS } from 'src/app/models/os';
import { OSService } from 'src/app/services/os.service';

@Component({
  selector: 'app-os-view',
  templateUrl: './os-view.component.html',
  styleUrls: ['./os-view.component.css']
})
export class OsViewComponent {
  os: OS = {
    tecnico: '',
    cliente: '',
    observacao: '',
    status: '',
    prioridade: '',
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: OSService
  ) { }

  ngOnInit(): void {
    this.os.id = this.route.snapshot.paramMap.get("id");
    this.findById();
  }

  findById(): void {
    this.service.findById(this.os.id).subscribe(data => {
      this.os = data;
    })
  }

  cancelar(): void {
    this.router.navigate(['os'])
  }

}
