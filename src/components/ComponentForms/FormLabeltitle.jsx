import React from 'react';
import PropTypes from 'prop-types';

class FormLabeltitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="Título"
        data-testid="title-input-label"
      >
        Título
        <input
          id="Título"
          data-testid="title-input"
          type="text"
          name="title"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

FormLabeltitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormLabeltitle;
