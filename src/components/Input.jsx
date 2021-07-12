import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { typeInput, textLabel, valueInput, onChangeInput } = this.props;
    return (
      <label htmlFor='titulo' data-testid='title-input-label'>
        { textLabel }
        <input 
          type={ typeInput }
          value={ valueInput }
          onChange={ onChangeInput }
          data-testid='title-input' />
      </label>
    )
  }
}

Input.propTypes = PropTypes.exact({
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
}).isRequired;

export default Input;
