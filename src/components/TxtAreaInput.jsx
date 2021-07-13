import React from 'react';
import PropTypes from 'prop-types';

class TxtAreaInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ value }
          onChange={ onChange }
          cols="30"
          rows="10"
        />
      </label>
    );
  }
}

TxtAreaInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TxtAreaInput;
