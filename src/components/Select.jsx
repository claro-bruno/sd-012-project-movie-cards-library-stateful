import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <fieldset>
        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero
          <select
            data-testid="select-input"
            id="select-input"
            value={ value }
            onChange={ onChange }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </fieldset>
    );
  }
}

Select.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
Select.defaultProps = {
  value: '',
};

export default Select;
