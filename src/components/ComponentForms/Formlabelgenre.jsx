import React from 'react';

class Formlabelgenre extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="genre"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          id="genre"
          data-testid="genre-input"
          name="genre"
          value={ value }
          onChange={ onChange }
        >
          <option
            data-testid="genre-option"
            value="action"
          >
            Ação
          </option>
          <option
            data-testid="genre-option"
            value="comedy"
          >
            Comédia
          </option>
          <option
            data-testid="genre-option"
            value="thriller"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

export default Formlabelgenre;
