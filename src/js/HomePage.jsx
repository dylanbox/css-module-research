import React from "react";
import ReactDOM from "react-dom";
import MarketingSectionComponent from "./MarketingSectionComponent.jsx";
import FormComponent from "./FormComponent.jsx";
import styles from '../scss/_home-page.scss';
import '../scss/normalize.scss';

class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.homePage}>
        <h1>Best home page</h1>
        <MarketingSectionComponent />
        <FormComponent />
      </div>
    )
  }
}

const DomContainer = document.getElementById("react-container");
ReactDOM.render(<HomePage />, DomContainer);
