import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { titleLabel, name, value, type, onChange, testId } = this.props;
    return (
      <label htmlFor={ name } data-testid={ ` ${testId}-input-label` }>
        { titleLabel }
        <input
          name={ name }
          type={ type }
          value={ value }
          onChange={ onChange }
          data-testid={ ` ${testId}-input` }
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
  testId: PropTypes.string.isRequired,
};

Input.defaultProps = {
  value: '',
  type: 'text',
};

export default Input;
