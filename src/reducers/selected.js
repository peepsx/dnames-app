const initialState = {
    selectedIdx: 0
  }
  
  const selected = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_ID':
        return {
          selectedIdx: action.selection
        }
      default:
        return state
    }
  }
  
  export default selected
  