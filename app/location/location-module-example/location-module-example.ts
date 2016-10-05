// >> time-picker-configure-code
import { Component } from "@angular/core";
import {LocationMonitor, Location, getCurrentLocation, isEnabled, distance, enableLocationRequest, watchLocation, clearWatch} from "nativescript-geolocation";
import {SegmentedBarItem} from "ui/segmented-bar";
import {setInterval} from "timer";



@Component({
    selector: 'location-module-component',
    styleUrls:['location/location-module-example/style.css'],
    templateUrl: 'location/location-module-example/location-module-example.html'
})

export class LocationModuleExampleComponent {

    public distanceResult:string = "0";
    public distance:number =0;
    public index:number = 0;
    public units;// = ["meters", "kilometers", "miles", "inches"]

    public isMonitoring = false;
    public options;
    public listener;
    public monitor_longitude:string = "0";
    public monitor_latitude:string = "0";

    public startpoint_longitude:number = 42.696552;
    public startpoint_latitude:number = 23.32601;
    public endpoint_longitude:number = 40.71448;
    public endpoint_latitude:number = -74.00598;


    constructor(){
        this.units=[];
        var item1 = new SegmentedBarItem();
        item1.title = "meters";
        this.units.push(item1);
        var item2 = new SegmentedBarItem();
        item2.title = "kilometers";
        this.units.push(item2);
        var item3 = new SegmentedBarItem();
        item3.title = "miles";
        this.units.push(item3);
        var item4 = new SegmentedBarItem();
        item4.title = "inches";
        this.units.push(item4);

        this.options={
            updateDistance:3,
            minimumUpdateTime:2000,
            maximumAge:10000,
            timeout:5000
        }

        enableLocationRequest(true);
    }


   public isLocationEnabled(){
       
       var isEnabledProperty = isEnabled();
       var message = "Location services are not available";
       if(isEnabledProperty){
           message = "Location services are available";
       }
       alert(message);
   }


   public getDistance(){
       var startLocation:Location =new Location();
       startLocation.longitude = this.startpoint_longitude;
       startLocation.latitude = this.startpoint_latitude;

       var endLocation:Location =new Location();
       endLocation.longitude = this.endpoint_longitude;
       endLocation.latitude = this.endpoint_latitude;
       this.distance = distance(startLocation, endLocation);


       console.log("distance - "+this.distance);
       switch (this.index) {
           case 0:
               this.distanceResult=(this.distance).toFixed(3);
               break;
           case 1:
               this.distanceResult=(this.distance*0.001).toFixed(3);
               break;
           case 2:
               this.distanceResult=(this.distance*0.000621371192).toFixed(3);
               break;
           case 3:
               this.distanceResult=(this.distance*39.3700787).toFixed(3);
               break;
       
           default:
               break;
       }

   }

   public indexChange(args){
       switch (args) {
           case 0:
               this.distanceResult=(this.distance).toFixed(3);
               break;
           case 1:
               this.distanceResult=(this.distance*0.001).toFixed(3);
               break;
           case 2:
               this.distanceResult=(this.distance*0.000621371192).toFixed(3);
               break;
           case 3:
               this.distanceResult=(this.distance*39.3700787).toFixed(3);
               break;
       
           default:
               break;
       }
   }


   public getLocationOnce(){
       getCurrentLocation({ maximumAge: 10000, timeout: 5000 }).then(function (location:Location) {
            console.log('Location received: ' + location);
            alert("Longitude: "+(location.longitude).toFixed(2)+" - Latitude:"+(location.latitude).toFixed(2))
        }, function (error) {
            console.log('Location error received: ' + error);
            alert('Location error received: ' + error);
        });
        Location
   }


   public monitor(){
    console.log("inside the mthod");
    var that =this;
    console.log(this.isMonitoring);
       if(this.isMonitoring){
           clearWatch(this.listener);
           this.isMonitoring = false;
       }
       else{
          this.listener = watchLocation(that.result,
            function (e) {
                console.log("Error: " + e.message);
            }, this.options);
            this.isMonitoring = true;
        }
   }


   public result(loc:Location){
        if (loc) {

                    console.log(loc.longitude+" "+loc.latitude);
                    setInterval(function(){
                        this.monitor_latitude = (loc.longitude).toFixed(5);
                        this.monitor_latitude = (loc.latitude).toFixed(5);
                    },1)
                    
                }
   }
}
// << time-picker-configure-code
