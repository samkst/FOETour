var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.19106449726778507,
        "pitch": 0.01574274426386779,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.20934302065161603,
          "pitch": -0.20684231893469018,
          "rotation": 7.0685834705770345,
          "target": "1-engineering-audi"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2134668341369661,
          "pitch": 0.27759078045166774,
          "title": "Welcome!",
          "text": "Faculty of Engineering"
        }
      ]
    },
    {
      "id": "1-engineering-audi",
      "name": "Engineering Audi",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.19819688241659605,
        "pitch": 0.02901267192970458,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.059789292781722736,
          "pitch": 0.03757510319672264,
          "rotation": 0,
          "target": "2-engineering-atrium"
        },
        {
          "yaw": 3.132074470511162,
          "pitch": 0.12467436799015985,
          "rotation": 5.497787143782138,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3618120911966116,
          "pitch": 0.05907371523691296,
          "title": "No idea what this is",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-engineering-atrium",
      "name": "Engineering Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.01443588200639212,
        "pitch": 0.003431599969708543,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0286112045929876,
          "pitch": 0.18976559557652095,
          "rotation": 0,
          "target": "1-engineering-audi"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Workshop Practice",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
