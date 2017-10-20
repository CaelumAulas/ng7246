import { FotoComponent } from './foto/foto.component';
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform{

        transform(fotos: FotoComponent[], termoBusca: string){
       
            return fotos.filter(
                foto => {
                    return foto
                            .titulo
                            .toLowerCase()
                            .includes(termoBusca.toLowerCase())
                }
            )

        }
}