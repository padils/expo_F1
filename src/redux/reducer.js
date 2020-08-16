const ADD_DRIVERS = `profile/ADD_DRIVERS`;
const ADD_DRIVER = `profile/ADD_DRIVER`;
const NEXT_DRIVER = `profile/NEXT_DRIVER`;
const BACK_DRIVER = `profile/BACK_DRIVER`;

import { driverAPI } from './../api/api';

let initialState =
{
    
    isFetching:false,
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

        default:
            return state
    }


};

export const setDrivers = (drivers) => ({ type:ADD_DRIVERS, drivers})
export const setDriver = (driver) => ({ type:ADD_DRIVER, driver})
export const nextDrivers = () => ({ type:NEXT_DRIVER})
export const backDrivers = () => ({ type:BACK_DRIVER})

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

export default driversReducer