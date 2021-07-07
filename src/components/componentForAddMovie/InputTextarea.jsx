import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTextarea extends Component {
  render() {
    const { storyline, updateState } = this.props;
    return (
      <div>
        <label
          htmlFor="sinopse"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            name="sinopse"
            id="sinopse"
            cols="30"
            rows="2"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ updateState }
          >
          </textarea>
        </label>
      </div>
    );
  }
}

InputTextarea.propTypes = {
  storyline: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
};

export default InputTextarea;
