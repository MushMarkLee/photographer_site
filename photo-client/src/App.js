import React, { Component } from 'react';
import Main from "./components/MainComponent";
import './App.css';
import BrowserRouter from "react-router-dom/BrowserRouter";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configerStore";


const store = ConfigureStore();

function App() {

  return (
    <div className="App">
        <Provider store={store}>
            <BrowserRouter >
                <div>
                    <Main />
                </div>
            </BrowserRouter>
        </Provider>

    </div>
  );
}

export default App;
