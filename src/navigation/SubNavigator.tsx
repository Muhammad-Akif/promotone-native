import { ParamListBase } from "@react-navigation/native";

type SubNavigator<T extends ParamListBase> = {
    [K in keyof T]: T[K] extends undefined
      ? { screen: K }
      : { screen: K; params: T[K] }
  }[keyof T]

export default SubNavigator;