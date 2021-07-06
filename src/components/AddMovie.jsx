import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './formComponents/InputTitle';
import InputSubtitle from './formComponents/InputSubtitle';
import InputImage from './formComponents/InputImage';

const stateInitial = {};
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
    const { title, subtitle, imagePath } = this.props;
    return (
      <section>
        <form data-testid="add-movie-form">
          <InputTitle value={ title } />
          <InputSubtitle value={ subtitle } />
          <InputImage value={ imagePath } />
          <label data-testid="storyline-input-label" htmlFor="storyline-input-label">
            Sinopse
            <textarea
              data-testid="storyline-input"
            />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating-input-label">
            Avaliação
            <input
              type="number"
              data-testid="rating-input"
              defaultValue="0"
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
              type="submit"
              onClick={ this.handleClick }
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
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,

};
