import axios from "axios"
import {
  TST_TC1047QTRDARYUXW_PASSWORD,
  TST_TC1047QTRDARYUXW_USERNAME
} from "react-native-dotenv"
const tSTTCqtrdaryuxw = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047QTRDARYUXW_PASSWORD,
    password: TST_TC1047QTRDARYUXW_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
