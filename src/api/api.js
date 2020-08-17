import Axios from 'axios';


 const instance = Axios.create({
    baseURL:`http://ergast.com/api/`
 })
 
export const driverAPI={

    getDrivers(series, limit,offset){
       return instance.get(`${series}/drivers.json?&limit=${limit}&offset=${offset}`)
       .then(response=> response.data )
    },
    getInfoDriver(series, name){ 
       return instance.get(`${series}/drivers/${name}.json`)
       .then(response=> response.data )
    },
    getSeasons(limit){
       return instance.get(`f1/seasons.json?limit=${limit}`)
       .then(response=> response.data )
    },
    getQueryResults(season){
       return instance.get(`f1/${season}.json`)
       .then(response=> response.data )
    },
} 