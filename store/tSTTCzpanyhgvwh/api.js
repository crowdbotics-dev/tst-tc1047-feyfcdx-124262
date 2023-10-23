import axios from "axios"
import {
  TST_TC1047ZPANYHGVWH_USERNAME,
  TST_TC1047ZPANYHGVWH_PASSWORD
} from "react-native-dotenv"
const tSTTCzpanyhgvwh = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047ZPANYHGVWH_USERNAME,
    password: TST_TC1047ZPANYHGVWH_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
