import { IonicModule } from '@ionic/angular';

import { Component } from '@angular/core';
import {
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonContent,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonMenu,
  IonButtons,
  IonMenuButton,
  IonAlert,
  IonButton,
  IonInput,
  IonList,
} from '@ionic/angular/standalone';

@Component({
  imports: [
    IonContent,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonMenu,
    IonButtons,
    IonMenuButton,
    IonAlert,
    IonButton,
    IonInput,
    IonList,
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
      <main class="flex flex-col justify-center items-center h-screen">
        <section
          class=" text-black   bg-gradient-to-r from-gray-500 via-blue-700 to-purple-900 h-screen"
        >
          <div class="flex  justify-center">
            <strong class="text-center text-3xl font-bold text-white shadow-lg"
              >ISABEL PAZTO</strong
            >
          </div>

          <div class="flex-col">
            <div class="flex flex-col p-6 items-center">
              <img
                src="../assets/img/perfil-Isabel.jpg"
                class=" rounded-full w-44 "
              />
            </div>

            <div class="flex px-6 bg-[#1f1f1f] w-96 rounded-md ml-14 py-6 ">
              <p class="text-white">
                <strong>Isabel Pazto</strong>, estudiante de la Escuela
                Politécnica Nacional y actualmente estoy cursando Tecnología
                Superior en Desarrollo de Software. Me apasiona el desarrollo
                frontend, ya que se complementa con el diseño web. Disfruto
                diseñar y crear cosas nuevas.
              </p>
            </div>

            <div
              class="flex bg-[#1f1f1f] w-96 ml-14 rounded-md my-4 h-10 items-center pl-4"
            >
              <p class="text-white">
                Aqui, dejo una lista con mis pasatiempos favoritos
              </p>
            </div>
          </div>

          <div class="flex px-14">
            <ion-accordion-group>
              <ion-accordion>
                <ion-item color="#736b4d" slot="header">
                  <h3 class="font-bold uppercase tracking-widest">
                    Pasatiempos
                  </h3>
                </ion-item>
                <div class="ion-padding" slot="content">
                  <ul class="list-disc marker:text-[#8c8c38] text-sm ml-4">
                    <li>Español (nativo)</li>
                    <li>Inglés (intermedio)</li>
                    <li>Japonés (basico)</li>
                  </ul>
                </div>
              </ion-accordion>
            </ion-accordion-group>
          </div>

          <div class="flex px-6 mt-5">
            <ion-list>
              <ion-list>
                <ion-item>
                  <ion-input
                    label="Deja tu comentario"
                    placeholder="Escribir texto"
                  ></ion-input>
                  <div class="flex ml-6 mt-6 justify-center">
                    <ion-button id="present-alert">Contactar</ion-button>
                    <ion-alert
                      trigger="present-alert"
                      subHeader="Confirmar"
                      message="Segur@ deseas contactarte con esta persona?."
                      [buttons]="alertButtons"
                    ></ion-alert>
                  </div>
                </ion-item>
              </ion-list>
            </ion-list>
          </div>
        </section>
      </main>
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
