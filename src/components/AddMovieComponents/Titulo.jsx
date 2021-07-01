import React from 'react';
import PropTypes from 'prop-types';

class Titulo extends React.Component {
  render() {
    const { name, value, onChange } = this.props;

    return (
      <label htmlFor="add-title" data-testid="title-input-label">
        Título
        <input
          id="add-title"
          data-testid="title-input"
          type="text"
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Titulo.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Titulo;
