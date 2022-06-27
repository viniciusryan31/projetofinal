import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {Alunos} from './alunos'
Injectable ({ providedIn: 'root' })
export class BoletimServiceService {
URL: string;
constructor (private http HttpClient}
this.URL = 'https://projeto-final ppi-info4bv.rafaelaribeiro2.repl.co/';
}
procurarEstudante(aluno: string): Observable Alunos []> {
return this.http.get<Alunos[]>('$(this URL)alunos/$(aluno)}');
}
cadastrarEstudante(aluno:
Alunos): Observable <any> { return this.http post('${this URL}alunos/novoaluno', aluno);
}
}

