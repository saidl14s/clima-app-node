const axios = require('axios');


const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);

    let result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }`);

    if (result.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para ${ direccion }`);
    } else if (result.data.status === 'OVER_QUERY_LIMIT') {
        throw new Error(`Error en la API: OVER_QUERY_LIMIT para ${ direccion }`);
    }

    let location = result.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }

};

module.exports = {
    getLugarLatLng
}