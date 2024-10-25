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

import { MenuComponent } from '../components/menu.component';

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
    MenuComponent,
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
        <ion-title> Curriculum Vitae de Isabel Pazto </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <main class="flex sm:flex-row flex-col">
        <!--mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm-->
        <section class="w-full bg-white text-black  py-14">
          <div class="mt-12 px-14">
            <h1 class="font-bold text-4xl text-[#736b4d]">ISABEL PAZTO</h1>
          </div>

          <div class="flex flex-col p-6">
            <img
              src="../assets/img/perfil-Isabel.jpg"
              class=" rounded-full w-52 mb-10"
            />
          </div>

          <div class="flex px-6">
            <p>
              <strong>Jesenia Isabel Pazto</strong>Estudiante de la ESCUELA
              POLITECNICA NACIONAL, en la actualidad estoy cursando la carrera
              de Tecnologia Superior en Desarrollo de Software, lo que ma me
              apasiona de la carrera es el frontend y mas por que se complementa
              con el diseño web, me encanta diseñar crear cosas nuevas.
            </p>
          </div>
          
          <div>
            <ion-button id="present-alert">Contactar</ion-button>
            <ion-alert
              trigger="present-alert"
              subHeader="Confirmar"
              message="Segur@ deseas contactarte con esta persona?."
              [buttons]="alertButtons"
            ></ion-alert>
          </div>

          <ion-list>
            <ion-list>
              <ion-item>
                <ion-input
                  label="Deja tu comentario"
                  placeholder="Escribir texto"
                ></ion-input>
                <ion-button>Enviar</ion-button>
              </ion-item>
            </ion-list>
          </ion-list>
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
