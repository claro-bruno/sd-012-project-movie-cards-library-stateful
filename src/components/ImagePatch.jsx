import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { label, name, type, value, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid="image-input-label"
          htmlFor="image-input-label"
        >
          {label}
          <input
            data-testid="image-input"
            name={ name }
            type={ type }
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

ImagePath.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default ImagePath;
