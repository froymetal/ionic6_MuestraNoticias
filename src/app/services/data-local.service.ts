import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/Interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  noticias: Article[] = [];

  constructor(private storage: Storage,
              public toastController: ToastController) {
    this.cargarFavoritos();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }

  guardarNoticia(noticia: Article) {
    const existe = this.noticias.find(noti => noti.title === noticia.title);
    if (!existe){
      this.noticias.unshift(noticia);
      this.storage.set('favorites', this.noticias);
    }
    this.presentToast('Favorite added');
  }

  async cargarFavoritos() {
    const favoritos = await this.storage.get('favorites');
    // console.log('async await', favoritos);
    if (favoritos) {
      this.noticias = favoritos;
    } else {
      this.noticias = [];
    }
     /*  .then(favoritos => {
        console.log('favorites', favoritos);
      }); */
  }
}

