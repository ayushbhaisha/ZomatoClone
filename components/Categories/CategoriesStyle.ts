import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  subContainer: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    color: '#000'
  },
});