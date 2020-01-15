const axios = require('axios');

const getLugarLatLng = async(dir)=>{


const encodeUrl = encodeURI(dir);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: { 'x-rapidapi-key': '93a9d334d8msh8878812d454b857p10d7ebjsn57b49eaa9a2f' }
});

const resp = await instance.get();

if (resp.data.Results.length===0){
    throw new Error(`No hay resultados para ${dir}`);
}
 const data = resp.data.Results[0];
 const direccion = data.name;
 const lat = data.lat;
 const lng = data.lon;


return {

     direccion,
     lat,
     lng
}


}
module.exports= {
    getLugarLatLng
}

