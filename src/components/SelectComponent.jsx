import React from 'react';
import PropTypes from 'prop-types';

class SelectComponent extends React.Component {
  render() {
    const { idComponent, valueComponent, onChangeComponent } = this.props;
    return (
      <label htmlFor={ idComponent } data-testid="select-input-label">
        Filtrar por gênero

        <select
          id={ idComponent }
          data-testid="select-input"
          value={ valueComponent }
          onChange={ onChangeComponent }
        >

          <option value="" data-testid="select-option">
            Todos
          </option>
          <option value="action" data-testid="select-option">
            Ação
          </option>
          <option value="comedy" data-testid="select-option">
            Comédia
          </option>
          <option value="thriller" data-testid="select-option">
            Suspense
          </option>

        </select>

      </label>
    );
  }
}

SelectComponent.propTypes = {
  idComponent: PropTypes.string.isRequired,
  valueComponent: PropTypes.func.isRequired,
  onChangeComponent: PropTypes.func.isRequired,
};

export default SelectComponent;
