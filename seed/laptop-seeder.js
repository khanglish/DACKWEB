var Laptop = require('../models/laptops');
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds111370.mlab.com:11370/ktreeteam');
var laptops = new Laptop({
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
});

laptops.save(function(err, result) {
    mongoose.disconnect();
});
