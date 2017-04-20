"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var device_service_1 = require("../services/device.service");
var OverviewComponent = (function () {
    function OverviewComponent(deviceService) {
        var _this = this;
        deviceService.getDevices().then(function (result) { return _this.devices = result; });
    }
    OverviewComponent = __decorate([
        core_1.Component({
            selector: 'overview',
            template: "\n        <aside class=\"sidebar\" aria-labelledby=\"serverinfoheadline\">\n            <div class=\"server-info-container\">\n              <h2 class=\"accessibility\" id=\"serverinfoheadline\">Serverstatus</h2>\n              <dl class=\"server-data properties\">\n                <dt class=\"accessibility\">Serverstatus:</dt>\n                <dd class=\"server-status\">Serverstatus:</dd>\n                <dt>Benutzer</dt>\n                <dd>\n                  <span class=\"system-start-time\">Administrator</span>\n                </dd>\n                <dt>Systemstartzeit</dt>\n                <dd>\n                  <span class=\"system-start-time\">10:00</span>\n                </dd>\n                <dt>Systemstartdatum</dt>\n                <dd>\n                  <span class=\"system-start-datum\">06.03.2017</span>\n                </dd>\n                <dt>Fehlgeschlagene Logins</dt>\n                <dd>\n                  <span class=\"failed-logins\">3</span>\n                </dd>\n              </dl>\n            </div>\n          </aside>\n          <main aria-labelledby=\"devicesheadline\">\n            <h2 class=\"main-headline\" id=\"devicesheadline\">Ger\u00E4te</h2>\n            <div class=\"devices\">\n              <div *ngFor=\"let device of devices\" class=\"device-outer\" attr.data-device-id={{device.id}}>\n                <a routerLink=\"/details\" class=\"device\"\n                   title={{device.description}}>\n                  <dl class=\"device-properties\">\n                    <dt>Anzeigename</dt>\n                    <dd class=\"device-displayname\">{{device.display_name}}</dd>\n                    <dt>Ger\u00E4tetyp</dt>\n                    <dd class=\"device-type\">{{device.type}}</dd>\n                    <dt>Ger\u00E4tename</dt>\n                    <dd class=\"device-name\">{{device.type_name}}</dd>\n                  </dl>\n                  <div class=\"device-image-container\">\n                    <img class=\"device-image\" width=\"180\" height=\"180\" src={{device.image}}\n                         alt={{device.image_alt}}>\n                  </div>\n                </a>\n                <ul class=\"device-actions\">\n                  <li><a href=\"\"><img class=\"device-edit\" src=\"../../images/edit.png\" alt=\"edit device\"></a></li>\n                  <li><a href=\"\"><img class=\"device-remove\" src=\"../../images/remove.png\" alt=\"remove device\"></a></li>\n                </ul>\n              </div>\n            </div>\n        </main>\n        "
        }), 
        __metadata('design:paramtypes', [device_service_1.DeviceService])
    ], OverviewComponent);
    return OverviewComponent;
}());
exports.OverviewComponent = OverviewComponent;
//# sourceMappingURL=overview.component.js.map