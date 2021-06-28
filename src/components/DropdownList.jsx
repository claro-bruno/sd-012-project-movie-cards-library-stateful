import React from 'react';
import PropTypes from 'prop-types';

class DropdownList extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="genre-input" htmlFor="genre">
        Gênero
        <select
          type="select"
          value={ value }
          onChange={ onChange }
          name="genre"
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

DropdownList.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DropdownList;
