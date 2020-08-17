const ADD_DRIVERS = `profile/ADD_DRIVERS`;
const ADD_DRIVER = `profile/ADD_DRIVER`;
const NEXT_DRIVER = `profile/NEXT_DRIVER`;
const BACK_DRIVER = `profile/BACK_DRIVER`;
const SET_SEASON = `profile/SET_SEASON`;
const SET_QUERY_RESULTS = `profile/SET_QUERY_RESULTS`;

import { driverAPI } from './../api/api';

let initialState =
{ 
    offset:0
};

const driversReducer = (state = initialState, action) => {


    switch (action.type) {

        case ADD_DRIVERS:


            return {
                ...state,
                drivers:action.drivers
            }
        case ADD_DRIVER:
            return {
                ...state,
                driver:action.driver
            }
        case NEXT_DRIVER:
            return {
                ...state,
                offset:state.offset+10
            }
        case BACK_DRIVER:
            return {
                ...state,
                offset:state.offset-10
            }
        case SET_SEASON:
            return {
                ...state,
                season:action.season
            }
        case SET_QUERY_RESULTS:
            return {
                ...state,
                queryResults:action.queryResults
            }

        default:
            return state
    }

};

export const setDrivers = (drivers) => ({ type:ADD_DRIVERS, drivers})
export const setDriver = (driver) => ({ type:ADD_DRIVER, driver})
export const nextDrivers = () => ({ type:NEXT_DRIVER})
export const backDrivers = () => ({ type:BACK_DRIVER})
export const setSeason = (season) => ({ type:SET_SEASON,season})
export const setQueryResults = (queryResults) => ({ type:SET_QUERY_RESULTS,queryResults})

export const getDriverApi = (series='f1', limit=10,offset=0) => {

    return async (dispatch) => {
        let data = await  driverAPI.getDrivers(series, limit,offset);        
        dispatch(setDrivers(data.MRData));
    }
}
export const getInfoDriverApi = (series='f1', name) => {

    return async (dispatch) => {
        let data = await  driverAPI.getInfoDriver(series,name)       
        dispatch(setDriver(data.MRData));
    }
}
export const getSeason = ( limit=30) => {
    return async (dispatch) => {
        let data = await  driverAPI.getSeasons(limit)       
        dispatch(setSeason(data.MRData));
    }
}
export const getQueryResults = ( season=1950) => {
    
    return async (dispatch) => {
        let data = await  driverAPI.getQueryResults(season)       
        dispatch(setQueryResults(data.MRData));
    }
}

export default driversReducer