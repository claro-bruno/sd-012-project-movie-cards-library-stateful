import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, spanText, value, handler } = this.props;
    let type = 'text';
    let nome = name;
    // name === nome ? nome = 'imagePath' : nome = name;
    if (nome === 'image') nome = 'imagePath';
    if (nome === 'rating') type = 'number';
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ `${name}-input` }>
        <span className="mr15">{spanText}</span>
        <input
          name={ nome }
          data-testid={ `${name}-input` }
          value={ value }
          onChange={ handler }
          type={ type }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  spanText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default Input;
