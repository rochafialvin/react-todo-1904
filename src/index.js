import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import App from "./App";

// Method render milik ReactDOM berfungsi untuk menyisipkan komponen App ke dalam tag div dengan id root di index html yang berada di dalam folder public
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
