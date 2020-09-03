import { types } from "."

export const changeTab = (activeKey) => {
    return {
      type: types.CHANGE_TABS,
      activeKey
    }
  }
  