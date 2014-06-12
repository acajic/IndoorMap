function squareFeatureAroundLatLng(latLng, size) {
    var latLngArray = [];
    var latLngTopLeft = $.extend({}, latLng);
    latLngTopLeft.lat += size / 2;
    latLngTopLeft.lng -= size / 2;
    latLngArray.push(latLngTopLeft);

    var latLngBottomLeft = $.extend({}, latLng);
    latLngBottomLeft.lat -= size / 2;
    latLngBottomLeft.lng -= size / 2;
    latLngArray.push(latLngBottomLeft);
    var latLngBottomRight = $.extend({}, latLng);
    latLngBottomRight.lat -= size / 2;
    latLngBottomRight.lng += size / 2;
    latLngArray.push(latLngBottomRight);
    var latLngTopRight = $.extend({}, latLng);
    latLngTopRight.lat += size / 2;
    latLngTopRight.lng += size / 2;
    latLngArray.push(latLngTopRight);

    var newFeature = {
        geometry: {
            type: "Polygon",
            coordinates: [
                latLngArray
            ]
        },
        levelIndex: 0
    };

    return newFeature;
}