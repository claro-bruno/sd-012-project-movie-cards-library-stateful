import React from 'react';
import Input from './Input';

class AddMovie2 extends React.Component {
  render() {
    const { storyline, change, rating, genre } = this.props;
    return (
      <div>
        <label
          data-testid="storyline-input-label"
          htmlFor="textarea-addmovie"
        >
          Sinopse
          <textarea
            id="textarea-addmovie"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ change }
            name="storyline"
          />
        </label>
        <Input
          type="number"
          labelText="Avaliação"
          dataTestidLabel="rating-input-label"
          value={ rating }
          dataTestidInput="rating-input"
          change={ change }
          name="rating"
        />
        <label
          data-testid="genre-input-label"
          htmlFor="select-addmovie"
        >
          Gênero
          <select
            id="select-addmovie"
            value={ genre }
            data-testid="genre-input"
            onChange={ change }
            name="genre"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

export default AddMovie2;
