import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      name,
      value,
      onChange,
    } = this.props;

    return (
      <label htmlFor="add-genre" data-testid="genre-input-label">
        Gênero
        <select
          id="add-genre"
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Select;
