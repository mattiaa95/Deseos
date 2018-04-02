import { Component } from '@angular/core';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosComponent {
  constructor(private _listaDeseos : ListaDeseosService,
              private _navCtrl: NavController) {  }

  ngOnInit() {}

  verDetalle(lista){
    let indice=this._listaDeseos.listas.indexOf(lista);
    this._navCtrl.push(DetalleComponent, {lista,indice});
    //console.log(indice);

  }
}
