import React from "react";
import styles from '../scss/_marketing-section-component.scss';

class MarketingSectionComponent extends React.Component {
  render() {
    return (
      <div className={styles.MarketingSectionComponent}>
        <h3 className={styles.headline}>Look at my neat section</h3>
        <p className={styles.marketingText + ' ' + styles.pl50}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }
}

export default MarketingSectionComponent
