const rootreducer = (state = {}, action) => {
    switch (action.type) {
      case 'FETCH_DATA':
        return Object.assign({}, action.payload);                 
      default:
          return state;
    }
}

export default rootreducer;
