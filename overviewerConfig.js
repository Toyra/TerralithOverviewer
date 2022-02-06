var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Toyboys - overworld"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1644108474",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Toyboys",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "toyboys",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Toyboys - overworld",
            "last_rendertime": 1644096645,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -50,
                135,
                12
            ],
            "minZoom": 0,
            "spawn": [
                -50,
                135,
                12
            ],
            "north_direction": 0
        },
        {
            "name": "Toyboys Caves",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "toyboyscaves",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Toyboys - overworld",
            "last_rendertime": 1644096645,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -50,
                135,
                12
            ],
            "minZoom": 0,
            "spawn": [
                -50,
                135,
                12
            ],
            "north_direction": 0
        }
    ]
};
