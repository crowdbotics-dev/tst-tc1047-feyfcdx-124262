import axios from "axios"
import {
  TST_TC1047CNUCKKFBUJ_USERNAME,
  TST_TC1047CNUCKKFBUJ_PASSWORD
} from "react-native-dotenv"
const tSTTCcnuckkfbuj = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047CNUCKKFBUJ_USERNAME,
    password: TST_TC1047CNUCKKFBUJ_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
