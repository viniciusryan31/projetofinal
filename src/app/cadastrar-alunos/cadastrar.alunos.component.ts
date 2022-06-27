import { Component, OnInit } from '@angular/core';
import { Alunos } from '../consulta-alunos/alunos';
import { BoletimServiceService } from '../consulta-alunos/boletim.service';

@Component({
  selector: 'app-cadastrar-alunos',
  templateUrl: './cadastrar-alunos.component.html',
  styleUrls: ['./cadastrar-alunos.component.css'],
})
export class CadastrarAlunosComponent implements OnInit {
  alunos: Alunos[];
  nome: string;
  matricula: number;
  curso: string;
  notas: number[];
  nota1: number;
  nota2: number;
  nota3: number;
  nota4: number;

  constructor(private boletim: BoletimServiceService) {
    this.nome = '';
    this.matricula = 0;
    this.curso = '';
    this.alunos = [];
    this.notas = [];
  }

  ngOnInit() {}
  cadastrar(
    nm: string,
    matri: number,
    curso: string,
    nota1: number,
    nota2: number,
    nota3: number,
    nota4: number
  ) {
    this.notas.push(nota1, nota2, nota3, nota4);
    let novoaluno = new Alunos(nm, matri, curso, this.notas);
    this.alunos.push(novoaluno);
    this.boletim.cadastrarEstudante(novoaluno).subscribe((aluno) => {
      console.log(aluno);
    });
  }
}
