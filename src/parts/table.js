import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


let Row=({item,touch=false,fun})=>{

    if(touch) return <View style={styles.text}>
    <TouchableOpacity onPress={() => fun(item)}>
            <Text>{item} </Text>
            </TouchableOpacity>
    </View>

    return <View style={styles.text}><Text>{item} </Text></View>
}

export let TableDrivers = ({ data, infoDriver }) => {

    let tableDriver = Array.from(data).map((item) => {

        return <View key={item.driverId} style={styles.row}>

            <Row item={item.driverId} touch={true} fun={infoDriver} />
            <Row item={item.url} />
            <Row item={`${item.givenName}\n${item.familyName}`} />
            <Row item={item.dateOfBirth} />
            <Row item={item.nationality} />
        </View>
    })

    return (<>
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <View>
                    <View style={styles.row}>
                        <Row item='driverId'/>
                        <Row item='url'/>
                        <Row item='Name'/>
                        <Row item='dateOfBirth'/>
                        <Row item='nationality'/>

                    </View>

                    <ScrollView>
                        <View>
                            {tableDriver}
                        </View>
                    </ScrollView>

                </View>
            </ScrollView>
        </View>
    </>
    )

}
export let InfoTableDriver = ({ data }) => {

    let tableDriver = Array.from(data).map((item) => {

        return <View key={item.driverId} style={styles.row}>

            <Row item={item.driverId}/>
            <Row item={item.url}/>
            <Row item={item.permanentNumber}/>
            <Row item={`${item.givenName}\n${item.familyName}`}/>
            <Row item={item.dateOfBirth}/>
            <Row item={item.nationality}/>
            <Row item={item.code}/>
           
        </View>
    })

    return (<>
        <View style={styles.container}>

            <ScrollView horizontal={true}>
                <View>

                    <View style={styles.row}>
                        <Row item='driverId'/>
                        <Row item='url'/>
                        <Row item='permanentNumber'/>
                        <Row item='Name'/>
                        <Row item='dateOfBirth'/>
                        <Row item='nationality'/>
                        <Row item='code'/>

                    </View>

                    <ScrollView>
                        <View>
                            {tableDriver}
                        </View>
                    </ScrollView>

                </View>
            </ScrollView>
        </View>
    </>
    )

}


export let SeasonListTable = ({ data, goToQueryResults }) => {

    let seasonList = data.map((item) => {
        return <View key={item.season} style={styles.row}>
        <Row item={item.season} touch={true} fun={goToQueryResults}/>
            <Row item={item.url}/>
        </View>
    })

    return <View style={styles.container}>


        <View style={styles.row}>
            <Row item='season'/>
            <Row item='url'/>

        </View>
        <ScrollView>
            <View>{seasonList}</View>
        </ScrollView>
    </View>
}
export let QueryResultsTable = ({ data }) => {

    let queryResults = data.map((item) => {
        return <View key={item.round} style={styles.row}>
            <Row item={item.season}/>
            <Row item={item.round}/> 
            <Row item={item.raceName} />
            <Row item={item.date} />
            <Row item={item.time} />
            <Row item={item.Circuit.circuitName}/>
            <Row item={item.Circuit.Location.locality} />
            <Row item={item.Circuit.Location.country} />
            <Row item={item.Circuit.url} />
        </View>
    })

    return <View style={styles.container}>
       
            <ScrollView horizontal={true}>
                <View>
    
                    <View style={styles.row}>
                    <Row item='season'/>
                    <Row item='round'/>
                    <Row item='raceName'/>
                    <Row item='date'/>
                    <Row item='time'/>
                    <Row item='Circuit'/>
                    <Row item='locality'/>
                    <Row item='country'/>
                    <Row item='url'/>
    
                    </View>
                        <ScrollView><View>{queryResults}</View></ScrollView>
                    </View>
                
            </ScrollView>
    
    </View>
}



const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingTop: 30,
        
    },
    row: {
        flexDirection: 'row',
    },
    text: {
        borderWidth: 1,
        width: 100
    }
});


