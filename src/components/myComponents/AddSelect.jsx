import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

class AddSelect extends React.Component {
  render() {
    const { state, handleChange } = this.props;
    return (
      <Select
        text="Gênero"
        labelID="genre-input-label"
        selectID="genre-input"
        value={ state.genre }
        name="genre"
        handleChange={ handleChange }
      >
        <option data-testid="genre-option" value="action">Ação</option>
        <option data-testid="genre-option" value="comedy">Comédia</option>
        <option data-testid="genre-option" value="thriller">Suspense</option>
      </Select>
    );
  }
}

AddSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.shape({
    genre: PropTypes.string,
  }).isRequired,
};

export default AddSelect;
