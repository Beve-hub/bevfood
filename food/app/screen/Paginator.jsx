import {View, Text, StyleSheet} from "react-native"

 const Paginator = () => {
    return(
        <View style={{flexDirection: 'row', height: 64}}>
            {data.map((_, i) => {
                return <View style={[styles.dot, {width: 10}]} key={i.toString}/>
            })}
        </View>
    )
}

export default Paginator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dot: {
        height:10,
        borderRadius: 5,
        backgroundColor: '#B40404',
        marginHorizontal: 8,
    }
})