const initialState = {
    loginStatus: false,
    domain: null,
    key: null,
    pinCreated: null,
    setMsg: ""
  }
  
  const app = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MSG':
        return {
          ...state,
          setMsg: action.msg
        }
      case 'SET_PIN':
        return {
          ...state,
          pinCreated: true
        }
      case 'SAVE_B38KEY':
        return {
          ...state,
          key: action.b38key
        }
      case 'SAVE_DOMAIN':
        return {
          ...state,
          domain: action.domain
        }
      case 'SET_STATUS':
        return {
          ...state,
          loginStatus: action.status
        }
      default:
        return state
    }
  }