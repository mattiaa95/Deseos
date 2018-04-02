import { Component } from '@angular/core';
import { NavController , NavParams , AlertController} from 'ionic-angular';
import {ListaItem} from '../../app/clases/index';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';

@Component({
  selector: 'selector',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent {

  indice:number;
  lista:any;

  constructor(
    public navCtrl:NavController,
    public navParams:NavParams,
    public _listaDeseos:ListaDeseosService,
    public alertCtrl: AlertController

  ) {
    console.log(navParams);
    this.indice= this.navParams.get("indice");
    this.lista= this.navParams.get("lista");

   }

  ngOnInit() {}

  actualizar(item:ListaItem){
    item.completado= !item.completado;

    let todosMarcados = true;
    for (let item of this.lista.items) {
        if (!item.completado) {
            todosMarcados=false;
            break;
        }
    }

    this.lista.terminada = todosMarcados;

    this._listaDeseos.actualizarData();

  }

  borrarItem() {
  let confirm = this.alertCtrl.create({
    title: '¿Seguro que quieres borrar esta lista?',
    message: 'No sera posible recuperar ninguna informacion una vez borrada',
    buttons: [
      {
        text: '¡Noooooo!',
        handler: () => {
          console.log('Disagree clicked');
        }
      },
      {
        text: '¡Si!',
        handler: () => {
          console.log(this.indice);
          this._listaDeseos.borrarLista(this.indice);
          this.navCtrl.pop();
          console.log('Agree clicked');
        }
      }
    ]
  });
  confirm.present();
}

}
