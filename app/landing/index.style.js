import { StyleSheet } from "react-native";
import { FONT, COLOR } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
    },
    topSection: {
        height: '60%',
        // backgroundColor: 'green',
    },
    imgContainer: {
        height: '100%',
        // backgroundColor: 'blue',
        // bottom: 24,
    },
    imgRow: {
        // transform: [{ rotate: '36deg'}],
        width: '160%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
        // height: '33.33%',
        // backgroundColor: 'orange',
        // marginBottom: 8,
    },
    imgRow2: {
        // transform: [{ rotate: '-36deg'}],
        // right: 40,
        // bottom: 20,
        flexDirection: 'row',
        // height: '33.33%',
        // backgroundColor: 'orange',
        // marginBottom: 8,
    },
    imgRow3: {
        // transform: [{ rotate: '-36deg'}],
        right: 50,
        // bottom: 40,
        flexDirection: 'row',
        // height: '33.33%',
        // backgroundColor: 'orange',
        // marginBottom: 8,
    },
    sideImg: {
        transform: [{ rotate: '-36deg'}],
        width: 180,
        height: 180,
        // backgroundColor: 'purple',
    },
    textContainer: {
        marginTop: 24,
        width: '65%',
        // backgroundColor: 'lime',
        marginLeft: 16,
    },
    headerText: {
        fontFamily: FONT.medium,
        fontSize: 24,
        color: COLOR.black,
        marginBottom: 8,
    },
    subText: {
        fontFamily: FONT.light,
        fontSize: 8,
        color: '#727272',
        margintop: 8,
        marginBottom: 56,
    },
    bottomContainer: {
        // width: '100%',
        flexDirection: 'row',
        // backgroundColor: 'orange',
        marginHorizontal: 16,   
        // alignContent: 'space-between'
    },
    nextBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        borderRadius: 80,
        height: 48,
        width: 160,
        backgroundColor: COLOR.primary,
    },
    btnText: {
        fontFamily: FONT.Pregular,
        fontSize: 16,
        color: COLOR.white,
    },
    elipseImg: {
        flexDirection: 'column',
        width: 22 /1.4,
        height: 4 /1.4,
        // backgroundColor: 'yellow',
        top: 42,
        // alignItems: 'center'
    },
    w50: {
        // flexDirection: 'column',
        width: '50%',
    }
})

export default styles