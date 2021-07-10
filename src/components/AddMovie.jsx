import React, { Component } from 'react';
import Input from './input';
import inputs from '../inputs';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onChangeInputTitle = this.onChangeTitle.bind(this);
    this.onChangeSubtitle = this.onChangeSubtitle.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeStoryline = this.onChangeStoryline.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
  }
  onChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  onChangeSubtitle(e) {
    this.setState({ subtitle: e.target.value });
  }

  onChangeStoryline(e) {
    this.setState({ soryline: e.target.value })
  }

  onChangeGenre(e) {
    this.setState({ genre: e.target.value })
  }

  render() {
    const { onClick } = this.props;
    const { storyline, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label>
          { inputs.map(({ dataTestidLabel, textLabel, dataTestid, type, key }) => (
            <Input
              dataTestidLabel={ dataTestidLabel }
              textLabel={ textLabel }
              dataTestid={ dataTestid }
              type={ type }
              value={ this.state[key] }
              onChange={ this.onChangeInput }
              key={ key }
            />
          ))}
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <textarea
              data-testid="storyline-input"
              id="storyline-input"
              value={ storyline }
              onChange={ this.onChangeStoryline }
            />
          </label>
          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero
            <select
              data-testid="genre-input"
              id="genre-input"
              value={ genre }
              onChange={ this.onChangeGenre }
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </label>
      </form>
    )
  }
}

export default AddMovie;
