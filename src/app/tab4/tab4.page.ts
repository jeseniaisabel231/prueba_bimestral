import { Component } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonMenuButton,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonButton,
    IonButtons,
    IonMenuButton,
    CommonModule,
    FormsModule,
  ],
  standalone: true,
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Guardar Texto</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <div class="h-full w-full grid place-content-center justify-center">
        <div class="flex flex-col">
          <strong class="text-center text-xl">No olvides ingresar un texto.</strong>
          <textarea
            class="bg-slate-400 text-black p-5 h-32 rounded-md"
            rows="15"
            cols="30"
            [(ngModel)]="comentario"
          ></textarea>
          <br />
          <button
            class="bg-[#4d8dff] rounded-md p-1 w-32 ml-36"
            (click)="guardarComentario()"
          >
            Guardar
          </button>
        </div>
      </div>
    </ion-content>
  `,
})
export class Tab4Page {
  constructor() {}
  comentario: string = '';
  async guardarComentario() {
    if (Capacitor.isNativePlatform()) {
      const directorio = await Filesystem.writeFile({
        path: 'texto.txt',
        data: this.comentario,
        encoding: Encoding.UTF8,
        directory: Directory.Documents,
      });
    } else {
      localStorage.setItem('Su texto es: ', this.comentario);
    }
    this.comentario = '';
  }
}
