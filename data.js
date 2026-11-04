
var sceneIds = [
  "0-img_20261020_125357_00_merged",
  "1-img_20261020_130240_00_merged",
  "2-img_20261021_091823_00_merged",
  "3-img_20261021_091944_00_merged",
  "4-img_20261021_092110_00_merged",
  "5-img_20261021_092249_00_merged",
  "6-img_20261021_094220_00_merged",
  "7-img_20261021_094404_00_merged",
  "8-img_20261021_094709_00_merged",
  "9-img_20261021_094832_00_merged",
  "10-img_20261021_095211_00_merged",
  "11-img_20261021_095534_00_merged",
  "12-img_20261021_131150_00_merged",
  "13-img_20261021_133216_00_merged",
  "14-img_20261021_134737_00_merged",
  "15-img_20261023_110919_00_merged",
  "16-img_20261023_111412_00_merged",
  "17-img_20261023_111850_00_merged",
  "18-img_20261023_112116_00_merged",
  "19-img_20261023_112306_00_merged",
  "20-img_20261023_112343_00_merged",
  "21-img_20261023_112436_00_merged",
  "22-img_20261023_112912_00_merged",
  "23-img_20261023_113016_00_merged",
  "24-img_20261023_113123_00_merged",
  "25-img_20261023_113438_00_merged"
];

var sceneNames = [
  "Music Room",
  "Music Rehearsal Hall",
  "Library Service Desk",
  "Children's Library",
  "Campus View 01",
  "Campus View 02",
  "School Dining Hall",
  "Dining Hall - Alternate View",
  "Campus View 03",
  "Campus View 04",
  "Campus View 05",
  "Campus View 06",
  "Campus View 07",
  "Campus View 08",
  "Campus View 09",
  "Campus View 10",
  "Campus View 11",
  "Campus View 12",
  "Campus View 13",
  "Campus View 14",
  "Campus View 15",
  "Campus View 16",
  "Campus View 17",
  "Campus View 18",
  "Campus View 19",
  "Campus View 20"
];

// Original panorama navigation connections.
// The IDs and hotspot coordinates are preserved.
var sceneLinks = [
  [
    {
      yaw: -2.568224945410119,
      pitch: 0.3408580501900893,
      rotation: 7.0685834705770345,
      target: sceneIds[1]
    }
  ],
  [
    {
      yaw: 1.259141859919712,
      pitch: 0.14210104443279192,
      rotation: 0.7853981633974483,
      target: sceneIds[2]
    }
  ],
  [
    {
      yaw: 0.10790338499164065,
      pitch: 0.4061651764036327,
      rotation: 0,
      target: sceneIds[3]
    }
  ],
  [
    {
      yaw: -0.3450972284306175,
      pitch: 0.15699462678917797,
      rotation: 0,
      target: sceneIds[5]
    }
  ],
  [
    {
      yaw: 0.2901048439534417,
      pitch: 0.10289378350573664,
      rotation: 1.5707963267948966,
      target: sceneIds[5]
    }
  ],
  [
    {
      yaw: 1.253167704151533,
      pitch: 0.2098656320825576,
      rotation: 11.780972450961727,
      target: sceneIds[4]
    }
  ],
  [
    {
      yaw: 0.3942666059297597,
      pitch: 0.04186732112345126,
      rotation: 5.497787143782138,
      target: sceneIds[7]
    }
  ],
  [
    {
      yaw: 2.638903771486179,
      pitch: 0.25637623807480026,
      rotation: 7.0685834705770345,
      target: sceneIds[6]
    }
  ],
  [
    {
      yaw: 0.516545299321109,
      pitch: 0.14006196815682692,
      rotation: 5.497787143782138,
      target: sceneIds[9]
    }
  ],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];

var sceneInfo = [
  [],
  [],
  [],
  [],
  [],
  [],
  [
    {
      yaw: 0.44018490203998084,
      pitch: -0.09176659520699637,
      title: "School Dining Hall",
      text: "Welcome to the CIS dining area. Explore the space where students gather and enjoy their meals."
    }
  ]
];

var APP_DATA = {
  scenes: sceneIds.map(function(id, index) {
    return {
      id: id,
      name: sceneNames[index],

      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],

      faceSize: 1488,

      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },

      linkHotspots: sceneLinks[index] || [],
      infoHotspots: sceneInfo[index] || []
    };
  }),

  name: "CIS 3D World | Campus Explorer",

  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: true,
    fullscreenButton: true,
    viewControlButtons: false
  }
};
