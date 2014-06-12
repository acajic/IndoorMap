
function getRoomFeaturesAtLatLng(latLng, callback) {
    var roomFeatures = [];
    getRoomFeaturesForLatLng_BoxCriterion(latLng, function (encapsulatedFeatures) {
        for (var i = 0; i < encapsulatedFeatures.length; i++) {
            var encapsulatedFeature = encapsulatedFeatures[i];
            var feature = encapsulatedFeature.feature;
            if (isPointInsidePolygon(latlngToPoint(latLng), featureToPolygon(feature))) {
                roomFeatures.push(encapsulatedFeature);
            }
        }
        callback(roomFeatures);
    });
}

function getRoomFeaturesAtLatLng_Sync(latLng, roomFeaturesInBoxes) {
    var encapsulatedRoomFeatures = getRoomFeaturesForLatLng_BoxCriterion_Sync(latLng, roomFeaturesInBoxes);

    var roomFeatures = [];
    for (var i = 0; i < encapsulatedRoomFeatures.length; i++) {
        var encapsulatedFeature = encapsulatedRoomFeatures[i];
        var feature = encapsulatedFeature.feature;
        if (isPointInsidePolygon(latlngToPoint(latLng), featureToPolygon(feature))) {
            roomFeatures.push(encapsulatedFeature);
        }
    }

    return roomFeatures;
}


var roomFeaturesByFeatureIds = null;
var roomFeaturesInBoxes = null;

function initAllRoomFeatures(callback) {
    if (roomFeaturesByFeatureIds && roomFeaturesInBoxes) {
        callback(roomFeaturesByFeatureIds, roomFeaturesInBoxes);
    } else {
        
        map.getFeaturesAsync({ _referenceLocation: /.*/ }, function (errors, features) {
            roomFeaturesByFeatureIds = {};
            roomFeaturesInBoxes = {};

            for (var i = 0; i < features.length; i++) {
                var feature = features[i];
                roomFeaturesByFeatureIds[feature.properties.featureId] = feature;
                if (!roomFeaturesInBoxes[feature.properties.level])
                    roomFeaturesInBoxes[feature.properties.level] = [];

                // longitude is x axis
                var minLng = Number.MAX_VALUE;
                // latitude is y axis
                var minLat = Number.MAX_VALUE;
                var maxLng = -Number.MAX_VALUE;
                var maxLat = -Number.MAX_VALUE;
                for (var j = 0; j < feature.geometry.coordinates[0].length; j++) {
                    var vertexLatLng = feature.geometry.coordinates[0][j];
                    if (vertexLatLng.lng < minLng) minLng = vertexLatLng.lng;
                    if (vertexLatLng.lat < minLat) minLat = vertexLatLng.lat;
                    if (vertexLatLng.lng > maxLng) maxLng = vertexLatLng.lng;
                    if (vertexLatLng.lat > maxLat) maxLat = vertexLatLng.lat;
                }


                roomFeaturesInBoxes[feature.properties.level].push({
                    feature: feature,
                    containerBox: {
                        minLat: minLat,
                        maxLat: maxLat,
                        minLng: minLng,
                        maxLng: maxLng
                    }
                });
            }

            if (callback)
                callback(roomFeaturesByFeatureIds, roomFeaturesInBoxes);
        });
    }
}

function getRoomFeaturesForLatLng_BoxCriterion(latLng, callback) {
    initAllRoomFeatures(function (roomFeaturesByFeatureIds, roomFeaturesInBoxes) {
        var encapsulatedRoomFeatures = getRoomFeaturesForLatLng_BoxCriterion_Sync(latLng, roomFeaturesInBoxes);
        callback(encapsulatedRoomFeatures);
    });
}


function getRoomFeaturesForLatLng_BoxCriterion_Sync(latLng, roomFeaturesInBoxes) {
    var encapsulatedRoomFeatures = [];
    if (!roomFeaturesInBoxes[latLng.level])
        return [];

    for (var i = 0; i < roomFeaturesInBoxes[latLng.level].length; i++) {
        var encapsulatedFeature = roomFeaturesInBoxes[latLng.level][i];
        var containerBox = encapsulatedFeature.containerBox;

        if (latLng.lat >= containerBox.minLat && latLng.lat <= containerBox.maxLat && latLng.lng >= containerBox.minLng && latLng.lng <= containerBox.maxLng) {
            encapsulatedRoomFeatures.push(encapsulatedFeature);
        }
    }
    return encapsulatedRoomFeatures;
}