import React from "react";
import styles from '../scss/_form-component.scss';

class FormComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisabled: false
    }

    this.onChange = this._onChange.bind(this)
  }

  _onChange(event) {
    this.setState({
      isDisabled: event.currentTarget.checked
    })
  }

  render() {
    return (
      <div className={styles.FormComponent}>
        <h3>Sick Form Bro</h3>
        <form>
          <label>
            <input
              type='checkbox'
              onChange={this.onChange}
            />
            <span>Is the submit disabled?</span>
          </label>
          <br />
          <input />
          <button
            disabled={this.state.isDisabled}
            className={this.state.isDisabled ? styles.buttonIsDisabled : styles.button}
          >
            Submit this shit
          </button>

        </form>
      </div>
    )
  }
}

export default FormComponent
