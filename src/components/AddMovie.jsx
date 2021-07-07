import React from 'react';

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
        <title changeHandler={ this.changeHandler } title={ state.title } />
        <subtitle changeHandler={ this.changeHandler } subtitle={ state.subtitle } />
        <imagePath changeHandler={ this.changeHandler } imagePath={ state.imagePath } />
        <storyline changeHandler={ this.changeHandler } Storyline={ state.Storyline } />
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
            <option value="comedy" data-testid="genre-option">Comedia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.onButtonClick }
          data-testid="send-button"
        >
          Adicionar Filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
