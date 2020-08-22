import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getSeason } from '../redux/reducer';
import { SeasonListTable } from './../parts/table';

let SeasonList = ({ season, getSeason, navigation }) => {
    
    getSeason(30);
    let goToQueryResults = (season) => {
        navigation.navigate('QueryResults', { season })
    }
    if (season) {

        return <View>
            <SeasonListTable
                data={season.SeasonTable.Seasons}
                goToQueryResults={goToQueryResults} />
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
        season: state.drivers.season
    }

}

export default connect(mapStateToProps, { getSeason })(SeasonList);