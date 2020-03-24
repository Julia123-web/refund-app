import React, { Component } from "react";
import RefundForm from "../RefundForm";
import { Redirect } from "react-router-dom";
import { invoiceUpdate, invoiceLoad } from "../../actions/refundinvoice";
import { connect } from "react-redux";

class RefundConfirm extends Component {
  state = {
    confirmRefund: "",
    percentageOfRefund: "",
    submitted: false
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.setState({
      submitted: true,
      confirmRefund: "yes"
    });

    if (this.state.confirmRefund === "yes") {
      const amountRefund =
        Number(this.props.invoice[0].amount) *
        (Number(this.state.percentageOfRefund) / 100);

      const amountRefundPlusVAT = amountRefund + amountRefund * (21 / 100);
      this.props.invoiceUpdate({
        percentageOfRefund: Number(this.state.percentageOfRefund),
        amountRefund: amountRefundPlusVAT.toFixed(2)
      });
    } else if (
      this.state.confirmRefund === "no" ||
      this.state.confirmRefund === ""
    )
      this.props.invoiceUpdate({
        percentageOfRefund: 0,
        amountRefund: 0
      });
  };
  render() {
    console.log("HI", this.state.confirmRefund);
    return this.state.confirmRefund === "no" &&
      this.state.submitted === true ? (
      <Redirect to="/refundoverview" />
    ) : this.state.confirmRefund === "yes" && this.state.submitted === true ? (
      <Redirect to="/refundoverview" />
    ) : (
      <div>
        <RefundForm
          value={this.state}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("WHAT IS INVOICE", state.invoice);
  return {
    invoice: state.invoice
  };
};
export default connect(mapStateToProps, {
  invoiceUpdate,
  invoiceLoad
})(RefundConfirm);
