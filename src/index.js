import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App/App';
import reportWebVitals from './reportWebVitals';
import {LocalizationProvider} from "./context/LocalizationContext";
import {BrowserRouter} from "react-router-dom";
import {CarsProvider} from "./context/CarContext";
import {FormProvider} from "./context/FormContext";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <LocalizationProvider>
              <CarsProvider>
                 <FormProvider>
                     <App />
                 </FormProvider>
              </CarsProvider>
          </LocalizationProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
