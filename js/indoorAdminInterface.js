var addBeaconButtonActionCallback = null;

function addBeaconInputForm(id, latitude, longitude, level, callback) {
    addBeaconButtonActionCallback = callback;

    var addBeaconInputFormCopied = $("#add-beacon-form-popup-template").clone().attr("id", "add-beacon-form-popup");

    $(".id", addBeaconInputFormCopied).attr("value", id);
    $(".level", addBeaconInputFormCopied).attr("value", level);
    $(".latitude", addBeaconInputFormCopied).attr("value", latitude);
    $(".longitude", addBeaconInputFormCopied).attr("value", longitude);
    $("#submit-button", addBeaconInputFormCopied).attr("onclick", "addBeaconButtonAction()");


    var html = addBeaconInputFormCopied[0].outerHTML;
    return html;

}

function addBeaconButtonAction() {
    var id = $("#add-beacon-form-popup > .id").val();
    var level = $("#add-beacon-form-popup > .level").val();
    var wgsLat = $("#add-beacon-form-popup > .latitude").val();
    var wgsLng = $("#add-beacon-form-popup > .longitude").val();
    var uuid = $("#add-beacon-form-popup > .uuid").val();
    var major = $("#add-beacon-form-popup > .major").val();
    var minor = $("#add-beacon-form-popup > .minor").val();
    var name = $("#add-beacon-form-popup > .name").val();

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

    var editBeaconInputFormCopied = $("#edit-beacon-form-popup-template").clone().attr("id", "edit-beacon-form-popup");

    $(".id", editBeaconInputFormCopied).attr("value", beacon.id);
    $(".level", editBeaconInputFormCopied).attr("value", beacon.level);
    $(".latitude", editBeaconInputFormCopied).attr("value", beacon.wgsLat);
    $(".longitude", editBeaconInputFormCopied).attr("value", beacon.wgsLng);
    $(".uuid", editBeaconInputFormCopied).attr("value", beacon.uuid);
    $(".major", editBeaconInputFormCopied).attr("value", beacon.major);
    $(".minor", editBeaconInputFormCopied).attr("value", beacon.minor);
    $(".name", editBeaconInputFormCopied).attr("value", beacon.name);
    
    $("#submit-button", editBeaconInputFormCopied).attr("onclick", "editBeaconButtonAction()");
    $("#remove-button", editBeaconInputFormCopied).attr("onclick", "removeBeaconButtonAction()");
    
    var html = editBeaconInputFormCopied[0].outerHTML;
    return html;

}



function editBeaconButtonAction() {
    var id = $("#edit-beacon-form-popup > .id").val();
    var level = $("#edit-beacon-form-popup > .level").val();
    var wgsLat = $("#edit-beacon-form-popup > .latitude").val();
    var wgsLng = $("#edit-beacon-form-popup > .longitude").val();
    var uuid = $("#edit-beacon-form-popup > .uuid").val();
    var major = $("#edit-beacon-form-popup > .major").val();
    var minor = $("#edit-beacon-form-popup > .minor").val();
    var name = $("#edit-beacon-form-popup > .name").val();

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
    
    var id = $("#edit-beacon-form-popup > .id").val();
    var level = $("#edit-beacon-form-popup > .level").val();
    var wgsLat = $("#edit-beacon-form-popup > .latitude").val();
    var wgsLng = $("#edit-beacon-form-popup > .longitude").val();
    var uuid = $("#edit-beacon-form-popup > .uuid").val();
    var major = $("#edit-beacon-form-popup > .major").val();
    var minor = $("#edit-beacon-form-popup > .minor").val();
    var name = $("#edit-beacon-form-popup > .name").val();
    
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