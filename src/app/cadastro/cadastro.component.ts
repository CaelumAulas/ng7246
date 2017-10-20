import { FotoComponent } from './../foto/foto.component';
import { Component, OnInit } from '@angular/core';
import { FotoService } from '../servicos/foto.service'

@Component({
  selector: 'cadastro',
  templateUrl: 'cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()

  constructor(private servico: FotoService) {}

  ngOnInit() {
  }

  salvar(submit: Event){

    console.log(this.foto)
    submit.preventDefault()

    this.servico.cadastrar(this.foto)
                .subscribe(
                  resposta => console.log(resposta)
                  , erro => console.log(erro)
                )

  }

}
