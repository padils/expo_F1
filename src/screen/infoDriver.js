import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getInfoDriverApi } from '../redux/reducer';
import { InfoTableDriver } from './../parts/table';


let InfoDriver = ({ getInfoDriverApi, route, driver }) => {

    getInfoDriverApi('f1', route.params.name);

    if (driver) {

        return <View>
            <InfoTableDriver data={driver.DriverTable.Drivers} />
        </View>
    }

    return <View>
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
    }

}



export default connect(mapStateToProps, { getInfoDriverApi })(InfoDriver);