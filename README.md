Aquí tienes todo el contenido listo para ser copiado directamente a un archivo `README.md`, incluyendo código, instrucciones y créditos. Todo está completo en un solo archivo:

````markdown
# 📍 MiGPS - Geolocalización con Capacitor + Ionic

**Integrantes**: Francis Aconda & Marco Tapia 
**Plataforma**: Android  
**Tecnologías**: Ionic + Angular + Capacitor

---

## 🚀 Descripción

**MiGPS** es una aplicación móvil que obtiene la ubicación actual del usuario y genera un enlace directo a Google Maps desde el teléfono. Es útil para pruebas de geolocalización y despliegue en Android usando Capacitor.

---

## 📲 Instalación y despliegue en Android

### 1. Instalar dependencias

```bash
npm install @capacitor/core @capacitor/cli
````

### 2. Inicializar Capacitor

```bash
npx cap init
```

Completa los datos solicitados:

* **App name**: MiGPS
* **App ID**: com.miempresa.migps

### 3. Añadir Android como plataforma

```bash
npx cap add android
npx cap copy
npx cap sync
npx cap open android
```

---

## 🛠️ Permisos requeridos

Agregar los siguientes permisos en el archivo `AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

---

## 🧩 Código de ejemplo (`home.page.ts`)

```ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
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
}
```

---

## 🌐 Abrir ubicación en Google Maps

Una vez obtenidas las coordenadas, puedes generar la URL para abrir Google Maps:

```ts
const url = `https://www.google.com/maps/search/?api=1&query=${this.latitude},${this.longitude}`;
window.open(url, '_blank');
```

Esto abrirá la ubicación directamente en la app de Google Maps desde el navegador del dispositivo.

---

## 📚 Recursos oficiales

* [Permisos de ubicación - Documentación Android](https://developer.android.com/develop/sensors-and-location/location/permissions?hl=es-419)

---

## 👨‍💻 Autores

* **Marco** – Desarrollo e integración con Capacitor
* **Francias** – Despliegue en Android y configuración de permisos

---

## ✅ Estado del proyecto

* [x] Obtención de ubicación
* [x] Generación de enlace Google Maps
* [x] Despliegue en dispositivo Android
* [x] Permisos configurados

---

## 📦 Requisitos previos

* Node.js y npm instalados
* Ionic CLI instalado
* Android Studio configurado
* Dispositivo Android o emulador disponible

```

Este archivo está listo para colocarlo directamente como `README.md` en tu repositorio. ¿Quieres que lo genere como archivo descargable también?
```
