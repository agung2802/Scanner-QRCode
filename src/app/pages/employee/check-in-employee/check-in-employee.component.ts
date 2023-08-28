import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';
declare var $: any;

@Component({
  selector: 'app-check-in-employee',
  templateUrl: './check-in-employee.component.html',
  styleUrls: ['./check-in-employee.component.scss']
})
export class CheckInEmployeeComponent implements OnInit{
  //Map
  @ViewChild('map') mapElement: ElementRef | undefined;
  map!: google.maps.Map;
  latitude!: number;
  longitude!: number;

  //webcam
  @ViewChild('videoElement', { static: true }) videoElement: ElementRef | undefined;
  capturedImage!: string;

  ngOnInit() {  
    this.getCurrentLocation();
  }

  openModal(modalId: string) {
    console.log("test");
    
    $(`#myModal`).modal('show');
  }

  closeModal(modalId: string) {
    $(`#${modalId}`).modal('hide');
  }

  // Function Map
  getCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.initMap();
        },
        (error) => {
          console.error('Error getting location', error);
        }
      );
    } else {
      console.error('Geolocation not available');
    }
  }

  initMap() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    // this.in = `${hours}:${minutes}`;

    const mapProperties = {
      center: new google.maps.LatLng(this.latitude, this.longitude),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    if (this.mapElement) {
      this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
      new google.maps.Marker({
        position: { lat: this.latitude, lng: this.longitude },
        map: this.map,
        title: 'Your Location'
      });
    }
  }

  // Function Take Picture

  async openWebcam(id: any){
    // this.id = id;
    this.getCurrentLocation();
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (this.videoElement) {
        this.videoElement.nativeElement.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  }

  takePicture() {
    if (this.videoElement) {
      const video = this.videoElement.nativeElement;
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        this.capturedImage = canvas.toDataURL('image/png'); // Convert to base64 URL
      } else {
        console.error('Could not get 2D context for canvas.');
      }
    }
  }

}
