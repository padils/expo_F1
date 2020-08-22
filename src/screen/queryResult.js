import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getQueryResults } from '../redux/reducer';
import { QueryResultsTable } from '../parts/table';


let QueryResults = ({ queryResults, route, getQueryResults }) => {

    getQueryResults(route.params.season)

    if (queryResults) {

        return <View>
            <QueryResultsTable data={queryResults.RaceTable.Races} />

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
        queryResults: state.drivers.queryResults
    }

}

export default connect(mapStateToProps, { getQueryResults })(QueryResults);