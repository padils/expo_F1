import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { getDriverApi, nextDrivers } from '../redux/reducer';
import {TableDrivers} from './../parts/table';
import { backDrivers } from './../redux/reducer';

let Profile = ({ getDriverApi, drivers, offset, nextDrivers, backDrivers ,navigation}) => {
    useEffect(() => {
        getDriverApi('f1', 20, offset)
    }, [drivers, offset])

    let infoDriver=(name)=>{
         navigation.navigate('InfoDriver',{name})
        }

    if (!drivers) {
        
        return <View><Text>
            dowland
        </Text></View>
    }
    return <View style={styles.container}>

        <View style={styles.container}>
         
            <Button title='go to season List' onPress={()=>navigation.navigate('SeasonList')}/>
            <View>
                    <Button disabled={drivers.total < offset} onPress={() => nextDrivers()} title='NEXT' />
                    <Button disabled={offset === 0} onPress={() => backDrivers()} title='BACK' />

                </View>
                <TableDrivers data={drivers.DriverTable.Drivers} infoDriver={infoDriver} />

        </View>


    </View>
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        
    },
});


let mapStateToProps = (state) => {
    return {
        drivers: state.drivers.drivers,
        offset: state.drivers.offset
    }

}

export default connect(mapStateToProps, { getDriverApi, nextDrivers, backDrivers })(Profile);
