// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types'

const stateDefault = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyLine: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component{
  constructor() {
    super();
    
    this.state = stateDefault;

    this.handleChange = this.handleChange.bind(this);
  };

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.check : target.value;

    this.setState({
      [name]: name === 'rating' ? Number(value) : value
    });
  }

  render() {
    const { onClick } = this.props;
    return(
      <form data-testid="add-movie-form" >
        <label data-testid="title-input-label" >
          Título
          <input 
            data-testid="title-input"
            type="text" 
            name="title" 
            id="title"
            value={ this.state.title }
            onChange={ this.handleChange }
          />
        </label>

        <label data-testid="subtitle-input-label" >
          Subtítulo
          <input 
            
            type="text" 
            name="subtitle" 
            id="subtitle" 
            value={ this.state.subtitle }
            onChange={ this.handleChange }
            />
        </label>

        <label data-testid="image-input-label" >
          Imagem
          <input 
            data-testid="image-input"
            type="text"
            name="imagePath"
            id="imagePath"
            value={ this.state.imagePath }
            onChange={ this.handleChange }
          />
        </label>

        <label data-testid="storyline-input-label" >
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyLine"
            id="storyLine"
            cols="30"
            rows="10"
            value={ this.state.storyLine }
            onChange={ this.handleChange }
          ></textarea>
        </label>

        <label data-testid="rating-input-label" >
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            id="rating"
            value={ this.state.rating }
            onChange={ this.handleChange }
          />
        </label>

        <label data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            id="genre"
            value={ this.state.genre }
            onChange={ this.handleChange} 
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>

        <button data-testid="send-button" onClick={ onClick && this.setState(stateDefault) }>Adicionar Filme</button>
      </form>
    )
  }

}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default AddMovie;