import {Component, OnInit} from '@angular/core'
import {Alunos} from './alunos';
import {BoletimServiceService} from './boletim.service'
@Component({
selector: 'app-consulta-alunos'
templateUrl: './consulta-alunos.component.html'
styleUrls: {'./consulta-alunos.component.css'},
}}
export class ConsultaAlunosComponent implements OnInit {
alunos: Alunos {};
construtor(private bs: BoletimServiceService) {
this.alunos=[];
}
ngOnInit() {}
procurarEstudante(aluno:
string) {
this.bs.procurarEstudante(aluno).subscribe ((est) => {
this.alunos = est;
}};
}
}
