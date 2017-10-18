import { Component } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`
})
export class AppComponent {
  title = 'app';
  fotos: Object[] = []

  constructor(ajax: Http){
    ajax.get('http://localhost:3000/v1/fotos')
        .subscribe(
          resposta => this.fotos = resposta.json()
          , erro => console.log(erro)
        )
  }
}
