import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwaggerUI from "swagger-ui-react";

import "components/App/App.css";
import "swagger-ui-react/swagger-ui.css";

import PageProducts from "components/pages/PageProducts/PageProducts";
import MainLayout from "components/MainLayout/MainLayout";
import PageProductForm from "components/pages/PageProductForm/PageProductForm";
import PageCart from "components/pages/PageCart/PageCart";
import PageOrders from "components/pages/PageOrders/PageOrders";
import PageOrder from "components/pages/PageOrder/PageOrder";
import PageProductImport from "components/pages/admin/PageProductImport/PageProductImport";
import { swaggerConfiguration } from "swagger";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainLayout>
            <Route exact path="/">
              <PageProducts />
            </Route>
            <Route
              exact
              path={["/admin/product-form/:id", "/admin/product-form"]}
            >
              <PageProductForm />
            </Route>
            <Route exact path="/cart">
              <PageCart />
            </Route>
            <Route exact path="/admin/orders">
              <PageOrders />
            </Route>
            <Route exact path="/admin/order/:id">
              <PageOrder />
            </Route>
            <Route exact path="/admin/products">
              <PageProductImport />
            </Route>
            <Route exact path="/api-docs">
              <SwaggerUI spec={swaggerConfiguration} />
            </Route>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
