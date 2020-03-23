//exporting the actions
export const FETCHED_INVOICE = "FETCHED_INVOICE";
export const INVOICE_UPDATE = "INVOICE_UPDATE";

//action dispatched fetched
function invoicdeFetched(datainvoice) {
  console.log("------", datainvoice);
  return {
    type: "FETCHED_INVOICE",
    datainvoice
  };
}

// action to get the invoiceFetched when scan the QRcode through the camera

export const invoiceLoad = datainvoice => dispatch => {
  console.log("----the fetched invoice-----", datainvoice);
  return dispatch(invoicdeFetched(datainvoice));
};

//action to update the invoice
function updateInvoice(newdatainvoice) {
  return {
    type: "INVOICE_UPDATE",
    newdatainvoice
  };
}

// action to update the updateInvoice with the amount, percentage and refund of the invoice.
export const invoiceUpdate = newdatainvoice => dispatch => {
  return dispatch(updateInvoice(newdatainvoice));
};
