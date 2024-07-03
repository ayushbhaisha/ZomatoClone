import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    iconImage: {
        width: 30,
        height: 30,
        marginLeft: 10,
        marginRight: 5
    },
    location: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    address: {
        color: '#888',
    },
    searchBar: {
        margin: 16,
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#d7d7d7',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 16,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15
    },
    filterContStyle: {
    },
    filter: {
        fontSize: 16,
        color: '#000'
    },
    filterItemContainer: {
        padding: 8,
        marginHorizontal: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d7d7d7',
        marginTop: 10
    }
});