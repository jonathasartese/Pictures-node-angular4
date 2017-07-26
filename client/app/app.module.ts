import{ NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { FotoModule } from './foto/foto.module';
//import browsermodule pois ira rodar no navegador
//bootstrap é diferente do css, significa qual component ira bootar primeiro

// importou o módulo que já possui um provider configurado
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { PainelModule } from './painel/painel.module';

import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent }   from './listagem/listagem.component';
import { routing } from './app.route';

//importando form para usarmos twoway data bing no input
// e ReactiveFormsModule para fazermos validacao via modelo
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { BotaoModule } from './botao/botao.module';

@NgModule({
  imports:      [ BrowserModule, FotoModule, HttpModule, PainelModule, routing, FormsModule, ReactiveFormsModule, BotaoModule ],
  declarations: [ AppComponent, CadastroComponent, ListagemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }