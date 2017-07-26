import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {

    transform(fotos: FotoComponent[], digitado: string): FotoComponent[] {

        digitado = digitado.toLowerCase();
        //compara foto por foto se o titulo contem o que foi digitado, no final retorna  alista que contem 
        return fotos.filter( foto => foto.titulo.toLowerCase().includes(digitado));
    }
}