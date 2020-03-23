import React, { Component } from "react";
import RefundConfirm from "../RefundConfirm";
import Loading from "../QrLoading";
import QrCodeReader from "react-qr-reader";
import { invoiceLoad } from "../../actions/refundinvoice";
import { connect } from "react-redux";

class ContainerQrCodeScanner extends Component {
  state = {
    loading: true,
    InvoiceScanned: ""
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 1000);
  };
  handleScan = data => {
    if (data) {
      this.props.invoiceLoad(data);
      this.setState({
        InvoiceScanned: data
      });
    }
  };
  handleError = error => {
    console.error(error);
  };
  render() {
    return this.state.loading ? (
      <Loading />
    ) : this.state.InvoiceScanned ? (
      <RefundConfirm />
    ) : (
      <React.Fragment>
        <div className="center">
          <h2> Scan your invoice </h2>
        </div>
        <div className="arrow">&#8674;</div>
        <div className="qrScanner">
          <QrCodeReader onError={this.handleError} onScan={this.handleScan} />
        </div>
      </React.Fragment>
    );
  }
}
export default connect(null, { invoiceLoad })(ContainerQrCodeScanner);
