import ReactDOM from "react-dom";

import App from "./App";

// Method render milik ReactDOM berfungsi untuk menyisipkan komponen App ke dalam tag div dengan id root di index html yang berada di dalam folder public
ReactDOM.render(<App />, document.getElementById("root"));
