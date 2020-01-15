const axios = require('axios');


const getClima = async(lat, lng)=>{

   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a8e1c937a210e995f37389767211492a&units=metric`)
    return resp.data.main.temp;
}

module.exports={


    getClima
}