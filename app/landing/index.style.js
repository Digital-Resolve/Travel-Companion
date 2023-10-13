import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    topSection: {
        height: '70%',
        backgroundColor: 'green',
    },
    imgContainer: {
        height: '100%',
        backgroundColor: 'blue',
        bottom: 50,
    },
    imgRow: {
        transform: [{ rotate: '36deg'}],
        flexDirection: 'row',
        height: '30%',
        backgroundColor: 'orange',
        marginBottom: 5,
    },
    imgRow2: {
        transform: [{ rotate: '36deg'}],
        right: 40,
        bottom: 20,
        flexDirection: 'row',
        height: '30%',
        backgroundColor: 'orange',
        marginBottom: 5,
    },
    imgRow3: {
        transform: [{ rotate: '36deg'}],
        right: 50,
        bottom: 40,
        flexDirection: 'row',
        height: '30%',
        backgroundColor: 'orange',
        marginBottom: 5,
    },
    sideImg: {
        transform: [{ rotate: '-36deg'}],
        width: 150,
        height: 150,
    }
})

export default styles