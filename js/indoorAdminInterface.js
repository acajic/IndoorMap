var addBeaconButtonActionCallback = null;

function addBeaconInputForm(id, latitude, longitude, level, callback) {
    addBeaconButtonActionCallback = callback;

    var addBeaconInputFormCopied = $j("#add-beacon-form-popup-template").clone().attr("id", "add-beacon-form-popup");

    $j(".id", addBeaconInputFormCopied).attr("value", id);
    $j(".level", addBeaconInputFormCopied).attr("value", level);
    $j(".latitude", addBeaconInputFormCopied).attr("value", latitude);
    $j(".longitude", addBeaconInputFormCopied).attr("value", longitude);
    $j("#submit-button", addBeaconInputFormCopied).attr("onclick", "addBeaconButtonAction()");


    var html = addBeaconInputFormCopied[0].outerHTML;
    return html;

}

function addBeaconButtonAction() {
    var id = $j("#add-beacon-form-popup > .id").val();
    var level = $j("#add-beacon-form-popup > .level").val();
    var wgsLat = $j("#add-beacon-form-popup > .latitude").val();
    var wgsLng = $j("#add-beacon-form-popup > .longitude").val();
    var uuid = $j("#add-beacon-form-popup > .uuid").val();
    var major = $j("#add-beacon-form-popup > .major").val();
    var minor = $j("#add-beacon-form-popup > .minor").val();
    var name = $j("#add-beacon-form-popup > .name").val();

    var beacon = {
        id: id,
        level: level,
        wgsLat: wgsLat,
        wgsLng: wgsLng,
        uuid: uuid,
        major: major,
        minor: minor,
        name: name
    };

    addBeaconButtonActionCallback(beacon);
}




var updateBeaconButtonActionCallback = null;
var removeBeaconButtonActionCallback = null;


function editBeaconInputForm(beacon, editCallback, removeCallback) {
    selectedBeacon = beacon;
    updateBeaconButtonActionCallback = editCallback;
    removeBeaconButtonActionCallback = removeCallback;

    var editBeaconInputFormCopied = $j("#edit-beacon-form-popup-template").clone().attr("id", "edit-beacon-form-popup");

    $j(".id", editBeaconInputFormCopied).attr("value", beacon.id);
    $j(".level", editBeaconInputFormCopied).attr("value", beacon.level);
    $j(".latitude", editBeaconInputFormCopied).attr("value", beacon.wgsLat);
    $j(".longitude", editBeaconInputFormCopied).attr("value", beacon.wgsLng);
    $j(".uuid", editBeaconInputFormCopied).attr("value", beacon.uuid);
    $j(".major", editBeaconInputFormCopied).attr("value", beacon.major);
    $j(".minor", editBeaconInputFormCopied).attr("value", beacon.minor);
    $j(".name", editBeaconInputFormCopied).attr("value", beacon.name);
    
    $j("#submit-button", editBeaconInputFormCopied).attr("onclick", "editBeaconButtonAction()");
    $j("#remove-button", editBeaconInputFormCopied).attr("onclick", "removeBeaconButtonAction()");
    
    var html = editBeaconInputFormCopied[0].outerHTML;
    return html;

}



function editBeaconButtonAction() {
    var id = $j("#edit-beacon-form-popup > .id").val();
    var level = $j("#edit-beacon-form-popup > .level").val();
    var wgsLat = $j("#edit-beacon-form-popup > .latitude").val();
    var wgsLng = $j("#edit-beacon-form-popup > .longitude").val();
    var uuid = $j("#edit-beacon-form-popup > .uuid").val();
    var major = $j("#edit-beacon-form-popup > .major").val();
    var minor = $j("#edit-beacon-form-popup > .minor").val();
    var name = $j("#edit-beacon-form-popup > .name").val();

    var selectedBeacon = {};
    selectedBeacon.id = id;
    selectedBeacon.level = level;
    selectedBeacon.wgsLat = wgsLat;
    selectedBeacon.wgsLng = wgsLng;
    selectedBeacon.uuid = uuid;
    selectedBeacon.major = major;
    selectedBeacon.minor = minor;
    selectedBeacon.name = name;
    
    updateBeaconButtonActionCallback(selectedBeacon);
}

function removeBeaconButtonAction() {
    
    var id = $j("#edit-beacon-form-popup > .id").val();
    var level = $j("#edit-beacon-form-popup > .level").val();
    var wgsLat = $j("#edit-beacon-form-popup > .latitude").val();
    var wgsLng = $j("#edit-beacon-form-popup > .longitude").val();
    var uuid = $j("#edit-beacon-form-popup > .uuid").val();
    var major = $j("#edit-beacon-form-popup > .major").val();
    var minor = $j("#edit-beacon-form-popup > .minor").val();
    var name = $j("#edit-beacon-form-popup > .name").val();
    
    var selectedBeacon = {};
    selectedBeacon.id = id;
    selectedBeacon.level = level;
    selectedBeacon.wgsLat = wgsLat;
    selectedBeacon.wgsLng = wgsLng;
    selectedBeacon.uuid = uuid;
    selectedBeacon.major = major;
    selectedBeacon.minor = minor;
    selectedBeacon.name = name;

    removeBeaconButtonActionCallback(selectedBeacon);
}