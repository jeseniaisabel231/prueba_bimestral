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
  IonDatetime,
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
    IonDatetime,
  ],
  standalone: true,
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Calendario</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <div class="bg-[#2a2a2a] flex my-1 mx-1 p-4">
        <p>
          Aquí podrás seleccionar dos fechas de distintos meses y calcular la
          cantidad de días entre ambas.
        </p>
      </div>
      <div class="flex flex-col justify-center items-center">
        <ion-datetime
          (ionChange)="primeraFecha($event)"
          display-format="MM/DD/YYYY"
        ></ion-datetime>
        <ion-datetime
          (ionChange)="segundaFecha($event)"
          display-format="MM/DD/YYYY"
        ></ion-datetime>
      </div>
      <div class="flex justify-center items-center m-4 bg">
        <label class="font-bold "> La diferencia de dias es: </label>
        <input
          type="text"
          placeholder="Diferencia de dias"
          [value]="diferenciaFechas"
          readonly
          class="text-center bg-[#2a2a2a] h-8 w-12 rounded-md"
        />
      </div>
    </ion-content>
  `,
})
export class Tab5Page {
  fecha1: string;
  fecha2: string;
  diferenciaFechas: number;

  primeraFecha(event: any) {
    this.fecha1 = event.detail.value;
    this.calcularDiferencia();
  }

  segundaFecha(event: any) {
    this.fecha2 = event.detail.value;
    this.calcularDiferencia();
  }

  constructor() {
    this.fecha1 = '';
    this.fecha2 = '';
    this.diferenciaFechas = 0;
  }

  calcularDiferencia() {
    if (this.fecha1 && this.fecha2) {
      const fechaEntrada = new Date(this.fecha1);
      const fechaSalida = new Date(this.fecha2);
      const diferencia = fechaSalida.getTime() - fechaEntrada.getTime();
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      
      this.diferenciaFechas = Math.abs(dias);
    }
  }
}
