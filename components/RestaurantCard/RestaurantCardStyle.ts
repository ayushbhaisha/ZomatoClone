import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        marginHorizontal: 15,
        marginVertical: 10
    },
    image: {
        width: '100%',
        height: 210,
    },
    textContainer: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    subtitle: {
        fontSize: 14,
        color: 'gray',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    discount: {
        fontSize: 14,
        color: '#0048cb',
    },
    time: {
        fontSize: 12,
        color: 'green',
        fontWeight: '500'
    },
    rating: {
        fontSize: 14,
        color: 'white',
        backgroundColor: 'green',
        borderRadius: 8,
        padding: 5
    },
    innerImageView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    innerImageItem: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderTopRightRadius: 15,
    },
    divider: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#d7d7d7',
        marginHorizontal: 2,
        marginVertical: 5
    }
});