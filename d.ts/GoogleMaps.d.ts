// declare class GMSAddress extends NSObject implements NSCopying {
//     static alloc(): GMSAddress; // inherited from NSObject
//     static new(): GMSAddress; // inherited from NSObject
//     administrativeArea: string;
//     coordinate: CLLocationCoordinate2D;
//     country: string;
//     lines: NSArray;
//     locality: string;
//     postalCode: string;
//     subLocality: string;
//     thoroughfare: string;
//     addressLine1(): string;
//     addressLine2(): string;
//     copyWithZone(zone: any): any; // inherited from NSCopying
//     init(): GMSAddress; // inherited from NSObject
//     self(): GMSAddress; // inherited from NSObjectProtocol
// }

// declare class GMSAutocompleteFilter extends NSObject {
//     static alloc(): GMSAutocompleteFilter; // inherited from NSObject
//     static new(): GMSAutocompleteFilter; // inherited from NSObject
//     type: GMSPlacesAutocompleteTypeFilter;
//     init(): GMSAutocompleteFilter; // inherited from NSObject
//     self(): GMSAutocompleteFilter; // inherited from NSObjectProtocol
// }

// declare class GMSAutocompleteMatchFragment extends NSObject {
//     static alloc(): GMSAutocompleteMatchFragment; // inherited from NSObject
//     static new(): GMSAutocompleteMatchFragment; // inherited from NSObject
//     length: number;
//     offset: number;
//     init(): GMSAutocompleteMatchFragment; // inherited from NSObject
//     self(): GMSAutocompleteMatchFragment; // inherited from NSObjectProtocol
// }

// declare class GMSAutocompletePrediction extends NSObject {
//     static alloc(): GMSAutocompletePrediction; // inherited from NSObject
//     static new(): GMSAutocompletePrediction; // inherited from NSObject
//     attributedFullText: NSAttributedString;
//     placeID: string;
//     types: NSArray;
//     init(): GMSAutocompletePrediction; // inherited from NSObject
//     self(): GMSAutocompletePrediction; // inherited from NSObjectProtocol
// }

// declare class GMSCALayer extends CALayer {
//     static layer(): GMSCALayer; // inherited from CALayer
//     initWithCoder(aDecoder: NSCoder): GMSCALayer; // inherited from NSCoding
//     initWithLayer(layer: any): GMSCALayer; // inherited from CALayer
// }

// declare class GMSCameraPosition extends NSObject implements NSCopying, NSMutableCopying {
//     static alloc(): GMSCameraPosition; // inherited from NSObject
//     static cameraWithLatitudeLongitudeZoom(latitude: number, longitude: number, zoom: number): GMSCameraPosition;
//     static cameraWithLatitudeLongitudeZoomBearingViewingAngle(latitude: number, longitude: number, zoom: number, bearing: number, viewingAngle: number): GMSCameraPosition;
//     static cameraWithTargetZoom(target: CLLocationCoordinate2D, zoom: number): GMSCameraPosition;
//     static cameraWithTargetZoomBearingViewingAngle(target: CLLocationCoordinate2D, zoom: number, bearing: number, viewingAngle: number): GMSCameraPosition;
//     static new(): GMSCameraPosition; // inherited from NSObject
//     static zoomAtCoordinateForMetersPerPoints(coordinate: CLLocationCoordinate2D, meters: number, points: number): number;
//     bearing: number;
//     target: CLLocationCoordinate2D;
//     viewingAngle: number;
//     zoom: number;
//     copyWithZone(zone: any): any; // inherited from NSCopying
//     init(): GMSCameraPosition; // inherited from NSObject
//     initWithTargetZoomBearingViewingAngle(target: CLLocationCoordinate2D, zoom: number, bearing: number, viewingAngle: number): GMSCameraPosition;
//     mutableCopyWithZone(zone: any): any; // inherited from NSMutableCopying
//     self(): GMSCameraPosition; // inherited from NSObjectProtocol
// }

// declare class GMSCameraUpdate extends NSObject {
//     static alloc(): GMSCameraUpdate; // inherited from NSObject
//     static fitBounds(bounds: GMSCoordinateBounds): GMSCameraUpdate;
//     static fitBoundsWithEdgeInsets(bounds: GMSCoordinateBounds, edgeInsets: UIEdgeInsets): GMSCameraUpdate;
//     static fitBoundsWithPadding(bounds: GMSCoordinateBounds, padding: number): GMSCameraUpdate;
//     static new(): GMSCameraUpdate; // inherited from NSObject
//     static scrollByXY(dX: number, dY: number): GMSCameraUpdate;
//     static setCamera(camera: GMSCameraPosition): GMSCameraUpdate;
//     static setTarget(target: CLLocationCoordinate2D): GMSCameraUpdate;
//     static setTargetZoom(target: CLLocationCoordinate2D, zoom: number): GMSCameraUpdate;
//     static zoomBy(delta: number): GMSCameraUpdate;
//     static zoomByAtPoint(zoom: number, point: CGPoint): GMSCameraUpdate;
//     static zoomIn(): GMSCameraUpdate;
//     static zoomOut(): GMSCameraUpdate;
//     static zoomTo(zoom: number): GMSCameraUpdate;
//     init(): GMSCameraUpdate; // inherited from NSObject
//     self(): GMSCameraUpdate; // inherited from NSObjectProtocol
// }

// declare class GMSCircle extends GMSOverlay {
//     static circleWithPositionRadius(position: CLLocationCoordinate2D, radius: number): GMSCircle;
//     fillColor: UIColor;
//     position: CLLocationCoordinate2D;
//     radius: number;
//     strokeColor: UIColor;
//     strokeWidth: number;
// }

// declare class GMSCoordinateBounds extends NSObject {
//     static alloc(): GMSCoordinateBounds; // inherited from NSObject
//     static new(): GMSCoordinateBounds; // inherited from NSObject
//     northEast: CLLocationCoordinate2D;
//     southWest: CLLocationCoordinate2D;
//     valid: boolean;
//     containsCoordinate(coordinate: CLLocationCoordinate2D): boolean;
//     includingBounds(other: GMSCoordinateBounds): GMSCoordinateBounds;
//     includingCoordinate(coordinate: CLLocationCoordinate2D): GMSCoordinateBounds;
//     includingPath(path: GMSPath): GMSCoordinateBounds;
//     init(): GMSCoordinateBounds; // inherited from NSObject
//     initWithCoordinateCoordinate(coord1: CLLocationCoordinate2D, coord2: CLLocationCoordinate2D): GMSCoordinateBounds;
//     initWithPath(path: GMSPath): GMSCoordinateBounds;
//     initWithRegion(region: GMSVisibleRegion): GMSCoordinateBounds;
//     intersectsBounds(other: GMSCoordinateBounds): boolean;
//     self(): GMSCoordinateBounds; // inherited from NSObjectProtocol
// }

// declare class GMSGeocoder extends NSObject {
//     static alloc(): GMSGeocoder; // inherited from NSObject
//     static geocoder(): GMSGeocoder;
//     static new(): GMSGeocoder; // inherited from NSObject
//     init(): GMSGeocoder; // inherited from NSObject
//     reverseGeocodeCoordinateCompletionHandler(coordinate: CLLocationCoordinate2D, handler: (p1: GMSReverseGeocodeResponse, p2: NSError) => void): void;
//     self(): GMSGeocoder; // inherited from NSObjectProtocol
// }

// declare const enum GMSGeocoderErrorCode {
//     kGMSGeocoderErrorInvalidCoordinate = 1,
//     kGMSGeocoderErrorInternal = 2
// }

// declare function GMSGeometryArea(path: GMSPath): number;

// declare function GMSGeometryContainsLocation(point: CLLocationCoordinate2D, path: GMSPath, geodesic: boolean): boolean;

// declare function GMSGeometryDistance(from: CLLocationCoordinate2D, to: CLLocationCoordinate2D): number;

// declare function GMSGeometryHeading(from: CLLocationCoordinate2D, to: CLLocationCoordinate2D): number;

// declare function GMSGeometryInterpolate(from: CLLocationCoordinate2D, to: CLLocationCoordinate2D, fraction: number): CLLocationCoordinate2D;

// declare function GMSGeometryIsLocationOnPath(point: CLLocationCoordinate2D, path: GMSPath, geodesic: boolean): boolean;

// declare function GMSGeometryIsLocationOnPathTolerance(point: CLLocationCoordinate2D, path: GMSPath, geodesic: boolean, tolerance: number): boolean;

// declare function GMSGeometryLength(path: GMSPath): number;

// declare function GMSGeometryOffset(from: CLLocationCoordinate2D, distance: number, heading: number): CLLocationCoordinate2D;

// declare function GMSGeometrySignedArea(path: GMSPath): number;

// declare class GMSGroundOverlay extends GMSOverlay {
//     static groundOverlayWithBoundsIcon(bounds: GMSCoordinateBounds, icon: UIImage): GMSGroundOverlay;
//     static groundOverlayWithPositionIconZoomLevel(position: CLLocationCoordinate2D, icon: UIImage, zoomLevel: number): GMSGroundOverlay;
//     anchor: CGPoint;
//     bearing: number;
//     bounds: GMSCoordinateBounds;
//     icon: UIImage;
//     position: CLLocationCoordinate2D;
// }

// declare class GMSIndoorBuilding extends NSObject {
//     static alloc(): GMSIndoorBuilding; // inherited from NSObject
//     static new(): GMSIndoorBuilding; // inherited from NSObject
//     defaultLevelIndex: number;
//     levels: NSArray;
//     underground: boolean;
//     init(): GMSIndoorBuilding; // inherited from NSObject
//     self(): GMSIndoorBuilding; // inherited from NSObjectProtocol
// }

// declare class GMSIndoorDisplay extends NSObject {
//     static alloc(): GMSIndoorDisplay; // inherited from NSObject
//     static new(): GMSIndoorDisplay; // inherited from NSObject
//     activeBuilding: GMSIndoorBuilding;
//     activeLevel: GMSIndoorLevel;
//     delegate: GMSIndoorDisplayDelegate;
//     init(): GMSIndoorDisplay; // inherited from NSObject
//     self(): GMSIndoorDisplay; // inherited from NSObjectProtocol
// }

// interface GMSIndoorDisplayDelegate extends NSObjectProtocol {
//     didChangeActiveBuilding?(building: GMSIndoorBuilding): void;
//     didChangeActiveLevel?(level: GMSIndoorLevel): void;
// }
// declare var GMSIndoorDisplayDelegate: any; /* Protocol */

// declare class GMSIndoorLevel extends NSObject {
//     static alloc(): GMSIndoorLevel; // inherited from NSObject
//     static new(): GMSIndoorLevel; // inherited from NSObject
//     name: string;
//     shortName: string;
//     init(): GMSIndoorLevel; // inherited from NSObject
//     self(): GMSIndoorLevel; // inherited from NSObjectProtocol
// }

// declare const enum GMSLengthKind {
//     kGMSLengthGeodesic = 0,
//     kGMSLengthRhumb = 1,
//     kGMSLengthProjected = 2
// }

// declare class GMSMapLayer extends GMSCALayer {
//     cameraBearing: number;
//     cameraLatitude: number;
//     cameraLongitude: number;
//     cameraViewingAngle: number;
//     cameraZoomLevel: number;
// }

// interface GMSMapPoint {
//     x: number;
//     y: number;
// }
// declare var GMSMapPoint: any;

// declare function GMSMapPointDistance(a: GMSMapPoint, b: GMSMapPoint): number;

// declare function GMSMapPointInterpolate(a: GMSMapPoint, b: GMSMapPoint, t: number): GMSMapPoint;

// declare class GMSMapView extends UIView {
//     static appearance(): GMSMapView; // inherited from UIAppearance
//     static appearanceForTraitCollection(trait: UITraitCollection): GMSMapView; // inherited from UIAppearance
//     static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GMSMapView; // inherited from UIAppearance
//     static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray): GMSMapView; // inherited from UIAppearance
//     static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GMSMapView; // inherited from UIAppearance
//     static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray): GMSMapView; // inherited from UIAppearance
//     static mapWithFrameCamera(frame: CGRect, camera: GMSCameraPosition): GMSMapView;
//     buildingsEnabled: boolean;
//     camera: GMSCameraPosition;
//     delegate: GMSMapViewDelegate;
//     indoorDisplay: GMSIndoorDisplay;
//     indoorEnabled: boolean;
//     layer: GMSMapLayer;
//     mapType: GMSMapViewType;
//     maxZoom: number;
//     minZoom: number;
//     myLocation: CLLocation;
//     myLocationEnabled: boolean;
//     padding: UIEdgeInsets;
//     projection: GMSProjection;
//     selectedMarker: GMSMarker;
//     settings: GMSUISettings;
//     trafficEnabled: boolean;
//     animateToBearing(bearing: number): void;
//     animateToCameraPosition(cameraPosition: GMSCameraPosition): void;
//     animateToLocation(location: CLLocationCoordinate2D): void;
//     animateToViewingAngle(viewingAngle: number): void;
//     animateToZoom(zoom: number): void;
//     animateWithCameraUpdate(cameraUpdate: GMSCameraUpdate): void;
//     cameraForBoundsInsets(bounds: GMSCoordinateBounds, insets: UIEdgeInsets): GMSCameraPosition;
//     clear(): void;
//     initWithCoder(aDecoder: NSCoder): GMSMapView; // inherited from NSCoding
//     initWithFrame(frame: CGRect): GMSMapView; // inherited from UIView
//     moveCamera(update: GMSCameraUpdate): void;
//     self(): GMSMapView; // inherited from NSObjectProtocol
//     setMinZoomMaxZoom(minZoom: number, maxZoom: number): void;
//     startRendering(): void;
//     stopRendering(): void;
// }

// interface GMSMapViewDelegate extends NSObjectProtocol {
//     didTapMyLocationButtonForMapView?(mapView: GMSMapView): boolean;
//     mapViewDidBeginDraggingMarker?(mapView: GMSMapView, marker: GMSMarker): void;
//     mapViewDidChangeCameraPosition?(mapView: GMSMapView, position: GMSCameraPosition): void;
//     mapViewDidDragMarker?(mapView: GMSMapView, marker: GMSMarker): void;
//     mapViewDidEndDraggingMarker?(mapView: GMSMapView, marker: GMSMarker): void;
//     mapViewDidLongPressAtCoordinate?(mapView: GMSMapView, coordinate: CLLocationCoordinate2D): void;
//     mapViewDidTapAtCoordinate?(mapView: GMSMapView, coordinate: CLLocationCoordinate2D): void;
//     mapViewDidTapInfoWindowOfMarker?(mapView: GMSMapView, marker: GMSMarker): void;
//     mapViewDidTapMarker?(mapView: GMSMapView, marker: GMSMarker): boolean;
//     mapViewDidTapOverlay?(mapView: GMSMapView, overlay: GMSOverlay): void;
//     mapViewIdleAtCameraPosition?(mapView: GMSMapView, position: GMSCameraPosition): void;
//     mapViewMarkerInfoContents?(mapView: GMSMapView, marker: GMSMarker): UIView;
//     mapViewMarkerInfoWindow?(mapView: GMSMapView, marker: GMSMarker): UIView;
//     mapViewWillMove?(mapView: GMSMapView, gesture: boolean): void;
// }
// declare var GMSMapViewDelegate: any; /* Protocol */

// declare const enum GMSMapViewType {
//     kGMSTypeNormal = 1,
//     kGMSTypeSatellite = 2,
//     kGMSTypeTerrain = 3,
//     kGMSTypeHybrid = 4,
//     kGMSTypeNone = 5
// }

// declare class GMSMarker extends GMSOverlay {
//     static markerImageWithColor(color: UIColor): UIImage;
//     static markerWithPosition(position: CLLocationCoordinate2D): GMSMarker;
//     appearAnimation: GMSMarkerAnimation;
//     draggable: boolean;
//     flat: boolean;
//     groundAnchor: CGPoint;
//     icon: UIImage;
//     infoWindowAnchor: CGPoint;
//     layer: GMSMarkerLayer;
//     opacity: number;
//     panoramaView: GMSPanoramaView;
//     position: CLLocationCoordinate2D;
//     rotation: number;
//     snippet: string;
//     userData: any;
// }

// declare const enum GMSMarkerAnimation {
//     kGMSMarkerAnimationNone = 0,
//     kGMSMarkerAnimationPop = 1
// }

// declare class GMSMarkerLayer extends CALayer {
//     static layer(): GMSMarkerLayer; // inherited from CALayer
//     latitude: number;
//     longitude: number;
//     rotation: number;
//     initWithCoder(aDecoder: NSCoder): GMSMarkerLayer; // inherited from NSCoding
//     initWithLayer(layer: any): GMSMarkerLayer; // inherited from CALayer
// }

// declare class GMSMutableCameraPosition extends GMSCameraPosition {
//     static cameraWithLatitudeLongitudeZoom(latitude: number, longitude: number, zoom: number): GMSMutableCameraPosition; // inherited from GMSCameraPosition
//     static cameraWithLatitudeLongitudeZoomBearingViewingAngle(latitude: number, longitude: number, zoom: number, bearing: number, viewingAngle: number): GMSMutableCameraPosition; // inherited from GMSCameraPosition
//     static cameraWithTargetZoom(target: CLLocationCoordinate2D, zoom: number): GMSMutableCameraPosition; // inherited from GMSCameraPosition
//     static cameraWithTargetZoomBearingViewingAngle(target: CLLocationCoordinate2D, zoom: number, bearing: number, viewingAngle: number): GMSMutableCameraPosition; // inherited from GMSCameraPosition
//     bearing: number;
//     target: CLLocationCoordinate2D;
//     viewingAngle: number;
//     zoom: number;
//     initWithTargetZoomBearingViewingAngle(target: CLLocationCoordinate2D, zoom: number, bearing: number, viewingAngle: number): GMSMutableCameraPosition; // inherited from GMSCameraPosition
// }

// declare class GMSMutablePath extends GMSPath {
//     static path(): GMSMutablePath; // inherited from GMSPath
//     static pathFromEncodedPath(encodedPath: string): GMSMutablePath; // inherited from GMSPath
//     addCoordinate(coord: CLLocationCoordinate2D): void;
//     addLatitudeLongitude(latitude: number, longitude: number): void;
//     initWithPath(path: GMSPath): GMSMutablePath; // inherited from GMSPath
//     insertCoordinateAtIndex(coord: CLLocationCoordinate2D, index: number): void;
//     pathOffsetByLatitudeLongitude(deltaLatitude: number, deltaLongitude: number): GMSMutablePath; // inherited from GMSPath
//     removeAllCoordinates(): void;
//     removeCoordinateAtIndex(index: number): void;
//     removeLastCoordinate(): void;
//     replaceCoordinateAtIndexWithCoordinate(index: number, coord: CLLocationCoordinate2D): void;
// }

// interface GMSOrientation {
//     heading: number;
//     pitch: number;
// }
// declare var GMSOrientation: any;

// declare class GMSOverlay extends NSObject implements NSCopying {
//     static alloc(): GMSOverlay; // inherited from NSObject
//     static new(): GMSOverlay; // inherited from NSObject
//     map: GMSMapView;
//     tappable: boolean;
//     title: string;
//     zIndex: number;
//     copyWithZone(zone: any): any; // inherited from NSCopying
//     init(): GMSOverlay; // inherited from NSObject
//     self(): GMSOverlay; // inherited from NSObjectProtocol
// }

// declare class GMSPanorama extends NSObject {
//     static alloc(): GMSPanorama; // inherited from NSObject
//     static new(): GMSPanorama; // inherited from NSObject
//     coordinate: CLLocationCoordinate2D;
//     links: NSArray;
//     panoramaID: string;
//     init(): GMSPanorama; // inherited from NSObject
//     self(): GMSPanorama; // inherited from NSObjectProtocol
// }

// declare class GMSPanoramaCamera extends NSObject {
//     static alloc(): GMSPanoramaCamera; // inherited from NSObject
//     static cameraWithHeadingPitchZoom(heading: number, pitch: number, zoom: number): GMSPanoramaCamera;
//     static cameraWithHeadingPitchZoomFOV(heading: number, pitch: number, zoom: number, FOV: number): GMSPanoramaCamera;
//     static cameraWithOrientationZoom(orientation: GMSOrientation, zoom: number): GMSPanoramaCamera;
//     static cameraWithOrientationZoomFOV(orientation: GMSOrientation, zoom: number, FOV: number): GMSPanoramaCamera;
//     static new(): GMSPanoramaCamera; // inherited from NSObject
//     FOV: number;
//     orientation: GMSOrientation;
//     zoom: number;
//     init(): GMSPanoramaCamera; // inherited from NSObject
//     initWithOrientationZoomFOV(orientation: GMSOrientation, zoom: number, FOV: number): GMSPanoramaCamera;
//     self(): GMSPanoramaCamera; // inherited from NSObjectProtocol
// }

// declare class GMSPanoramaCameraUpdate extends NSObject {
//     static alloc(): GMSPanoramaCameraUpdate; // inherited from NSObject
//     static new(): GMSPanoramaCameraUpdate; // inherited from NSObject
//     static rotateBy(deltaHeading: number): GMSPanoramaCameraUpdate;
//     static setHeading(heading: number): GMSPanoramaCameraUpdate;
//     static setPitch(pitch: number): GMSPanoramaCameraUpdate;
//     static setZoom(zoom: number): GMSPanoramaCameraUpdate;
//     init(): GMSPanoramaCameraUpdate; // inherited from NSObject
//     self(): GMSPanoramaCameraUpdate; // inherited from NSObjectProtocol
// }

// declare class GMSPanoramaLayer extends GMSCALayer {
//     cameraFOV: number;
//     cameraHeading: number;
//     cameraPitch: number;
//     cameraZoom: number;
// }

// declare class GMSPanoramaLink extends NSObject {
//     static alloc(): GMSPanoramaLink; // inherited from NSObject
//     static new(): GMSPanoramaLink; // inherited from NSObject
//     heading: number;
//     panoramaID: string;
//     init(): GMSPanoramaLink; // inherited from NSObject
//     self(): GMSPanoramaLink; // inherited from NSObjectProtocol
// }

// declare class GMSPanoramaService extends NSObject {
//     static alloc(): GMSPanoramaService; // inherited from NSObject
//     static new(): GMSPanoramaService; // inherited from NSObject
//     init(): GMSPanoramaService; // inherited from NSObject
//     requestPanoramaNearCoordinateCallback(coordinate: CLLocationCoordinate2D, callback: (p1: GMSPanorama, p2: NSError) => void): void;
//     requestPanoramaNearCoordinateRadiusCallback(coordinate: CLLocationCoordinate2D, radius: number, callback: (p1: GMSPanorama, p2: NSError) => void): void;
//     requestPanoramaWithIDCallback(panoramaID: string, callback: (p1: GMSPanorama, p2: NSError) => void): void;
//     self(): GMSPanoramaService; // inherited from NSObjectProtocol
// }

// declare class GMSPanoramaView extends UIView {
//     static appearance(): GMSPanoramaView; // inherited from UIAppearance
//     static appearanceForTraitCollection(trait: UITraitCollection): GMSPanoramaView; // inherited from UIAppearance
//     static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GMSPanoramaView; // inherited from UIAppearance
//     static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray): GMSPanoramaView; // inherited from UIAppearance
//     static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GMSPanoramaView; // inherited from UIAppearance
//     static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray): GMSPanoramaView; // inherited from UIAppearance
//     static panoramaWithFrameNearCoordinate(frame: CGRect, coordinate: CLLocationCoordinate2D): GMSPanoramaView;
//     static panoramaWithFrameNearCoordinateRadius(frame: CGRect, coordinate: CLLocationCoordinate2D, radius: number): GMSPanoramaView;
//     camera: GMSPanoramaCamera;
//     delegate: GMSPanoramaViewDelegate;
//     layer: GMSPanoramaLayer;
//     navigationGestures: boolean;
//     navigationLinksHidden: boolean;
//     orientationGestures: boolean;
//     panorama: GMSPanorama;
//     streetNamesHidden: boolean;
//     zoomGestures: boolean;
//     animateToCameraAnimationDuration(camera: GMSPanoramaCamera, duration: number): void;
//     initWithCoder(aDecoder: NSCoder): GMSPanoramaView; // inherited from NSCoding
//     initWithFrame(frame: CGRect): GMSPanoramaView; // inherited from UIView
//     moveNearCoordinate(coordinate: CLLocationCoordinate2D): void;
//     moveNearCoordinateRadius(coordinate: CLLocationCoordinate2D, radius: number): void;
//     moveToPanoramaID(panoramaID: string): void;
//     orientationForPoint(point: CGPoint): GMSOrientation;
//     pointForOrientation(orientation: GMSOrientation): CGPoint;
//     self(): GMSPanoramaView; // inherited from NSObjectProtocol
//     setAllGesturesEnabled(enabled: boolean): void;
//     updateCameraAnimationDuration(cameraUpdate: GMSPanoramaCameraUpdate, duration: number): void;
// }

// interface GMSPanoramaViewDelegate extends NSObjectProtocol {
//     panoramaViewDidMoveCamera?(panoramaView: GMSPanoramaView, camera: GMSPanoramaCamera): void;
//     panoramaViewDidMoveToPanorama?(view: GMSPanoramaView, panorama: GMSPanorama): void;
//     panoramaViewDidMoveToPanoramaNearCoordinate?(view: GMSPanoramaView, panorama: GMSPanorama, coordinate: CLLocationCoordinate2D): void;
//     panoramaViewDidTap?(panoramaView: GMSPanoramaView, point: CGPoint): void;
//     panoramaViewDidTapMarker?(panoramaView: GMSPanoramaView, marker: GMSMarker): boolean;
//     panoramaViewErrorOnMoveNearCoordinate?(view: GMSPanoramaView, error: NSError, coordinate: CLLocationCoordinate2D): void;
//     panoramaViewErrorOnMoveToPanoramaID?(view: GMSPanoramaView, error: NSError, panoramaID: string): void;
//     panoramaViewWillMoveToPanoramaID?(view: GMSPanoramaView, panoramaID: string): void;
// }
// declare var GMSPanoramaViewDelegate: any; /* Protocol */

// declare class GMSPath extends NSObject implements NSCopying, NSMutableCopying {
//     static alloc(): GMSPath; // inherited from NSObject
//     static new(): GMSPath; // inherited from NSObject
//     static path(): GMSPath;
//     static pathFromEncodedPath(encodedPath: string): GMSPath;
//     coordinateAtIndex(index: number): CLLocationCoordinate2D;
//     copyWithZone(zone: any): any; // inherited from NSCopying
//     count(): number;
//     encodedPath(): string;
//     init(): GMSPath; // inherited from NSObject
//     initWithPath(path: GMSPath): GMSPath;
//     lengthOfKind(kind: GMSLengthKind): number;
//     mutableCopyWithZone(zone: any): any; // inherited from NSMutableCopying
//     pathOffsetByLatitudeLongitude(deltaLatitude: number, deltaLongitude: number): GMSPath;
//     segmentsForLengthKind(length: number, kind: GMSLengthKind): number;
//     self(): GMSPath; // inherited from NSObjectProtocol
// }

// declare class GMSPlace extends NSObject {
//     static alloc(): GMSPlace; // inherited from NSObject
//     static new(): GMSPlace; // inherited from NSObject
//     attributions: NSAttributedString;
//     coordinate: CLLocationCoordinate2D;
//     formattedAddress: string;
//     name: string;
//     openNowStatus: GMSPlacesOpenNowStatus;
//     phoneNumber: string;
//     placeID: string;
//     priceLevel: GMSPlacesPriceLevel;
//     rating: number;
//     types: NSArray;
//     website: NSURL;
//     init(): GMSPlace; // inherited from NSObject
//     self(): GMSPlace; // inherited from NSObjectProtocol
// }

// declare class GMSPlaceLikelihood extends NSObject implements NSCopying {
//     static alloc(): GMSPlaceLikelihood; // inherited from NSObject
//     static new(): GMSPlaceLikelihood; // inherited from NSObject
//     likelihood: number;
//     place: GMSPlace;
//     copyWithZone(zone: any): any; // inherited from NSCopying
//     init(): GMSPlaceLikelihood; // inherited from NSObject
//     initWithPlaceLikelihood(place: GMSPlace, likelihood: number): GMSPlaceLikelihood;
//     self(): GMSPlaceLikelihood; // inherited from NSObjectProtocol
// }

// declare class GMSPlaceLikelihoodList extends NSObject {
//     static alloc(): GMSPlaceLikelihoodList; // inherited from NSObject
//     static new(): GMSPlaceLikelihoodList; // inherited from NSObject
//     attributions: NSAttributedString;
//     likelihoods: NSArray;
//     init(): GMSPlaceLikelihoodList; // inherited from NSObject
//     self(): GMSPlaceLikelihoodList; // inherited from NSObjectProtocol
// }

// declare class GMSPlacePicker extends NSObject {
//     static alloc(): GMSPlacePicker; // inherited from NSObject
//     static new(): GMSPlacePicker; // inherited from NSObject
//     config: GMSPlacePickerConfig;
//     init(): GMSPlacePicker; // inherited from NSObject
//     initWithConfig(config: GMSPlacePickerConfig): GMSPlacePicker;
//     pickPlaceWithCallback(callback: (p1: GMSPlace, p2: NSError) => void): void;
//     self(): GMSPlacePicker; // inherited from NSObjectProtocol
// }

// declare class GMSPlacePickerConfig extends NSObject {
//     static alloc(): GMSPlacePickerConfig; // inherited from NSObject
//     static new(): GMSPlacePickerConfig; // inherited from NSObject
//     viewport: GMSCoordinateBounds;
//     init(): GMSPlacePickerConfig; // inherited from NSObject
//     initWithViewport(viewport: GMSCoordinateBounds): GMSPlacePickerConfig;
//     self(): GMSPlacePickerConfig; // inherited from NSObjectProtocol
// }

// declare const enum GMSPlacePickerErrorCode {
//     kGMSPlacePickerUnknownError = -1,
//     kGMSPlacePickerInternalError = -2,
//     kGMSPlacePickerInvalidConfig = -3,
//     kGMSPlacePickerOverlappingCalls = -4
// }

// declare const enum GMSPlacesAutocompleteTypeFilter {
//     kGMSPlacesAutocompleteTypeFilterNoFilter = 0,
//     kGMSPlacesAutocompleteTypeFilterGeocode = 1,
//     kGMSPlacesAutocompleteTypeFilterAddress = 2,
//     kGMSPlacesAutocompleteTypeFilterEstablishment = 3,
//     kGMSPlacesAutocompleteTypeFilterRegion = 4,
//     kGMSPlacesAutocompleteTypeFilterCity = 5
// }

// declare class GMSPlacesClient extends NSObject {
//     static alloc(): GMSPlacesClient; // inherited from NSObject
//     static new(): GMSPlacesClient; // inherited from NSObject
//     static sharedClient(): GMSPlacesClient;
//     addPlaceCallback(place: GMSUserAddedPlace, callback: (p1: GMSPlace, p2: NSError) => void): void;
//     autocompleteQueryBoundsFilterCallback(query: string, bounds: GMSCoordinateBounds, filter: GMSAutocompleteFilter, callback: (p1: NSArray, p2: NSError) => void): void;
//     currentPlaceWithCallback(callback: (p1: GMSPlaceLikelihoodList, p2: NSError) => void): void;
//     init(): GMSPlacesClient; // inherited from NSObject
//     lookUpPlaceIDCallback(placeID: string, callback: (p1: GMSPlace, p2: NSError) => void): void;
//     reportDeviceAtPlaceWithID(placeID: string): void;
//     self(): GMSPlacesClient; // inherited from NSObjectProtocol
// }

// declare const enum GMSPlacesErrorCode {
//     kGMSPlacesNetworkError = -1,
//     kGMSPlacesServerError = -2,
//     kGMSPlacesInternalError = -3,
//     kGMSPlacesKeyInvalid = -4,
//     kGMSPlacesKeyExpired = -5,
//     kGMSPlacesUsageLimitExceeded = -6,
//     kGMSPlacesRateLimitExceeded = -7,
//     kGMSPlacesDeviceRateLimitExceeded = -8,
//     kGMSPlacesAccessNotConfigured = -9,
//     kGMSPlacesIncorrectBundleIdentifier = -10
// }

// declare const enum GMSPlacesOpenNowStatus {
//     kGMSPlacesOpenNowStatusYes = 0,
//     kGMSPlacesOpenNowStatusNo = 1,
//     kGMSPlacesOpenNowStatusUnknown = 2
// }

// declare const enum GMSPlacesPriceLevel {
//     kGMSPlacesPriceLevelUnknown = -1,
//     kGMSPlacesPriceLevelFree = 0,
//     kGMSPlacesPriceLevelCheap = 1,
//     kGMSPlacesPriceLevelMedium = 2,
//     kGMSPlacesPriceLevelHigh = 3,
//     kGMSPlacesPriceLevelExpensive = 4
// }

// declare class GMSPolygon extends GMSOverlay {
//     static polygonWithPath(path: GMSPath): GMSPolygon;
//     fillColor: UIColor;
//     geodesic: boolean;
//     path: GMSPath;
//     strokeColor: UIColor;
//     strokeWidth: number;
// }

// declare class GMSPolyline extends GMSOverlay {
//     static polylineWithPath(path: GMSPath): GMSPolyline;
//     geodesic: boolean;
//     path: GMSPath;
//     spans: NSArray;
//     strokeColor: UIColor;
//     strokeWidth: number;
// }

// declare function GMSProject(coordinate: CLLocationCoordinate2D): GMSMapPoint;

// declare class GMSProjection extends NSObject {
//     static alloc(): GMSProjection; // inherited from NSObject
//     static new(): GMSProjection; // inherited from NSObject
//     containsCoordinate(coordinate: CLLocationCoordinate2D): boolean;
//     coordinateForPoint(point: CGPoint): CLLocationCoordinate2D;
//     init(): GMSProjection; // inherited from NSObject
//     pointForCoordinate(coordinate: CLLocationCoordinate2D): CGPoint;
//     pointsForMetersAtCoordinate(meters: number, coordinate: CLLocationCoordinate2D): number;
//     self(): GMSProjection; // inherited from NSObjectProtocol
//     visibleRegion(): GMSVisibleRegion;
// }

// declare class GMSReverseGeocodeResponse extends NSObject implements NSCopying {
//     static alloc(): GMSReverseGeocodeResponse; // inherited from NSObject
//     static new(): GMSReverseGeocodeResponse; // inherited from NSObject
//     copyWithZone(zone: any): any; // inherited from NSCopying
//     firstResult(): GMSAddress;
//     init(): GMSReverseGeocodeResponse; // inherited from NSObject
//     results(): NSArray;
//     self(): GMSReverseGeocodeResponse; // inherited from NSObjectProtocol
// }

// declare class GMSServices extends NSObject {
//     static SDKVersion(): string;
//     static alloc(): GMSServices; // inherited from NSObject
//     static new(): GMSServices; // inherited from NSObject
//     static openSourceLicenseInfo(): string;
//     static provideAPIKey(APIKey: string): boolean;
//     static sharedServices(): NSObjectProtocol;
//     init(): GMSServices; // inherited from NSObject
//     self(): GMSServices; // inherited from NSObjectProtocol
// }

// declare class GMSStrokeStyle extends NSObject {
//     static alloc(): GMSStrokeStyle; // inherited from NSObject
//     static gradientFromColorToColor(fromColor: UIColor, toColor: UIColor): GMSStrokeStyle;
//     static new(): GMSStrokeStyle; // inherited from NSObject
//     static solidColor(color: UIColor): GMSStrokeStyle;
//     init(): GMSStrokeStyle; // inherited from NSObject
//     self(): GMSStrokeStyle; // inherited from NSObjectProtocol
// }

// declare class GMSStyleSpan extends NSObject {
//     static alloc(): GMSStyleSpan; // inherited from NSObject
//     static new(): GMSStyleSpan; // inherited from NSObject
//     static spanWithColor(color: UIColor): GMSStyleSpan;
//     static spanWithColorSegments(color: UIColor, segments: number): GMSStyleSpan;
//     static spanWithStyle(style: GMSStrokeStyle): GMSStyleSpan;
//     static spanWithStyleSegments(style: GMSStrokeStyle, segments: number): GMSStyleSpan;
//     segments: number;
//     style: GMSStrokeStyle;
//     init(): GMSStyleSpan; // inherited from NSObject
//     self(): GMSStyleSpan; // inherited from NSObjectProtocol
// }

// declare function GMSStyleSpans(path: GMSPath, styles: NSArray, lengths: NSArray, lengthKind: GMSLengthKind): NSArray;

// declare function GMSStyleSpansOffset(path: GMSPath, styles: NSArray, lengths: NSArray, lengthKind: GMSLengthKind, lengthOffset: number): NSArray;

// declare class GMSSyncTileLayer extends GMSTileLayer {
//     tileForXYZoom(x: number, y: number, zoom: number): UIImage;
// }

// declare class GMSTileLayer extends NSObject {
//     static alloc(): GMSTileLayer; // inherited from NSObject
//     static new(): GMSTileLayer; // inherited from NSObject
//     fadeIn: boolean;
//     map: GMSMapView;
//     opacity: number;
//     tileSize: number;
//     zIndex: number;
//     clearTileCache(): void;
//     init(): GMSTileLayer; // inherited from NSObject
//     requestTileForXYZoomReceiver(x: number, y: number, zoom: number, receiver: GMSTileReceiver): void;
//     self(): GMSTileLayer; // inherited from NSObjectProtocol
// }

// interface GMSTileReceiver extends NSObjectProtocol {
//     receiveTileWithXYZoomImage(x: number, y: number, zoom: number, image: UIImage): void;
// }
// declare var GMSTileReceiver: any; /* Protocol */

// declare class GMSUISettings extends NSObject {
//     static alloc(): GMSUISettings; // inherited from NSObject
//     static new(): GMSUISettings; // inherited from NSObject
//     allowScrollGesturesDuringRotateOrZoom: boolean;
//     compassButton: boolean;
//     consumesGesturesInView: boolean;
//     indoorPicker: boolean;
//     myLocationButton: boolean;
//     rotateGestures: boolean;
//     scrollGestures: boolean;
//     tiltGestures: boolean;
//     zoomGestures: boolean;
//     init(): GMSUISettings; // inherited from NSObject
//     self(): GMSUISettings; // inherited from NSObjectProtocol
//     setAllGesturesEnabled(enabled: boolean): void;
// }

// declare class GMSURLTileLayer extends GMSTileLayer {
//     static tileLayerWithURLConstructor(constructor: (p1: number, p2: number, p3: number) => NSURL): GMSURLTileLayer;
//     userAgent: string;
// }

// declare function GMSUnproject(point: GMSMapPoint): CLLocationCoordinate2D;

// declare class GMSUserAddedPlace extends NSObject {
//     static alloc(): GMSUserAddedPlace; // inherited from NSObject
//     static new(): GMSUserAddedPlace; // inherited from NSObject
//     address: string;
//     coordinate: CLLocationCoordinate2D;
//     name: string;
//     phoneNumber: string;
//     types: NSArray;
//     website: string;
//     init(): GMSUserAddedPlace; // inherited from NSObject
//     self(): GMSUserAddedPlace; // inherited from NSObjectProtocol
// }

// interface GMSVisibleRegion {
//     nearLeft: CLLocationCoordinate2D;
//     nearRight: CLLocationCoordinate2D;
//     farLeft: CLLocationCoordinate2D;
//     farRight: CLLocationCoordinate2D;
// }
// declare var GMSVisibleRegion: any;

// declare var kGMSAccessibilityCompass: string;

// declare var kGMSAccessibilityMyLocation: string;

// declare var kGMSAutocompleteMatchAttribute: string;

// declare var kGMSEarthRadius: number;

// declare var kGMSEquatorProjectedMeter: number;

// declare const kGMSGeocoderErrorInternal: number;

// declare const kGMSGeocoderErrorInvalidCoordinate: number;

// declare var kGMSGroundOverlayDefaultAnchor: CGPoint;

// declare var kGMSLayerCameraBearingKey: string;

// declare var kGMSLayerCameraLatitudeKey: string;

// declare var kGMSLayerCameraLongitudeKey: string;

// declare var kGMSLayerCameraViewingAngleKey: string;

// declare var kGMSLayerCameraZoomLevelKey: string;

// declare var kGMSLayerPanoramaFOVKey: string;

// declare var kGMSLayerPanoramaHeadingKey: string;

// declare var kGMSLayerPanoramaPitchKey: string;

// declare var kGMSLayerPanoramaZoomKey: string;

// declare const kGMSLengthGeodesic: number;

// declare const kGMSLengthProjected: number;

// declare const kGMSLengthRhumb: number;

// declare const kGMSMarkerAnimationNone: number;

// declare const kGMSMarkerAnimationPop: number;

// declare var kGMSMarkerDefaultGroundAnchor: CGPoint;

// declare var kGMSMarkerDefaultInfoWindowAnchor: CGPoint;

// declare var kGMSMarkerLayerLatitude: string;

// declare var kGMSMarkerLayerLongitude: string;

// declare var kGMSMarkerLayerOpacity: string;

// declare var kGMSMarkerLayerRotation: string;

// declare var kGMSMaxZoomLevel: number;

// declare var kGMSMinZoomLevel: number;

// declare var kGMSPlacePickerErrorDomain: string;

// declare const kGMSPlacePickerInternalError: number;

// declare const kGMSPlacePickerInvalidConfig: number;

// declare const kGMSPlacePickerOverlappingCalls: number;

// declare const kGMSPlacePickerUnknownError: number;

// declare var kGMSPlaceTypeAccounting: string;

// declare var kGMSPlaceTypeAdministrativeAreaLevel1: string;

// declare var kGMSPlaceTypeAdministrativeAreaLevel2: string;

// declare var kGMSPlaceTypeAdministrativeAreaLevel3: string;

// declare var kGMSPlaceTypeAirport: string;

// declare var kGMSPlaceTypeAmusementPark: string;

// declare var kGMSPlaceTypeAquarium: string;

// declare var kGMSPlaceTypeArtGallery: string;

// declare var kGMSPlaceTypeAtm: string;

// declare var kGMSPlaceTypeBakery: string;

// declare var kGMSPlaceTypeBank: string;

// declare var kGMSPlaceTypeBar: string;

// declare var kGMSPlaceTypeBeautySalon: string;

// declare var kGMSPlaceTypeBicycleStore: string;

// declare var kGMSPlaceTypeBookStore: string;

// declare var kGMSPlaceTypeBowlingAlley: string;

// declare var kGMSPlaceTypeBusStation: string;

// declare var kGMSPlaceTypeCafe: string;

// declare var kGMSPlaceTypeCampground: string;

// declare var kGMSPlaceTypeCarDealer: string;

// declare var kGMSPlaceTypeCarRental: string;

// declare var kGMSPlaceTypeCarRepair: string;

// declare var kGMSPlaceTypeCarWash: string;

// declare var kGMSPlaceTypeCasino: string;

// declare var kGMSPlaceTypeCemetery: string;

// declare var kGMSPlaceTypeChurch: string;

// declare var kGMSPlaceTypeCityHall: string;

// declare var kGMSPlaceTypeClothingStore: string;

// declare var kGMSPlaceTypeColloquialArea: string;

// declare var kGMSPlaceTypeConvenienceStore: string;

// declare var kGMSPlaceTypeCountry: string;

// declare var kGMSPlaceTypeCourthouse: string;

// declare var kGMSPlaceTypeDentist: string;

// declare var kGMSPlaceTypeDepartmentStore: string;

// declare var kGMSPlaceTypeDoctor: string;

// declare var kGMSPlaceTypeElectrician: string;

// declare var kGMSPlaceTypeElectronicsStore: string;

// declare var kGMSPlaceTypeEmbassy: string;

// declare var kGMSPlaceTypeEstablishment: string;

// declare var kGMSPlaceTypeFinance: string;

// declare var kGMSPlaceTypeFireStation: string;

// declare var kGMSPlaceTypeFloor: string;

// declare var kGMSPlaceTypeFlorist: string;

// declare var kGMSPlaceTypeFood: string;

// declare var kGMSPlaceTypeFuneralHome: string;

// declare var kGMSPlaceTypeFurnitureStore: string;

// declare var kGMSPlaceTypeGasStation: string;

// declare var kGMSPlaceTypeGeneralContractor: string;

// declare var kGMSPlaceTypeGeocode: string;

// declare var kGMSPlaceTypeGroceryOrSupermarket: string;

// declare var kGMSPlaceTypeGym: string;

// declare var kGMSPlaceTypeHairCare: string;

// declare var kGMSPlaceTypeHardwareStore: string;

// declare var kGMSPlaceTypeHealth: string;

// declare var kGMSPlaceTypeHinduTemple: string;

// declare var kGMSPlaceTypeHomeGoodsStore: string;

// declare var kGMSPlaceTypeHospital: string;

// declare var kGMSPlaceTypeInsuranceAgency: string;

// declare var kGMSPlaceTypeIntersection: string;

// declare var kGMSPlaceTypeJewelryStore: string;

// declare var kGMSPlaceTypeLaundry: string;

// declare var kGMSPlaceTypeLawyer: string;

// declare var kGMSPlaceTypeLibrary: string;

// declare var kGMSPlaceTypeLiquorStore: string;

// declare var kGMSPlaceTypeLocalGovernmentOffice: string;

// declare var kGMSPlaceTypeLocality: string;

// declare var kGMSPlaceTypeLocksmith: string;

// declare var kGMSPlaceTypeLodging: string;

// declare var kGMSPlaceTypeMealDelivery: string;

// declare var kGMSPlaceTypeMealTakeaway: string;

// declare var kGMSPlaceTypeMosque: string;

// declare var kGMSPlaceTypeMovieRental: string;

// declare var kGMSPlaceTypeMovieTheater: string;

// declare var kGMSPlaceTypeMovingCompany: string;

// declare var kGMSPlaceTypeMuseum: string;

// declare var kGMSPlaceTypeNaturalFeature: string;

// declare var kGMSPlaceTypeNeighborhood: string;

// declare var kGMSPlaceTypeNightClub: string;

// declare var kGMSPlaceTypePainter: string;

// declare var kGMSPlaceTypePark: string;

// declare var kGMSPlaceTypeParking: string;

// declare var kGMSPlaceTypePetStore: string;

// declare var kGMSPlaceTypePharmacy: string;

// declare var kGMSPlaceTypePhysiotherapist: string;

// declare var kGMSPlaceTypePlaceOfWorship: string;

// declare var kGMSPlaceTypePlumber: string;

// declare var kGMSPlaceTypePointOfInterest: string;

// declare var kGMSPlaceTypePolice: string;

// declare var kGMSPlaceTypePolitical: string;

// declare var kGMSPlaceTypePostBox: string;

// declare var kGMSPlaceTypePostOffice: string;

// declare var kGMSPlaceTypePostalCode: string;

// declare var kGMSPlaceTypePostalCodePrefix: string;

// declare var kGMSPlaceTypePostalTown: string;

// declare var kGMSPlaceTypePremise: string;

// declare var kGMSPlaceTypeRealEstateAgency: string;

// declare var kGMSPlaceTypeRestaurant: string;

// declare var kGMSPlaceTypeRoofingContractor: string;

// declare var kGMSPlaceTypeRoom: string;

// declare var kGMSPlaceTypeRoute: string;

// declare var kGMSPlaceTypeRvPark: string;

// declare var kGMSPlaceTypeSchool: string;

// declare var kGMSPlaceTypeShoeStore: string;

// declare var kGMSPlaceTypeShoppingMall: string;

// declare var kGMSPlaceTypeSpa: string;

// declare var kGMSPlaceTypeStadium: string;

// declare var kGMSPlaceTypeStorage: string;

// declare var kGMSPlaceTypeStore: string;

// declare var kGMSPlaceTypeStreetAddress: string;

// declare var kGMSPlaceTypeSublocality: string;

// declare var kGMSPlaceTypeSublocalityLevel1: string;

// declare var kGMSPlaceTypeSublocalityLevel2: string;

// declare var kGMSPlaceTypeSublocalityLevel3: string;

// declare var kGMSPlaceTypeSublocalityLevel4: string;

// declare var kGMSPlaceTypeSublocalityLevel5: string;

// declare var kGMSPlaceTypeSubpremise: string;

// declare var kGMSPlaceTypeSubwayStation: string;

// declare var kGMSPlaceTypeSynagogue: string;

// declare var kGMSPlaceTypeTaxiStand: string;

// declare var kGMSPlaceTypeTrainStation: string;

// declare var kGMSPlaceTypeTransitStation: string;

// declare var kGMSPlaceTypeTravelAgency: string;

// declare var kGMSPlaceTypeUniversity: string;

// declare var kGMSPlaceTypeVeterinaryCare: string;

// declare var kGMSPlaceTypeZoo: string;

// declare const kGMSPlacesAccessNotConfigured: number;

// declare const kGMSPlacesAutocompleteTypeFilterAddress: number;

// declare const kGMSPlacesAutocompleteTypeFilterCity: number;

// declare const kGMSPlacesAutocompleteTypeFilterEstablishment: number;

// declare const kGMSPlacesAutocompleteTypeFilterGeocode: number;

// declare const kGMSPlacesAutocompleteTypeFilterNoFilter: number;

// declare const kGMSPlacesAutocompleteTypeFilterRegion: number;

// declare const kGMSPlacesDeviceRateLimitExceeded: number;

// declare var kGMSPlacesErrorDomain: string;

// declare const kGMSPlacesIncorrectBundleIdentifier: number;

// declare const kGMSPlacesInternalError: number;

// declare const kGMSPlacesKeyExpired: number;

// declare const kGMSPlacesKeyInvalid: number;

// declare const kGMSPlacesNetworkError: number;

// declare const kGMSPlacesOpenNowStatusNo: number;

// declare const kGMSPlacesOpenNowStatusUnknown: number;

// declare const kGMSPlacesOpenNowStatusYes: number;

// declare const kGMSPlacesPriceLevelCheap: number;

// declare const kGMSPlacesPriceLevelExpensive: number;

// declare const kGMSPlacesPriceLevelFree: number;

// declare const kGMSPlacesPriceLevelHigh: number;

// declare const kGMSPlacesPriceLevelMedium: number;

// declare const kGMSPlacesPriceLevelUnknown: number;

// declare const kGMSPlacesRateLimitExceeded: number;

// declare const kGMSPlacesServerError: number;

// declare const kGMSPlacesUsageLimitExceeded: number;

// declare var kGMSTileLayerNoTile: UIImage;

// declare const kGMSTypeHybrid: number;

// declare const kGMSTypeNone: number;

// declare const kGMSTypeNormal: number;

// declare const kGMSTypeSatellite: number;

// declare const kGMSTypeTerrain: number;