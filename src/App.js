import React from "react";
import store from "./Store/index";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import RefundConfirm from "./component/RefundConfirm";
import ContainerQrCodeScanner from "./component/ContainerQrCodeScanner";
import InvoiceRefund from "./component/InvoiceRefund";
import QrLoading from "./component/QrLoading";
import Error404 from "./component/Error404";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <h1 className="center">Welcome to Refund App</h1>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="refundoverview" />

            <Route exact path="/refundoverview" component={InvoiceRefund} />
            <Route exact path="/refundoverview" component={QrLoading} />
            <Route exact path="/qrscan" component={ContainerQrCodeScanner} />
            <Route exact path="/refundConfirm" component={RefundConfirm} />
            <Route component={Error404} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    </Provider>
  );
}

export default App;
