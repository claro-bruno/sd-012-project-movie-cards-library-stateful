import React from 'react';
import PropTypes from 'prop-types';

class InputSimple extends React.Component {
  render() {
    const { labelText, type, name, value, onChange } = this.props;
    const LabelDataTestid = `${name}-input-label`;
    const InputDataTestid = `${name}-input`;
    return (
      <label data-testid={ LabelDataTestid } htmlFor={ InputDataTestid }>
        {labelText}
        <input
          data-testid={ InputDataTestid }
          type={ type }
          name={ name }
          value={ value }
          id={ InputDataTestid }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputSimple.defaultProps = {
  type: 'text',
};

InputSimple.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSimple;
