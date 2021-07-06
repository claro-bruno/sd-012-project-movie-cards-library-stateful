import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <fieldset>
        <label data-testid="checkbox-input" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input
            id="checkbox-input"
            type="checkbox"
            checked={ checked }
            onChange={ onChange }
          />
        </label>
      </fieldset>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;
