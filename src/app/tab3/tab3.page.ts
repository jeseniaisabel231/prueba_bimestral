import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonMenuButton,
  IonItem,
  IonLabel,
  IonInput,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Para usar *ngIf

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
    IonItem,
    IonLabel,
    IonInput,
    CommonModule,
    FormsModule,
  ],
  standalone: true,
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Calculo de Raíces</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="h-full w-full flex justify-center items-start ">
        <div class="grid place-content-center mt-5">
          <div class="flex flex-col items-center mb-4">
            <strong class="text-lg mb-3"> Formula General</strong>
            <img
              src="../../assets/img/formula-general.jpg"
              class="w-72  rounded-lg"
              alt=""
            />
          </div>

          <div class="grid gap-4">

            <label class="text-start font-bold"> Ingresa el valor de a: </label>
            <input
              class="bg-slate-800 rounded-md text-white pl-3 h-10"
              type="number"
              placeholder="0"
              [(ngModel)]="num1"
            />
  
            <label class="text-star font-bold"> Ingresa el valor de b: </label>
            <input
              class="bg-slate-800 rounded-md text-white pl-3 h-10"
              type="number"
              placeholder="0"
              [(ngModel)]="num2"
            />
  
            <label class="text-star font-bold"> Ingresa el valor de c: </label>
            <input
              class="bg-slate-800 rounded-md text-white pl-3 h-10"
              type="number"
              placeholder="0"
              [(ngModel)]="num3"
            />
          </div>

          <br />
          <button class="bg-[#4d8dff] h-10 w-36 ml-16 rounded-lg" (click)="calcular()">
            Calcular
          </button>
          <div class="flex  w-full">
            <div class="mr-16">

              <h2 class="text-star pt-5 ">Respuesta x1</h2>
              <input
                class="text-center  border-solid border-2 bg-black h-10 w-28 rounded-md placeholder-slate-500"
                type="text"
                placeholder="x1"
                [(ngModel)]="x1"
                readonly
              />
            </div>
            <div>

              <h2 class="text-star pt-5">Respuesta x2</h2>
              <input
                class="text-center  border-solid border-2  bg-black h-10 w-28 rounded-md placeholder-slate-500"
                type="text"
                placeholder="x2"
                [(ngModel)]="x2"
                readonly
              />
            </div>

          </div>
        </div>
      </div>
    </ion-content>
  `,
})
export class Tab3Page {
  constructor() {}

  num1: number | null = null;
  num2: number | null = null;
  num3: number | null = null;
  x1: number | string = '';
  x2: number | string = '';

  calcular() {
    if (this.num1 === null || this.num2 === null || this.num3 === null) return;

    const discriminante = this.num2 * this.num2 - 4 * this.num1 * this.num2;
    if (discriminante > 0) {
      this.x1 = (-this.num2 + Math.sqrt(discriminante)) / (2 * this.num1);
      this.x2 = (-this.num2 - Math.sqrt(discriminante)) / (2 * this.num1);
    } else if (discriminante === 0) {
      this.x1 = -this.num2 / (2 * this.num1);
      this.x2 = 'Sin solución';
    } else {
      this.x1 = 'Sin solución';
      this.x2 = 'Sin solución';
    }
    // Limpiar los campos luego de calcular
    this.num1 = null;
    this.num2 = null;
    this.num3 = null;
  }
}
