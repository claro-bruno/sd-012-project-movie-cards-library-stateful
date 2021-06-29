import React from 'react';
import PropTypes from 'prop-types';
import Select from '../ComponentsCriados/Select';

class SelectGenre extends React.Component {
  render() {
    const optionsArray = [
      ['Ação', 'action'],
      ['Comédia', 'comedy'],
      ['Suspense', 'thriller'],
    ];
    const { genre, handleChange } = this.props;
    return (
      <Select
        datatestid="genre-input"
        value={ genre }
        onChange={ handleChange }
        labelText="Gênero"
        datatestidLabel="genre-input-label"
        options={ optionsArray }
        datatestidOption="select-option"
      />
    );
  }
}

SelectGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectGenre;
