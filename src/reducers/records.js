import update from 'immutability-helper';

const initialState = {
  records: []
}

const records = (state = initialState, action) => {
  const recordArray = state.records;
  switch (action.type) {
    case 'ADD_RECORD':
      return {
        records: recordArray.unshift({
          dkey: action.dWebKey,
          record: action.recordName,
          peers: action.peerCount
        })
      }

    case 'UPDATE_RECORD':
      return {
        records: update(state.records, {
          [action.recordIdx]: {
            dkey: {
              $push: action.dWebKeyt
            }
          }
        })
      }

    case 'UPDATE_PEERS':
      return {
        records: update(state.records, {
          [action.recordIdx]: {
            peers: {
              $push: action.peerCount
            }
          }        
        })
      }

    case 'REMOVE_RECORD':
      return {
        records: recordArray.filter(function(action.dWebKey){ return (dkey != action.dWebKey); })
      }

    default:
      return state
  }
}

export default records