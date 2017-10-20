import { roteamento } from './../app.routes';
import { FotoComponent } from './../foto/foto.component';
import { Component, OnInit } from '@angular/core';
import { FotoService } from '../servicos/foto.service'
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'cadastro',
  templateUrl: 'cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()
  mensagem: string = ''
  formCadastro: FormGroup

  constructor(private servico: FotoService,
              private rota: ActivatedRoute,
              private roteamento: Router,
              private formBuilder: FormBuilder
            ) {

          this.formCadastro = formBuilder.group({
            titulo: ['', Validators.compose(
                  [
                    Validators.required
                   ,Validators.minLength(3)
                  ]
            )],
            url: ['', Validators.required],
            descricao: ''
          })

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
                    mensagens => {
                      
                      this.mensagem = mensagens.texto
                      
                      this.roteamento.navigate([''])
                    }
                    , erro => console.log(erro)
                  )
    }
    else {

      this.servico.cadastrar(this.foto)
                  .subscribe(
                    mensagens => {

                      this.mensagem = mensagens.texto

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
