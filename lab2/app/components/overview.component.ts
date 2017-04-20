import { Component } from '@angular/core';
import {DeviceService} from "../services/device.service";
import {Device} from "../model/device";

@Component({
    selector: 'overview',
    template: `
        <aside class="sidebar" aria-labelledby="serverinfoheadline">
            <div class="server-info-container">
              <h2 class="accessibility" id="serverinfoheadline">Serverstatus</h2>
              <dl class="server-data properties">
                <dt class="accessibility">Serverstatus:</dt>
                <dd class="server-status">Serverstatus:</dd>
                <dt>Benutzer</dt>
                <dd>
                  <span class="system-start-time">Administrator</span>
                </dd>
                <dt>Systemstartzeit</dt>
                <dd>
                  <span class="system-start-time">10:00</span>
                </dd>
                <dt>Systemstartdatum</dt>
                <dd>
                  <span class="system-start-datum">06.03.2017</span>
                </dd>
                <dt>Fehlgeschlagene Logins</dt>
                <dd>
                  <span class="failed-logins">3</span>
                </dd>
              </dl>
            </div>
          </aside>
          <main aria-labelledby="devicesheadline">
            <h2 class="main-headline" id="devicesheadline">Geräte</h2>
            <div class="devices">
              <div *ngFor="let device of devices" class="device-outer" attr.data-device-id={{device.id}}>
                <a [routerLink]="['/details', device.id]" class="device"
                   title={{device.description}}>
                  <dl class="device-properties">
                    <dt>Anzeigename</dt>
                    <dd class="device-displayname">{{device.display_name}}</dd>
                    <dt>Gerätetyp</dt>
                    <dd class="device-type">{{device.type}}</dd>
                    <dt>Gerätename</dt>
                    <dd class="device-name">{{device.type_name}}</dd>
                  </dl>
                  <div class="device-image-container">
                    <img class="device-image" width="180" height="180" src={{device.image}}
                         alt={{device.image_alt}}>
                  </div>
                </a>
                <ul class="device-actions">
                  <li><a href=""><img class="device-edit" src="../../images/edit.png" alt="edit device"></a></li>
                  <li><a href=""><img class="device-remove" src="../../images/remove.png" alt="remove device"></a></li>
                </ul>
              </div>
            </div>
        </main>
        `
})

export class OverviewComponent {
    devices: Device[];

    constructor(deviceService: DeviceService){
        deviceService.getDevices().then(result => {
            this.devices = result;
            console.log(this.devices)
        })
    }
}