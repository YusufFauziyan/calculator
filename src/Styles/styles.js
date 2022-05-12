import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    num_row: {
      flexDirection: 'row',
      marginVertical: 15,
      marginHorizontal: 10
    },
    number: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
    },
    number_grey: {
      color: "#737373",
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
    },
    number_red: {
      color: "#dc2626",
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
    },
    number_equal: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 10,
      backgroundColor: "#dc2626",
      borderRadius: 100 / 2,
      boxShadow: '0px 0px 3px rgba(255,255,255, .3)'
    },
    number_total: {
        color: 'white',
        fontSize: 44,
        fontWeight: 'bold',
        padding: 10,
        marginTop: 'auto',
        textAlign: 'right',
        marginHorizontal: '10%',
        marginBottom: 15
    },
  });
  