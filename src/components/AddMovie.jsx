import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';

const InitialState = {
  title: '',
  subtitle: '',
  storyline: '',
  genre: 'action',
  imagePath: '',
  rating: 0,
};
class AddMovie extends React.Component {
  constructor() {
    super();

    this.changeHandler = this.changeHandler.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);

    this.state = InitialState;
  }

  onButtonClick() {
    const { onClick } = this.props;
    onClick({ ...this.state });
    this.setState(InitialState);
  }

  changeHandler(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { state } = this;
    return (
      <form data-testid="add-movie-form">
        <Title changeHandler={ this.changeHandler } title={ state.title } />
        <Subtitle changeHandler={ this.changeHandler } subtitle={ state.subtitle } />
        <ImagePath changeHandler={ this.changeHandler } imagePath={ state.imagePath } />
        <Storyline changeHandler={ this.changeHandler } Storyline={ state.Storyline } />
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            id="rating"
            name="rating"
            type="number"
            value={ state.rating }
            onChange={ this.changeHandler }
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre"
            value={ state.genre }
            onChange={ this.changeHandler }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.onButtonClick }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
