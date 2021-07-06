import React from 'react';


class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    }

    this.addTitle = this.addTitle.bind(this);
    this.addSubtitle = this.addSubtitle.bind(this);
    this.addImage= this.addImage.bind(this);
    this.addStoryline= this.addStoryline.bind(this);
    this.addRating= this.addRating.bind(this);
    this.addGenre= this.addGenre.bind(this);
    this.submitNewMovie= this.submitNewMovie.bind(this);
  }

  addTitle(e) {
    this.setState({ title: e.target.value });
  }

  addSubtitle(e) {
    this.setState({ subtitle: e.target.value });
  }

  addImage(e) {
    this.setState({ imagePath: e.target.value });
  }
  
  addStoryline(e) {
    this.setState({ storyline: e.target.value });
  }
  
  addRating(e) {
    this.setState({ rating: e.target.value });
  }
  
  addGenre(e) {
    this.setState({ genre: e.target.value });
  }
  
  submitNewMovie(state) {
    console.log(state);
    return(
      this.setState({
        title: '',
        subtitle: '',
        storyline: '',
        rating: 0,
        imagePath: '',
        genre: 'action',
      })
    );
  }

  render() {
    const {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título
          <input
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ this.addTitle }
            />
        </label>
        <label data-testid="subtitle-input-label">Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ this.addSubtitle }
            />
        </label>
        <label data-testid="image-input-label">Imagem
          <input
            data-testid="image-input"
            type="text"
            value={ imagePath }
            onChange={ this.addImage }
            />
        </label>
        <label data-testid="storyline-input-label">Sinopse
          <textarea
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.addStoryline }
            />
        </label>
        <label data-testid="rating-input-label">Avaliação
          <input
            data-testid="rating-input"
            type="number"
            step=".1"
            value={ rating }
            onChange={ this.addRating }
            />
        </label>
        <label data-testid="genre-input-label">Gênero
          <select
            data-testid="genre-input"
            value={ genre }
            onChange={ this.addGenre }
            >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={ this.submitNewMovie }>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;