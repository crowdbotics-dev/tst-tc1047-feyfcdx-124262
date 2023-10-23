import axios from "axios"
import {
  TST_TC1047FXIELYKNTT_PASSWORD,
  TST_TC1047FXIELYKNTT_USERNAME
} from "react-native-dotenv"
const tSTTCfxielykntt = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047FXIELYKNTT_PASSWORD,
    password: TST_TC1047FXIELYKNTT_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
