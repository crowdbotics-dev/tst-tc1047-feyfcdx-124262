import axios from "axios"
import {
  TST_TC1047WGBVTFRRRU_USERNAME,
  TST_TC1047WGBVTFRRRU_PASSWORD
} from "react-native-dotenv"
const tSTTCwgbvtfrrru = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047WGBVTFRRRU_USERNAME,
    password: TST_TC1047WGBVTFRRRU_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
