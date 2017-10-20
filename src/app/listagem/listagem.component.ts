import { FotoComponent } from './../foto/foto.component';
import { Component, OnInit } from '@angular/core'
import { FotoService } from '../servicos/foto.service'

@Component({
  selector: 'listagem',
  templateUrl: 'listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit{
  
  title = 'CaelumPic'
  fotos: FotoComponent[] = []
  mensagem: string = ''
  
  constructor(private servico: FotoService){
      this.servico.listar()
              .subscribe(
                resposta => this.fotos = resposta.json()
                , erro => console.log(erro)
            )
  }

  ngOnInit(){
    
  }

  remover(foto: FotoComponent){
    this
      .servico
      .deletar(foto)              
      .subscribe(
        () => {
          
          this.fotos = this.fotos.filter( imagem => imagem._id != foto._id)

          this.mensagem = `foto ${foto.titulo} foi deletada`

          setTimeout(
            () => this.mensagem = ''
            , 5000
          )
          
        }
        , erro => console.log(erro)
      )

  }

}
