import React, { Component } from 'react';
import Proptypes from 'prop-types';

class FilterGenre extends Component {
  render() {
    const {
      title,
      labelAtribute,
      valueSelect,
      onChangeSelect,
      selectAtribute,
      optionAtribute,
      id,
    } = this.props;
    return (
      <label htmlFor={ id } data-testid={ labelAtribute }>
        { title }
        <select
          value={ valueSelect }
          onChange={ onChangeSelect }
          data-testid={ selectAtribute }
        >
          <option
            data-testid={ optionAtribute }
            name="Todos"
            value=""
          >
            Todos
          </option>
          <option
            data-testid={ optionAtribute }
            name="Ação"
            value="action"
          >
            Ação
          </option>
          <option
            data-testid={ optionAtribute }
            name="Comédia"
            value="comedy"
          >
            Comédia
          </option>
          <option
            data-testid={ optionAtribute }
            name="Suspense"
            value="thriller"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

FilterGenre.propTypes = {
  title: Proptypes.string.isRequired,
  labelAtribute: Proptypes.string.isRequired,
  valueSelect: Proptypes.string.isRequired,
  onChangeSelect: Proptypes.func.isRequired,
  selectAtribute: Proptypes.string.isRequired,
  optionAtribute: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
};

export default FilterGenre;
