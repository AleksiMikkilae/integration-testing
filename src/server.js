const express = require('express');
const app = express();
const converter = require('./converter');
const port = 3000;

// endpoint localhost:3000/
app.get('/', (req, res) => res.send("Hello"));

// endpoint localhost:3000/rgb-to-hex?red=255&green=0&blue=0
app.get('/rgb-to-hex', (req, res) => {
    const red = parseInt(req.query.red, 10)
    const green = parseInt(req.query.green, 10)
    const blue = parseInt(req.query.blue, 10)
    const hex = converter.rgbToHex(red, green, blue);
    res.send(hex);
})

// endpoint localhost:3000/hex-to-rgb?hex=ff0000
app.get('/hex-to-rgb', (req, res) => {
    const hex = req.query.hex
    const rgb = converter.hexToRGB(hex);
    res.send("Hex :" + hex + "\nto RGB: " + rgb);
    // res.send(rgb)
})  

if (process.env.NODE_ENV === 'test') {
    module.exports = app;
} else {
    app.listen(port, () => console.log(`Server listening on localhost:${port}`))
}
