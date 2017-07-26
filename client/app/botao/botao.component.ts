import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'botao',
    templateUrl: './botao.component.html'
})
export class BotaoComponent {

    @Input() nome: string = 'Ok';
    @Input() estilo: string = 'btn-default';
    @Input() tipo: string = 'button';
    @Input() desabilitado: boolean = false;
    @Output() acao = new EventEmitter();
    @Input() confirmacao: boolean = false;

    executaAcao() {

        if(this.confirmacao) {
            if(confirm('Tem certeza?')) {
    //Esse eventemiiter ira emitir um evento, que ira executar o codigo bind ( no html campo acao)
                this.acao.emit(null); 
            }
            return; 
        }          
        this.acao.emit(null);
    }
}