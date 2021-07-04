// implement AddMovie component here ;)
import React from 'react';

const newState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super()
    
    this.state = newState;
    
    this.handleChange = this.handleChange.bind(this);
    // this.onClick = this.onClick.bind(this);
  }

  handleChange( e ) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  // onClick( e ) {
  //   const { name, value } = e.newState;
  //   this.setState({
  //     [name]: value,
  //   })
  // }
  
  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <label htmlFor="addTitle" data-testid="title-input-label">
            Título
            <input
              id="addTitle"
              type="text"
              data-testid="title-input"
              name='title'
              value={ title }
              onChange={ this.handleChange }
            />
          </label>
  
          <label htmlFor="addSubtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              id="addSubtitle"
              type="text"
              data-testid="subtitle-input"
              name="subtitle"
              value={ subtitle }
              onChange={ this.handleChange }
            />
          </label>
  
          <label htmlFor="addImagePath" data-testid="image-input-label">
            Imagem
            <input
              id="addImagePath"
              type="text"
              data-testid="image-input"
              name="imagePath"
              value={ imagePath }
              onChange={ this.handleChange }
            />
          </label>
  
          <label htmlFor="addStoryline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              id="addStoryline"
              type="text"
              data-testid="storyline-input"
              name="storyline"
              value={ storyline }
              onChange={ this.handleChange }
            />
          </label>
  
          <label htmlFor="addRating" data-testid="rating-input-label">
            Avaliação
            <input
              id="addRating"
              type="number"
              data-testid="rating-input"
              name="rating"
              value={ rating }
              onChange={ this.handleChange }
            />
          </label>
  
          <label htmlFor="addGenre" data-testid="genre-input-label">
            Gênero
            <select id="addGenre" type="number" data-testid="genre-input" name="genre" value={ genre } onChange={ this.handleChange }>
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
        <button
         type='submit'
         data-testid="send-button"
         onClick={ onClick }
         >
          Adicionar filme
        </button>
      </section>
    );
  }
}
export default AddMovie;
