const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "FETCHED_INVOICE":
      // console.log("---JSON---", JSON.parse(action.datainvoice));
      return [...state, JSON.parse(action.datainvoice)];

    case "INVOICE_UPDATE":
      state[state.length - 1].percentageOfRefund =
        action.newdatainvoice.percentageOfRefund;
      state[state.length - 1].amountRefund = action.newdatainvoice.amountRefund;
      return state;
    default:
      return state;
  }
};
