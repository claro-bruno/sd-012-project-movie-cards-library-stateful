import React from 'react';
import PropTypes from 'prop-types';

class TitleMovie extends React.Component {
  render() {
    const { title, onChange } = this.props;
    return (
      <label htmlFor="titulo" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          onChange={ onChange }
          value={ title }
        />
      </label>
    );
  }
}

export default TitleMovie;

TitleMovie.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;
