const NodeGeocoder = require("node-geocoder");

var options = {
    provider: process.env.GEOCODER_PROVIDER,

    httpAdapter: "https", // Default
    apiKey: process.env.GEOCODER_API_KEY, // for Mapquest, OpenCage, Google Premier
    formatter: null // 'gpx', 'string', ...
};

module.exports = NodeGeocoder(options);
