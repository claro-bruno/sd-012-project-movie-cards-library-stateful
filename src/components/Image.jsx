import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { label, name, type, value, handleChange } = this.props;

    return (
      <section>
        <label htmlFor="image-input-label" data-testid="image-input-label">
          { label }
          <input
            type={ type }
            data-testid="image-input"
            name={ name }
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </section>
    );
  }
}

export default Image;

Image.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
