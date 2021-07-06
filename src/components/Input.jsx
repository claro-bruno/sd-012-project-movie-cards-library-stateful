import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <fieldset>
        <label data-testid="text-input-label" htmlFor="search-input">
          Inclui o texto:
          <input
            id="search-input"
            type="text"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </fieldset>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
Input.defaultProps = {
  value: '',
};

export default Input;
