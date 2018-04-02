import { Component } from '@angular/core';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent {
  constructor(private _listaDeseos : ListaDeseosService,
              private _navCtrl: NavController) {  }

  ngOnInit() {}

  irAgregar(){
    this._navCtrl.push(AgregarComponent);
  }
  verDetalle(lista){
    let indice=this._listaDeseos.listas.indexOf(lista);
    this._navCtrl.push(DetalleComponent, {lista,indice});
    //console.log(indice);

  }
}
