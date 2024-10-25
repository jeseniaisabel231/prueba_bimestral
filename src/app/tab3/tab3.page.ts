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
        <ion-title>Calcular Raíces</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <form (ngSubmit)="calcularRaices()" class="flex flex-col">
        <div>

          <ion-item>
            <ion-label position="floating">Ingresa el coeficiente a</ion-label>
            <ion-input
              type="number"
              [(ngModel)]="a"
              name="a"
              required
            ></ion-input>
          </ion-item>
        </div>
        <ion-item>
          <ion-label position="floating">Ingresa el coeficiente b</ion-label>
          <ion-input
            type="number"
            [(ngModel)]="b"
            name="b"
            required
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Ingresa el coeficiente c</ion-label>
          <ion-input
            type="number"
            [(ngModel)]="c"
            name="c"
            required
          ></ion-input>
        </ion-item>

        <div class="flex justify-center items-center mt-7">
          <ion-button expand="full" type="submit">Resultado</ion-button>
        </div>
      </form>

      <strong>Resultado:</strong>
      <div *ngIf="raices" class="flex  w-32 items-center justify-center">
        <p *ngIf="raices.length === 2">
          x1: {{ raices[0] }}<br />x2: {{ raices[1] }}
        </p>
        <p *ngIf="raices.length === 1">x: {{ raices[0] }}</p>
        <p *ngIf="raices.length === 0">No hay raíces reales.</p>
      </div>
    </ion-content>
  `,
})
export class Tab3Page {
  a: number;
  b: number;
  c: number;
  raices: number[];

  constructor() {
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.raices = [];
  }

  calcularRaices() {
    const discriminante = this.b ** 2 - 4 * this.a * this.c;

    if (discriminante > 0) {
      const x1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
      const x2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
      this.raices = [x1, x2];
    } else if (discriminante === 0) {
      const x = -this.b / (2 * this.a);
      this.raices = [x];
    } else {
      this.raices = [];
    }
  }
}
