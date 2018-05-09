var Laptop = require('../models/laptops');
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds111370.mlab.com:11370/ktreeteam');
var laptops = [
    new Laptop({
        "imagePath": "https://i.imgur.com/Y8s1pwM.png",
        "model": "Asus ROG Strix GL553VE-FY329T",
        "cpu": "Intel® Core i7-7700HQ (2.8GHz upto 3.8GHz, 4Cores, 8Threads, 6MB cache, FSB 8GT/s)",
        "ram": "8GB DDR4 2400MHz (1x8GB) + 1 slot Ram.",
        "storage": "1TB HDD 7200rpm + 1 slot SSD M2 PCIe3x4",
        "cdndcd": "",
        "vga": "NVIDIA GeForce® GTX 1050Ti 4GB GDDR5 + Intel® HD Graphics 630",
        "monitor": "15.6 FHD IPS (1920x1080)",
        "connection": "1000Mbps | 802.11ac | Bluetooth 4.1",
        "keyboard": "",
        "tech": "Reader SD | Camera HD | HDMI | USB 3.0 | USB C+ | Thunderbolt | Backlit",
        "weight": "2.4 Kg",
        "battery": "gần 3.5giờ",
        "os": "Windows 10 bản quyền",
        "price": 24990000,
    }),
    new Laptop({
        "imagePath": "https://i.imgur.com/KMbzHxd.png",
        "model": "Asus VivoBook S15 S510UA-BQ111T",
        "cpu": "Intel® Core™ i3-7100U (2.4GHz, 2Cores, 4Threads, 3MB Cache, FSB 4GT/s)",
        "ram": "4GB DDR4 Buss 2133 MHz, 2 Slots",
        "storage": "1TB HDD 5400rpm + 1 Slot SSD M2 SATA3",
        "cdndcd": "",
        "vga": "Intel® HD Graphics 620",
        "monitor": "15.6 (16:9) backlit FHD (1920x1080) 60Hz Anti-Glare Panel with 45% NTSC with 178˚ wide-viewing angle display",
        "connection": "Integrated 802.11 AC (2x2) + Built-in Bluetooth V4.1",
        "keyboard": "",
        "tech": "Microphone-in/Headphone-out jack, Type C USB3.0 (USB3.1 GEN1), USB 3.0 port(s), USB 2.0 port(s), HDMI, Finger",
        "weight": "1.6 Kg",
        "battery": "3 Cells 42 Whrs Battery",
        "os": "Windows 10 bản quyền",
        "price": 12250000,
    }),
    new Laptop({
        "imagePath": "https://i.imgur.com/aHxcqrF.png",
        "model": "Asus VivoBook S15 S510UQ-BQ483T",
        "cpu": "Intel® Core™ i7-8550U (1.8GHz Upto 4.0GHz, 4Cores, 8Threads, 8MB cache, FSB 4GT/s)",
        "ram": "8GB DDR4 Buss 2400MHz, 2 Slots RAM",
        "storage": "1TB HDD 5400rpm + 1 Slot SSD M2 SATA3",
        "cdndcd": "",
        "vga": "NVIDIA® Geforce 940MX 2GB GDDR5 + Intel® UHD Graphics 620",
        "monitor": "15.6 (16:9) backlit FHD (1920x1080) 60Hz Anti-Glare Panel with 45% NTSC with 178˚ wide-viewing angle display",
        "connection": "Integrated 802.11 AC (2x2) + Built-in Bluetooth V4.1",
        "keyboard": "",
        "tech": "Microphone-in/Headphone-out jack, Type C USB3.0 (USB3.1 GEN1), USB 3.0 port(s), USB 2.0 port(s), HDMI, Finger",
        "weight": "1.7 Kg",
        "battery": "3 Cells 42 Whrs Battery",
        "os": "Windows 10 bản quyền",
        "price": 19850000,
    }),
    new Laptop({
        "imagePath": "https://i.imgur.com/PmiOHaj.jpg",
        "model": "Dell Inspiron 7567-N7567B",
        "cpu": "Intel® Core™ i7-7700HQ (2.8GHz upto 3.8GHz, 4Cores, 8Threads, 6MB cache, FSB 8GT/s)",
        "ram": "8GB DDr4 Bus 2400Mhz (2 Slot, 8GB x 01)",
        "storage": "128GB SSD M2 SATA3 + 1TB HDD 5400rpm",
        "cdndcd": "",
        "vga": "NVIDIA GeForce® GTX 1050Ti 4GB GDDR5 + Intel® HD Graphics 630",
        "monitor": "15.6-inch 4K uHD IPS",
        "connection": "802.11ac + Bluetooth 4.0, 2.4 GHz",
        "keyboard": "",
        "tech": "Webcam, Card Reader, USB 3.0, USB 3.1 Type C, HDMI, Backlit Keyboard, Dual Fans",
        "weight": "2.5 Kg",
        "battery": "6 Cells 74 Whrs",
        "os": "Windows 10 bản quyền",
        "price": 29390000,
    }),
    new Laptop({
        "imagePath": "https://i.imgur.com/BQgyHC7.jpg",
        "model": "Dell Vostro 7570-70138770",
        "cpu": "Intel® Core™ i7-7700HQ (2.8GHz upto 3.8GHz, 4Cores, 8Threads, 6MB cache, FSB 8GT/s)",
        "ram": "8GB DDR4 2400MHz, 2 Slot, Max 32GB",
        "storage": "128GB SSD M.2 PCIe + 1TB HDD 5400rpm",
        "cdndcd": "",
        "vga": "NVIDIA GeForce® GTX 1050Ti 4GB GDDR5 + Intel® HD Graphics 630",
        "monitor": "15.6-inch FHD (1920x1080) IPS, Anti-Glare LED-Backlit Display",
        "connection": "Wifi 802.11 2X2 ac + Bluetooth v4.1",
        "keyboard": "",
        "tech": "Combo jack (headset/mic), Power connector, HDMI, Noble lock slot 2 USB 3.1 Gen 1 Type-A (5 Gbps), USB 3.1 Gen 1 Type-A (5 Gbps) with PowerShare, VGA, Thunderbolt™ 3 Port (USB 3.1 Gen 2 Type-C™ with support for 40 Gbps Thunderbolt and DisplayPort), Power board Finger",
        "weight": "2.65 Kg",
        "battery": "4 Cell 56 Whr, hỗ trợ ExpressCharge",
        "os": "Windows 10 bản quyền + Microsoft Office 365",
        "price": 29990000,
    }),
    new Laptop({
        "imagePath": "https://i.imgur.com/5J8smQh.jpg",
        "model": "Dell Inspiron 5567-M5I5353",
        "cpu": "Intel® Core™ i5-7200U (2.5GHz upto 3.1 GHz, 2Cores, 4Threads, 3MB Cache, FSB 4GT/s)",
        "ram": "8GB DDR4 Bus 2400Mhz",
        "storage": "1TB HDD 5400rpm",
        "cdndcd": "",
        "vga": "AMD Radeon R7 M445 2GB DDR5 + Intel® HD Graphics 620",
        "monitor": "15.6 inch HD (1366x768) Truelife-Backlit Display",
        "connection": "1000Mbps | Wifi 802.11b,g,n | Bluetooth 4.0",
        "keyboard": "",
        "tech": "Reader SD | Camera HD | HDMI | USB 3.0",
        "weight": "2.3 Kg",
        "battery": "3 cells - 42WWhr",
        "os": "FreeDos",
        "price": 14900000,
    }),
    new Laptop({
        "imagePath": "https://i.imgur.com/i66jzN9.jpg",
        "model": "Dell Vostro V5468-70087067",
        "cpu": "Intel® Core™ i7-7500U (2.7GHz upto 3.5GHz, 2Cores, 4Threads, 4MB cache, FSB 4GT/s)",
        "ram": "8GB DDR4 2400MHz (1x8GB) + 1 slot Ram.",
        "storage": "1TB HDD 5400rpm",
        "cdndcd": "",
        "vga": "NVIDIA GeForce® GT940MX 4GB DDR5 + Intel® HD Graphics 620",
        "monitor": "14.1 (1366x768)-Backlit Display",
        "connection": "100Mbps | Wifi 802.11b,g,n | Bluetooth",
        "keyboard": "",
        "tech": "Reader SD | Camera HD | DVI | USB 3.0",
        "weight": "1.66 Kg",
        "battery": "3 Cell 42 Whrs",
        "os": "Windows 10 bản quyền",
        "price": 21000000,
    }),
    new Laptop({
        "imagePath": "https://i.imgur.com/gLwShZU.jpg",
        "model": "Dell Inspiron 7567-N7567C",
        "cpu": "Intel® Core™ i7-7700HQ (2.8GHz upto 3.8GHz, 4Cores, 8Threads, 6MB cache, FSB 8GT/s)",
        "ram": "8GB DDr4 Bus 2400Mhz (2 Slot, 8GB x 01)",
        "storage": "500GB HDD 5400rpm + 128GB SSD M2 SATA3",
        "cdndcd": "",
        "vga": "NVIDIA GeForce® GTX 1050Ti 4GB GDDR5 + Intel® HD Graphics 630",
        "monitor": "15.6 FHD (1920x1080)",
        "connection": "802.11ac + Bluetooth 4.0, 2.4 GHz",
        "keyboard": "",
        "tech": "Webcam, Card Reader, USB 3.0, HDMI, Backlit Keyboard, Dual Fans",
        "weight": "2.5 Kg",
        "battery": "6 Cells 74 Whrs",
        "os": "Free Dos",
        "price": 24990000,
    }),
    new Laptop({
        "imagePath": "https://i.imgur.com/76HrlGi.jpg",
        "model": "Asus X541UV-GO607D",
        "cpu": "Intel® Core™ i5-7200U (2.5GHz upto 3.1 GHz, 2Cores, 4Threads, 3MB Cache, FSB 4GT/s)",
        "ram": "4GB DDR4 Bus 2133MHz, 1 Slot, Max 16GB",
        "storage": "1TB HDD 5400rpm",
        "cdndcd": "",
        "vga": "NVIDIA GeForce 920MX 2GB DDR3 + Intel® HD Graphics 620",
        "monitor": "15.6\" HD (1366x768) 60Hz Anti-Glare Panel with 45% NTSC",
        "connection": "Intel 802.11 b/g/n/ac + Bluetooth® 4.0",
        "keyboard": "Full-sized chiclet keyboard",
        "tech": "RJ45 LAN Jack for LAN insert, Microphone-in/Headphone-out jack, VGA port/Mini D-sub 15-pin for external monitor, HDMI, USB 2.0 port(s), Type C USB3.0 (USB3.1 GEN1), Type A USB3.0 (USB3.1 GEN1)",
        "weight": "2 Kg",
        "battery": "3 Cells 36 Whrs",
        "os": "Free Dos",
        "price": 12490000,
    }),
    new Laptop({
        "imagePath": "https://i.imgur.com/d44HhZa.jpg",
        "model": "Acer Swift 5 SF514-52T-50G2 (NX.GTMSV.001)",
        "cpu": "Intel® Core™ i5-8250U (1.60GHz Up to 3.40 GHz, 4Cores, 8Threads, 6MB Cache, FSB 4GT/s)",
        "ram": "8GB LPDDR3-2133MHz",
        "storage": "256GB SSD M.2 Sata",
        "cdndcd": "",
        "vga": "Intel® UHD Graphics 620",
        "monitor": "14.0-inch Full HD (1920x1080) resolution, multi-touch, CineCrystal, In-plane Switching (IPS-Pro) Technology",
        "connection": "Wifi 802.11ac + Bluetooth 4.2",
        "keyboard": "",
        "tech": "2x USB 3.0 HDMI Output 1x USB 3.1 Gen 1 Type-C",
        "weight": "0.97 kg",
        "battery": "2-Cell 4670 mAh",
        "os": "Windows 10 bản quyền",
        "price": 23700000,
    }),
];

var done = 0;
for (var i = 0; i < laptops.length; i++) {
    laptops[i].save(function(err, result) {
        done++;
        if (err) {
            console.log(err.message);
        }
        if (done === laptops.length) {
            mongoose.disconnect();
        }
    });
}
