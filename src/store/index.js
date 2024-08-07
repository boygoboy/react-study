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

export * from './modules/common'
export * from './modules/system'
export * from './history-modules/setting/createActions'
export * from './history-modules/user/createActions'

export default store