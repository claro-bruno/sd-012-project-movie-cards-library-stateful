import React from 'react';
import PropTypes from 'prop-types';

const stateInitial = { };
export default class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = stateInitial;
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick(e) {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(stateInitial);
  }

  render() {
    return (
      <section>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input-label">
            Título
            <input data-testid="title-input" type="text" />
          </label>
              <label data-testid="subtitle-input-label" htmlFor="subtitle-input-label">
          Subtítulo
               <input
            data-testid="subtitle-input"
            type="text"
            />
          </label>
            <label data-testid="image-input-label" htmlFor="image-input-label">
          Imagem
          <input
            type="text"
            data-testid="image-input"
          />
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline-input-label">
            Sinopse
            <textarea
            data-testid="storyline-input"
            />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating-input-label">
          Avaliação
          <input
            type="number" data-testid="rating-input" defaultValue="0"
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input-label">
          Gênero
          <select data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
          <button 
          data-testid="send-button" 
          type="submit" onClick={ this.handleClick }
          >
          Adicionar filme
          </button>
        </label>
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
