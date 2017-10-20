import { Observable } from 'rxjs';
import { FotoComponent } from './../foto/foto.component';
import { Injectable } from '@angular/core'
import { Http, Headers, Response } from '@angular/http';


@Injectable()
export class FotoService {
    private cabecalho: Headers
    private url: string

    constructor( private conexaoApi: Http ){

        this.url = 'http://localhost:3000/v1/fotos/'              

        this.cabecalho = new Headers()
        this.cabecalho.append('Content-Type', 'application/json')

   
    }

    listar(): Observable<Response>{

        return this.conexaoApi
                   .get(this.url)
    }

    cadastrar(foto: FotoComponent): Observable<Response>{
        return this.conexaoApi
                    .post(
                        this.url
                        , JSON.stringify(foto)
                        , {headers: this.cabecalho}
                    )
    
    }

    deletar(foto: FotoComponent): Observable<Response> {
        
        console.log(foto)

        return this.conexaoApi.delete(this.url+foto._id)
    }

    atualizar(){}

    obterFoto(){}

}