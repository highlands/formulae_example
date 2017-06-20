/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'admin' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AdministerForm, Api, Stores } from "formulae_react";
const { Form } = Api;
const { AdministerFormStore } = Stores;
require("../../../node_modules/formulae_react/lib/css/index.css");

// Just a thing to play with the form api
// FIXME: Remove this eventually
window.f = Form;

document.onreadystatechange = function() {
  var state = document.readyState;
  if (state == "interactive") {
    // nothing to do here lol
  } else if (state == "complete") {
    var adminElement = document.getElementById("administer-form");
    if (adminElement) {
      var formId = adminElement.getAttribute("data-form-id");
      ReactDOM.render(
        <Provider store={AdministerFormStore}>
          <AdministerForm formId={formId} />
        </Provider>,
        adminElement
      );
    }
  }
};