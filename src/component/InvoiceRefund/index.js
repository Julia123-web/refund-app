import React from "react";
import { connect } from "react-redux";
import { invoiceLoad } from "../../actions/refundinvoice";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function ViewOfInvoiceRefund(props) {
  if (!props.invoice) return "No Invoice Now";
  return (
    <React.Fragment>
      <h2 className="center1">Refunded Invoice Items:</h2>
      <Table role="table">
        <div role="rowgroup">
          <tr role="row">
            <th className="center2" role="columnheader">
              <ul>Sender -</ul>
            </th>

            <th className="center2" role="columnheader">
              <ul>Invoice -</ul>
            </th>

            <th className="center2" role="columnheader">
              <ul>Description-</ul>
            </th>

            <th className="center2" role="columnheader">
              <ul>Amount -</ul>
            </th>

            <th className="center2" role="columnheader">
              <ul>Refund % -</ul>
            </th>
            <th className="center2" role="columnheader">
              <ul>Refund Amount -</ul>
            </th>
          </tr>
        </div>
        <div role="rowgroup">
          {props.invoice &&
            props.invoice.map(invoicedetail => {
              return (
                <tr role="row" className="invoice1">
                  <td role="cell">{invoicedetail.sender}</td>
                  <td role="cell">{invoicedetail.invoice}</td>
                  <td role="cell">{invoicedetail.description}</td>
                  <td role="cell">{invoicedetail.amount}</td>
                  <td role="cell">{invoicedetail.percentageRefund}</td>
                  <td role="cell">{invoicedetail.refundAmount}</td>
                </tr>
              );
            })}
        </div>
      </Table>

      <Link to={`/qrscan`} className="link">
        Scan QR Code
      </Link>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    invoice: state.invoice
  };
};
export default connect(mapStateToProps, {
  invoiceLoad
})(ViewOfInvoiceRefund);
