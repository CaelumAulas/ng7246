import { roteamento } from './../app.routes';
import { FotoComponent } from './../foto/foto.component';
import { Component, OnInit } from '@angular/core';
import { FotoService } from '../servicos/foto.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'cadastro',
  templateUrl: 'cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()
  mensagem: string = ''

  constructor(private servico: FotoService,
              private rota: ActivatedRoute,
              private roteamento: Router
            ) {

          this.rota.params.subscribe(
            parametros => {

              //if paramtros.id existe...
              parametros.id && this.servico
                  .obterFoto(parametros.id)
                  .subscribe(
                    resposta => {
                      this.foto = resposta.json()
                    }
                  )
            }
          )
  }

  ngOnInit() {


  }

  salvar(submit: Event){

    console.log(this.foto)
    submit.preventDefault()

    if(this.foto._id){
      this.servico.atualizar(this.foto)
                  .subscribe(
                    () => {
                      this.roteamento.navigate([''])
                    }
                    , erro => console.log(erro)
                  )
    }
    else {

      this.servico.cadastrar(this.foto)
                  .subscribe(
                    () => {

                      this.mensagem = `Foto ${this.foto.titulo} cadastrada com sucesso!`

                      setTimeout(
                        () => this.mensagem = ''
                        , 2000
                      )

                      this.foto = new FotoComponent()
                    }
                    , erro => console.log(erro)
                  )
    }


  }

}
