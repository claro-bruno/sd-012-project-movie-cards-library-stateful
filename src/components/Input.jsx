import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { titleLabel, name, value, type, onChange } = this.props;
    return (
      <label htmlFor={ name } data-testid={ ` ${name}-input-label` }>
        { titleLabel }
        <input
          name={ name }
          type={ type }
          value={ value }
          onChange={ onChange }
          data-testid={ ` ${name}-input` }
        />
      </label>
    );
  }
}

Input.propTypes = {
  titleLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.node,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  value: '',
  type: 'text',
};

export default Input;
