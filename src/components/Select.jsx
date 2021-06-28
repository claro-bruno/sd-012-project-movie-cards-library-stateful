import React from 'react';

class Select extends React.Component {
  render() {
    const { state, onChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="select">
        Gênero
        <select
          data-testid="genre-input"
          value={ state.genre }
          name="genre"
          onChange={ onChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default Select;
