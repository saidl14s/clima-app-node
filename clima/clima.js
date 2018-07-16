const axios = require('axios');

const getClima = async(lat, lng) => {

    let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=cf8ace709a6e6bcd5c7fe3a1ffa82bde`);

    return result.data.main.temp;
}

module.exports = {
    getClima
}