import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from '../generics/Select';
import { genresAddMovies } from '../../data';

class SelectGenres extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <Select
        id="add-gender"
        dataTestidLabel="genre-input-label"
        dataTestidSelect="genre-input"
        textLabel="Gênero"
        name="genre"
        onChange={ onChange }
        value={ value }
        options={ genresAddMovies }
        dataTestidOption="genre-option"
      />
    );
  }
}

SelectGenres.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectGenres;
