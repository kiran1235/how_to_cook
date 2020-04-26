import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

const Layout = ({ children }) => {
  return <View style={styles.wrapper}>{children}</View>;
};

export default Layout;
