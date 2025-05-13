import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton
  ],
})
export class HomePage implements OnInit {
  latitude: number | null = null;
  longitude: number | null = null;

  async ngOnInit() {
    await Geolocation.requestPermissions();
    this.getCurrentLocation();
  }

  async getCurrentLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
    } catch (error) {
      console.error('Error obteniendo ubicación:', error);
    }
  }

  openInGoogleMaps() {
    if (this.latitude && this.longitude) {
      const url = `https://www.google.com/maps?q=${this.latitude},${this.longitude}`;
      window.open(url, '_system');
    }
  }
}

