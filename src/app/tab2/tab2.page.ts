import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonMenuButton,
  IonButtons,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonButton,
    IonMenuButton,
    IonButtons,
  ],
  standalone: true,
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title> Enlace a Git Hub </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="flex  justify-center mt-6">
        <strong class="text-center text-3xl font-bold text-white shadow-lg"
          >jeseniaisabel231</strong
        >
      </div>

      <div class="flex justify-center items-center mt-11 mb-6">
        <img src="../assets/img/perfil-Isabel.jpg" class=" rounded-full w-56" />
      </div>
      <div class="text-center">
        <h3 class="font-extrabold text-white">Repositorio de Git Hub</h3>
        <div class="flex justify-center pt-10 ">
          <a
            href="https://github.com/jeseniaisabel231/prueba_bimestral"
            class="flex w-48 h-10 bg-[#4d8dff] text-black rounded-md pl-16 pt-2"
            ><strong>Enlace</strong></a
          >
        </div>
      </div>
    </ion-content>
  `,
})
export class Tab2Page {
  constructor() {}
}
