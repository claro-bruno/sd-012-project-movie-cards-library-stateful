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
            id="select-input"
            value={ value }
            onChange={ onChange }
          >
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
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
