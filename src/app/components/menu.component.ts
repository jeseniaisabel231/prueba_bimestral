import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
  template: `
    <ion-menu [contentId]="contentId">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menú de Acciones</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-button (click)="router.navigate(['john'])"> CV Jhon </ion-button>
        <ion-button (click)="router.navigate(['dustin'])">
          CV Dustin
        </ion-button>
        <ion-button (click)="router.navigate(['isabel'])">
          CV Isabel
        </ion-button>
      </ion-content>
    </ion-menu>
  `,
})
export class MenuComponent {
  constructor(public router: Router) {}
  @Input() contentId!: string;
}
