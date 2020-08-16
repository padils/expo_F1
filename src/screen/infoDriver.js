import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getInfoDriverApi, getDriverApi} from '../redux/reducer';
import TableDriver, { InfoTableDriver } from './../parts/table';
import { backDrivers } from './../redux/reducer';

let InfoDriver = ({  getInfoDriverApi, route,driver}) => {
   useEffect(()=>{getInfoDriverApi('f1',route.params.name)},[driver])
   

   
  if(driver){
      
   return<View>
   {/* <Text>{driver.driver.DriverTable.Drivers[0].url}</Text> */}
       <InfoTableDriver data={driver.DriverTable.Drivers}/>
   </View>}
   return<View>
       <Text>dowland</Text>
   </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue'
    },
});




let mapStateToProps = (state) => {
    return {
        driver: state.drivers.driver,
        offset: state.drivers.offset
    }

}



export default connect(mapStateToProps, { getInfoDriverApi})(InfoDriver);