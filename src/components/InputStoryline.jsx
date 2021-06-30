import React from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends React.Component {
  render() {
    const {
      value,
      handleChange,
    } = this.props;

    return (
      <label htmlFor="blabla" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputStoryline;
