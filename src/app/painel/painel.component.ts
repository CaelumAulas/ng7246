import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'painel',
  templateUrl: 'painel.component.html'
})
export class PainelComponent implements OnInit, OnDestroy {
  
  @Input() titulo:string

  constructor(){}

  //https://angular.io/guide/lifecycle-hooks
  ngOnInit(){

    /*
    if(this.titulo.length > 7) {
      this.titulo = this.titulo.substr(0,7)+'...'
    }
    */

    //ou de um jeito mais elegante, usando if ternário e template string:

    this.titulo.length > 7 
    ? this.titulo = `${this.titulo.substr(0,7)} ...`
    : this.titulo
  }

  ngOnDestroy(){

  }
}
