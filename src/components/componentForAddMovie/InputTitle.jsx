import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTitle extends Component {
  render() {
    const {
      title,
      updateState,
    } = this.props;

    return (
      <div>
        <label
          htmlFor="Título"
          data-testid="title-input-label"
        >
          Título
          <input
            name="title"
            type="text"
            id="title"
            value={ title }
            data-testid="title-input"
            onChange={ updateState }
        />
        </label>
      </div>
    );
  }
}

InputTitle.propTypes = {
  title: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
};

export default InputTitle;
