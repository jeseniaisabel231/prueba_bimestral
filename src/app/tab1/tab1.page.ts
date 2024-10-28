import { IonicModule } from '@ionic/angular';

import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonChip,
  IonButton,
  IonAlert,
} from '@ionic/angular/standalone';

@Component({
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonAvatar,
    IonImg,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonChip,
    IonButton,
    IonAlert,
  ],
  standalone: true,
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title> Biografía</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Isabel Pazto</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-grid>
        <ion-row>
          <div class="flex-col justify-center items-center w-full ">
            <div class="flex justify-center items-center ">
              <ion-col size="6">
                <h2 class="font-extrabold text-lg">Isabel Pazto</h2>
              </ion-col>
            </div>

            <div class="flex justify-center items-center">
              <ion-col size="6" class="center-col">
                <ion-avatar>
                  <ion-img
                    class="w-24 h-24"
                    src="assets/img/perfil-Isabel.jpg"
                  ></ion-img>
                </ion-avatar>
              </ion-col>
            </div>
          </div>
        </ion-row>

        <div class="mt-12">
          <ion-row>
            <ion-col>
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Biografía</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <p>
                    <strong>Isabel Pazto</strong>, estudiante de la Escuela
                    Politécnica Nacional y actualmente estoy cursando Tecnología
                    Superior en Desarrollo de Software. Me apasiona el
                    desarrollo frontend, ya que se complementa con el diseño
                    web. Disfruto diseñar y crear cosas nuevas.
                  </p>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </div>

        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Pasatiempos</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-list>
                  <ion-item>
                    <ion-label>Me apasiona hacer manualidades. </ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label
                      >Disfruto de la elaboración de jabones artesanales.
                    </ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>Me gusta diseñar páginas web. </ion-label>
                  </ion-item>
                </ion-list>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Habilidades Blandas</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-row>
                  <ion-col>
                    <ion-chip color="danger">Responsabilidad</ion-chip>
                    <ion-chip color="warning">Puntualidad</ion-chip>
                  </ion-col>
                  <ion-col>
                    <ion-chip color="tertiary">Liderazgo</ion-chip>
                    <ion-chip color="black">Trabajo en equipo</ion-chip>
                  </ion-col>
                </ion-row>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <div class="flex ml-6 mt-6 justify-center">
          <div class="flex mb-3">
            <ion-button id="present-alert">Contactar</ion-button>
          </div>
          <ion-alert
            trigger="present-alert"
            subHeader="Confirmar"
            message="Segur@ deseas contactarte con esta persona?."
            [buttons]="alertButtons"
          ></ion-alert>
        </div>
      </ion-grid>
    </ion-content>
  `,
})
export class Tab1Page {
  alertButtons = [
    { text: 'cancelar', role: 'cancel' },
    {
      text: 'enviar',
      handler: () => {
        window.location.href = 'mailto:jesenia.pazto@epn.edu.ec';
      },
    },
  ];
}
