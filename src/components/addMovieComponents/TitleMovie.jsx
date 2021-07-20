import React from 'react';
import PropTypes from 'prop-types';

class TitleMovie extends React.Component {
  render() {
    const { title, onTitleChange } = this.props;
    return (
      <label htmlFor="titulo" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          onChange={ onTitleChange }
          value={ title }
        />
      </label>
    );
  }
}

export default TitleMovie;

TitleMovie.propTypes = {
  title: PropTypes.string,
  onTitleChange: PropTypes.func,
}.isRequired;
