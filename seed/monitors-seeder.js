var Monitor = require('../models/monitors');
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds111370.mlab.com:11370/ktreeteam');
var monitors = [
    new Monitor({
        "imagepath": "https://i.imgur.com/7NbFJCK.jpg",
        "model": "Màn hình MSI OPTIX G24C",
        "size": 23.6,
        "resolution": "1920 x 1080",
        "refrate": "144Hz",
        "resrime": "1ms (MPRT)",
        "connection": "1x DP(1.2) 1x HDMI(1.4) 1x DVI",
        "weight": "3.96Kg/5.46Kg",
        "price": 6990000,
        "tech": "",
    }),
    new Monitor(
        {
            "imagepath": "https://i.imgur.com/FZkxC8l.jpg",
            "model": "LCD DELL PRO P2017H",
            "size": "19.5 es",
            "resolution": "1600 x 900",
            "refrate": "60Hz",
            "resrime": "6ms",
            "connection": "VGA, HDMI, DP, 2xUSB 3.0, 2xUSB 2.0",
            "weight": "",
            "price": 3040000,
            "tech": "",
        }
    ),
    new Monitor({
        "imagepath": "https://i.imgur.com/4WZy8wU.jpg",
        "model": "Màn hình MSI OPTIX G27C2",
        "size": 27,
        "resolution": "1920 x 1080",
        "refrate": "144Hz",
        "resrime": "1ms (MPRT)",
        "connection": "1x DP(1.2) 1x HDMI(1.4) 1x DVI",
        "weight": "5.8Kg / 7.8Kg",
        "price": 8990000,
        "tech": "",
    }),
    new Monitor({
        "imagepath": "https://i.imgur.com/4vEvIa0.jpg",
        "model": "Màn hình Dell Gaming S2716DG",
        "size": "27 inches",
        "resolution": "2560 x 1440",
        "refrate": "144Hz",
        "resrime": "1-3 ms",
        "connection": "DisplayPort, HDMI, 4xUSB3.0, Audio & Headphone-out",
        "weight": "",
        "price": 15490000,
        "tech": "G-Sync",
    }),
    new Monitor({
        "imagepath": "https://i.imgur.com/rzDEo4b.jpg",
        "model": "LCD DELL P2414H",
        "size": "23.8 es",
        "resolution": "1920 x 1080",
        "refrate": "60Hz",
        "resrime": "8 ms (gray to gray)",
        "connection": "VGA, DVI-D, Display Port, 4xUSB",
        "weight": "3.51kg",
        "price": 4300000,
        "tech": "",
    }),
    new Monitor({
        "imagepath": "https://i.imgur.com/liDLFGF.jpg",
        "model": "LCD DELL P2415Q",
        "size": "23.8 es",
        "resolution": "3840 x 2160",
        "refrate": "DisplayPort: 60 Hz, HDMI: 30 Hz",
        "resrime": "8 ms (typical)  6 ms (gray-to-gray)",
        "connection": "HDMI (MHL), DisplayPort, Mini DisplayPort",
        "weight": "11.9 lbs",
        "price": 10100000,
        "tech": "",
    }),
    new Monitor({
        "imagepath": "https://i.imgur.com/kLdRAqA.jpg",
        "model": "Màn hình gaming ROG Strix XG258Q",
        "size": "Wide 24.5\"(62.23cm) 16:9",
        "resolution": "1920x1080",
        "refrate": "240 Hz",
        "resrime": "1ms (Gray to Gray)",
        "connection": "HDMI(v2.0), DisplayPort, HDMI(v1.4)",
        "weight": "5.5Kg / 8.2Kg",
        "price": 10990000,
        "tech": "",
    }),
    new Monitor({
        "imagepath": "https://i.imgur.com/RyFPBO3.jpg",
        "model": "LCD DELL E2216HV",
        "size": "21.5 es",
        "resolution": "1920 x 1080",
        "refrate": "VGA",
        "resrime": "5 ms",
        "connection": "VGA",
        "weight": "",
        "price": 2900000,
        "tech": "",
    }),
    new Monitor({
        "imagepath": "https://i.imgur.com/0hEFh7Q.jpg",
        "model": "Màn hình Gaming Alienware AW2518H",
        "size": "24.5 inches",
        "resolution": "1920 x 1080",
        "refrate": "240 Hz",
        "resrime": "1ms",
        "connection": "DP1.2, HDMI, 4xUSB3.0, Audio Out, Headphone",
        "weight": "",
        "price": 15490000,
        "tech": "G-Sync",
    }),
];

var done = 0;
for (var i = 0; i < monitors.length; i++) {
    monitors[i].save(function(err, result) {
        done++;
        if (err) {
            console.log(err.message);
        }
        if (done === monitors.length) {
            mongoose.disconnect();
        }
    });
}
