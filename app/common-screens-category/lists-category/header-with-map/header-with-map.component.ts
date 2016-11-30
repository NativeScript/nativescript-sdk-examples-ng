import { Component, ChangeDetectionStrategy, OnInit, Input } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { mockedDataArray } from "../mock-dataItems";
import { Location } from "nativescript-geolocation";
import { TnsGoogleMaps } from "nativescript-googlemaps";
import * as app from "application";
import { isAndroid } from "platform";
// >> ext-listview-map-header-code
declare var com: any;
@Component({
    moduleId: module.id,
    templateUrl: "./header-with-map.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderWithMapExampleComponent {
    public countries: ObservableArray<any>;
    public markerlocation: Location;
    public markersPosition: Array<any>;
    public mapview: TnsGoogleMaps;
    public isServiceAvailable: boolean = true;

    constructor() {
        this.countries = new ObservableArray(mockedDataArray);
        this.markersPosition = [{latitude: -35.2813043, longitude: 149.1204446},
        {latitude: 50.854954, longitude: 4.3053504},
        {latitude: 42.6955369, longitude: 23.2539072},
        {latitude: 45.1975819, longitude: -76.1710703},
        {latitude: 46.9358806, longitude: 7.366966},
        {latitude: 39.9390731, longitude: 116.1172806},
        {latitude: 50.0598057, longitude: 14.3255425},
        {latitude: 52.5076682, longitude: 13.2860635},
        {latitude: 40.4380638, longitude: -3.7495762},
        {latitude: 8.9633398, longitude: 38.7081048},
        {latitude: 45.8402941, longitude: 15.8942921},
        {latitude: 47.4813602, longitude: 18.9902213},
        {latitude: 41.9102415, longitude: 12.3959156},
        {latitude: 18.0180149, longitude: -76.8356758},
        {latitude: 44.4379269, longitude: 26.0245981},
        {latitude: 55.7498598, longitude: 37.3523236},
        {latitude: 38.8994614, longitude: -77.0846061}];
        if (isAndroid) {
            let context = app.android.context;
            let api = com.google.android.gms.common.GoogleApiAvailability.getInstance();
            console.log(api.isGooglePlayServicesAvailable(context));
            if (api.isGooglePlayServicesAvailable(context) === 1) {
                this.isServiceAvailable = false;
                alert("Google maps will not run without Google Play services");
            }
        }
    }

    onItemTapList(args) {
         let index = args.index;
         if (this.isServiceAvailable) {
                let newMarkerLocation = new Location();
                newMarkerLocation.latitude = this.markersPosition[index].latitude;
                newMarkerLocation.longitude = this.markersPosition[index].longitude;
                this.markerlocation = newMarkerLocation;
         }
    }

    public onMapReady(args) {
        if (this.isServiceAvailable) {
            let newMarkerLocation = new Location();
            newMarkerLocation.latitude = this.markersPosition[2].latitude;
            newMarkerLocation.longitude = this.markersPosition[2].longitude;
            this.markerlocation = newMarkerLocation;
        }
    }
}
// << ext-listview-map-header-code
