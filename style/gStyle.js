import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../McDonalds/constants";

export const gStyle = StyleSheet.create({
  app: {
    padding: 24,
    paddingTop: 55,
    paddingBottom: 75,
    backgroundColor: COLORS.black,
  },
  orderPage: {
    height: '100%',
    backgroundColor: COLORS.black,
    color: 'white'
  },
  mainHeader: {
    backgroundColor: "#ffc400",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mcIcon: {
    width: 51,
    height: 45,
  },
  titleTextBold: {
    fontSize: SIZES.h1,
    fontWeight: "bold",
    color: COLORS.white,
  },
  titleText: {
    fontSize: SIZES.h1,
    color: COLORS.white,
  },
  categoriesMainBlock: {
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoriesBlock: {
    width: "30%",
    marginBottom: 20,
  },
  categoriesItem: {
    minHeight: 130,
    justifyContent: "center",
    borderRadius: SIZES.radius,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: COLORS.gray,
  },
  itemImg: {
    marginTop: 10,
    width: 40,
    height: 40,
  },
  itemText: {
    fontSize: SIZES.h4,
    color: COLORS.white,
    marginTop: 10,
    textAlign: "center",
  },
  secondaryColor: {
    color: COLORS.secondary,
  },
  priceText: {
    fontSize: SIZES.h4,
    color: COLORS.primary,
    marginTop: 10,
    textAlign: "center",
  },
  secondPage: {
    padding: 24,
    paddingTop: 55,
    paddingBottom: 75,
    backgroundColor: COLORS.black,
  },
  countNum: {
    color: COLORS.primary,
    fontSize: SIZES.h4,
    padding: 10,
  },
  toCart: {
    color: "white",
    fontSize: SIZES.h4,
    padding: 5,
    backgroundColor: "#ffa500",
    marginBottom: 10,
    borderRadius: 10,
  },
  orderListBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    color: 'white'
    
  },
  orderItem: {
    width: "20%",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    height: 50,
    justifyContent: 'center',
    textAlign: "center",
  },
  deleteButton: {
    color: "white",
    fontSize: SIZES.h4,
    backgroundColor: "#ffa500",
    padding: 5,
    borderRadius: 10,
    margin: 10,
  },
  itemName: {
    width: "40%",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    alignItems: 'center',
    paddingLeft: 10,
    height: 50,
    flexDirection: 'row',
  },
  orderListHeader: {
    width: "20%",
    borderBottomWidth: 1,
    backgroundColor: COLORS.gray,
    alignItems: 'center',
    paddingLeft: 15,
    height: 50,
    flexDirection: 'row',
  },
  orderHeaderName: {
    width: "40%",
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingLeft: 15,
    height: 50,
    flexDirection: 'row',
    backgroundColor: COLORS.gray,
  },
  total: {
    backgroundColor: COLORS.gray,
    alignItems: 'flex-end',
    justifyContent: 'center',
    minWidth: 100,
    height: 50,
    paddingRight: 20,
  }

});
