import { StyleSheet } from "react-native";
import { FONT, COLOR } from "../../constants";

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        marginTop: 64,
        backgroundColor: 'pink',
        // marginHorizontal: 16,
    },
    card: {
        width: "100%",
        padding: 16,
        // justifyContent: 'center',
        // alignContent: 'center',
        // alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'orange',
        // marginVertical: 8,
      },
      locationCard: {
        width: 148,
        height: 232,
        borderRadius: 16,
        // padding: 16,
        // justifyContent: 'center',
        // alignContent: 'center',
        // alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'orange',
        // marginVertical: 8,
      },
      mainHeader: {
        fontFamily: FONT.medium,
        fontSize: 34,
        color: COLOR.black,
        marginLeft: 16,
      },
      row: {
        flexDirection: 'row',
        backgroundColor: 'teal',
      },
      col: {
        flexDirection: 'column',
      },
      w80: {
        width: '80%',
      },
      w20: {
        width: '20%',
      },
      marginR16: {
        marginRight: 16,
      },
      marginL16: {
        marginLeft: 16,
      },
      mainSubText: {
        opacity: 0.4,
        fontFamily: FONT.regular,
        fontSize: 12,
        color: '#242424',
      },
      searchContainer: {
        flexDirection: 'row',
        // flex: 1,
        borderRadius: 16,
        marginHorizontal: 16,
        backgroundColor: '#F8F8F8',
        height: 52,
        justifyContent: "center",
        paddingHorizontal: 16,
      },
      searchText: {
        fontFamily: FONT.regular,
        fontSize: 16,
        opacity: 0.4,
        justifyContent: 'center'
      },
      categoryText: {
        fontFamily: FONT.medium,
        fontSize: 16,
        color: COLOR.black,
        marginLeft: 16,
      },
      tab: (activeFilter, item) => ({
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        borderWidth: 1,
        borderColor: activeFilter === item ? COLOR.black : '#00000000',
        borderRadius: 16,
        width: 80,
      }),
      viewAllText: {
        fontFamily: FONT.bold,
        fontSize: 12,
        backgroundColor: 'orange',
        color: COLOR.primary,
        marginleft: -16,
      }
})

export default styles