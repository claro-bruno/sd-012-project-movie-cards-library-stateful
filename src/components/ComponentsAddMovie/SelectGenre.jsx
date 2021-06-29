import React from 'react';
import PropTypes from 'prop-types';
import Select from '../ComponentsCriados/Select';

class SelectGenre extends React.Component {
  render() {
    const optionsArray = [
      { value: 'action', text: 'Ação' },
      { value: 'comedy', text: 'Comédia' },
      { value: 'thriller', text: 'Suspense' },
    ];
    const { genre, handleChange } = this.props;
    return (
      <Select
        datatestid="genre-input"
        value={ genre }
        name="genre"
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
