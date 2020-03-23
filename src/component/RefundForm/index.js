import React from "react";

function RefundForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.onSubmit} className="formItems">
        <p>Do you want to refund the invoice? </p>
        <div>
          <label>Yes: </label>
          <input
            type="radio"
            value="yes"
            name="refundConfirm"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          <label>No: </label>
          <input
            type="radio"
            value="no"
            name="refundConfirm"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          <label>
            <br />
            How much percentage do you want to refund?
            <br />
          </label>
          <input
            type="text"
            className="inputText"
            name="percentageOfRefund"
            onChange={props.handleChange}
            value={props.value.percentageOfRefund}
            placeholder="Enter refund percentage"
          ></input>
        </div>
        <input type="submit" className="button"></input>
      </form>
    </React.Fragment>
  );
}
export default RefundForm;
