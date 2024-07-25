import { configureStore } from "@reduxjs/toolkit"
import commonReducer from "./modules/common"
import systemReducer from "./modules/system"
import settingReducer from "./history-modules/setting"
import userReducer from "./history-modules/user"

const store=configureStore({
      reducer:{
          common:commonReducer,
          system:systemReducer,
          setting:settingReducer,
          user:userReducer
      }
})

export default store