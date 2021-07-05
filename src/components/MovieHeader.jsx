import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class MovieHeader extends Component {
  render() {
    const { title, subtitle, handleChange } = this.props;
    return (
      <div>
        <Input
          inputLabel="Título"
          inputType="text"
          inputName="title"
          dataTestIdLabel="title-input-label"
          dataTestId="title-input"
          inputValue={ title }
          onChangeInput={ handleChange }
        />
        <Input
          inputLabel="Subtítulo"
          inputType="text"
          inputName="subtitle"
          dataTestIdLabel="subtitle-input-label"
          dataTestId="subtitle-input"
          inputValue={ subtitle }
          onChangeInput={ handleChange }
        />
      </div>
    );
  }
}

MovieHeader.propTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}).isRequired;

export default MovieHeader;
