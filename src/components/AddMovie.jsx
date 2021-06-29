import React from 'react';
import InputsLabelsMovie from './InputsLabelsMovie';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.ratingChange = this.ratingChange.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.genreChange = this.genreChange.bind(this);
    this.storylineChange = this.storylineChange.bind(this);
  }

  titleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  ratingChange(e) {
    this.setState({
      rating: e.target.value,
    });
  }

  genreChange(e) {
    this.setState({
      genre: e.target.value,
    });
  }

  storylineChange(e) {
    this.setState({
      storyline: e.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre, onClick } = this.state;
      return (
      <form data-testid="add-movie-form">
        <InputsLabelsMovie />
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select data-testid="genre-input" onChange={ this.genreChange }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" type="submit" onClick={ onClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
