import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8FF',
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 80,
        paddingRight: 80,
    },
    turnArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 50,
    },
    gameArea: {
        flex: 10,
        paddingHorizontal: 20,
        height: '100%',
        justifyContent: 'space-between',
    },
    controlArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 35,
        paddingRight: 30,
    },
});
