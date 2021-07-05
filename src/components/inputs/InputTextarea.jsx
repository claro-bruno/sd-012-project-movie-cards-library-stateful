import React from 'react';
import PropTypes from 'prop-types';

class InputTextarea extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="addStoryline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="addStoryline"
          type="text"
          data-testid="storyline-input"
          name="storyline"
          value={ value }
          onChange={ onChange }
          className="form-control"
        />
      </label>
    );
  }
}

InputTextarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTextarea;
