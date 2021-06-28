import React from 'react';
import Input from './Input';
import AddMovie1 from './AddMovie1';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.setState = {
      title: '',
      subtitle: '',
      imagePath: '',
      rating: 0,
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    // const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovie1 />
        <label
          data-testid="storyline-input-label"
          htmlFor="textarea-addmovie"
        >
          Sinopse
          <textarea
            id="textarea-addmovie"
            // value={ storyline }
            data-testid="storyline-input"
            // onChange={ this.handleChange }
            name="storyline"
          />
        </label>
        <Input
          type="number"
          labelText="Avaliação"
          dataTestidLabel="rating-input-label"
          // value={ rating }
          dataTestidInput="rating-input"
          change={ this.handleChange }
          name="rating"
        />
        <label
          data-testid="genre-input-label"
          htmlFor="select-addmovie"
        >
          Gênero
          <select
            id="select-addmovie"
            // value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
            name="genre"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
