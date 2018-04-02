import { Component } from '@angular/core';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
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
}
