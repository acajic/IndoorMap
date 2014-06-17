
function featureToPolygon(feature) {
    var polygon = [];
    for (var i = 0; i < feature.geometry.coordinates[0].length; i++) {
        var latLng = feature.geometry.coordinates[0][i];
        polygon.push(latlngToPoint(latLng));
    }
    return polygon;
}

function polygonToFeature(polygon) {
    return {
        geometry: {
            type: "Polygon",
            coordinates: $.map(polygon, function (point) {
                return pointToLatLng(point, "1");
            })
        },
        levelIndex: 0
    };
}

function latlngToPoint(latlng) {
    return {
        x: latlng.lng,
        y: latlng.lat
    };
}

function pointToLatLng(point, level) {
    return {
        lat: point.y,
        lng: point.x,
        level: level
    };
}