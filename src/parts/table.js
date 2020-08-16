import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Table, Row, Rows } from 'react-native-table-component';

export let TableDrivers = ({ data, infoDriver }) => {

    let tableDriver = Array.from(data).map((item) => {

        return <View key={item.driverId} style={styles.row}>

            <View style={styles.text}>
                <TouchableOpacity onPress={() => infoDriver(item.driverId)}>
                    <Text>{item.driverId} </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.text}><Text>{item.url} </Text></View>
            <View style={styles.text}><Text>{`${item.givenName}\n${item.familyName}`}</Text></View>
            <View style={styles.text}><Text>{item.dateOfBirth} </Text></View>
            <View style={styles.text}><Text>{item.nationality} </Text></View>

        </View>
    })

    return (<>
        <View style={styles.container}>

            <ScrollView horizontal={true}>
                <View>

                    <View style={styles.row}>
                        <View style={styles.text}><Text>driverId </Text></View>
                        <View style={styles.text}><Text>url </Text></View>
                        <View style={styles.text}><Text>Name</Text></View>
                        <View style={styles.text}><Text>dateOfBirth</Text></View>
                        <View style={styles.text}><Text>nationality </Text></View>

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

            <View style={styles.text}>
                <TouchableOpacity onPress={() => alert('this driver')}>
                    <Text>{item.driverId} </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.text}><Text>{item.url} </Text></View>
            <View style={styles.text}><Text>{item.permanentNumber} </Text></View>
            <View style={styles.text}><Text>{`${item.givenName}\n${item.familyName}`}</Text></View>
            <View style={styles.text}><Text>{item.dateOfBirth} </Text></View>
            <View style={styles.text}><Text>{item.nationality} </Text></View>
            <View style={styles.text}><Text>{item.code} </Text></View>

        </View>
    })

    return (<>
        <View style={styles.container}>

            <ScrollView horizontal={true}>
                <View>

                    <View style={styles.row}>
                        <View style={styles.text}><Text>driverId </Text></View>
                        <View style={styles.text}><Text>url </Text></View>
                        <View style={styles.text}><Text>permanentNumber </Text></View>
                        <View style={styles.text}><Text>Name</Text></View>
                        <View style={styles.text}><Text>dateOfBirth</Text></View>
                        <View style={styles.text}><Text>nationality </Text></View>
                        <View style={styles.text}><Text>code</Text></View>

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

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingTop: 30,
        backgroundColor: 'blue'
    },
    row: {
        flexDirection: 'row',
    },
    text: {
        borderWidth: 1,
        width: 100
    }
});


// export let AnyTable = ({ data }) => {

//     let dataMass = Array.from(data);
//     let head = [];

//     dataMass.forEach((item) => {
//         for (let key in item) {
//             head.push(key);
//         }
//     })

//     let table = dataMass.map(item => {
//         let mas = []
//         for (const key in item) {
//             mas.push(item[key])
//         }
//         return mas
//     })
//     return <ScrollView >
//     <View >

//         <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
//           <Rows data={table}  />
//         </Table>
//         {/* <Text>{table[0][0]}</Text> */}
//     </View>
// </ScrollView> 
// }

