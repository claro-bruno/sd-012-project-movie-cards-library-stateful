// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super()
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
    this.handlechenge = this.handlechenge.bind(this)
    this.addMovie = this.addMovie.bind(this)
  }

  handlechenge({ target }) {
    const { name, value } = target
    // essa função vai alterar a galera toda 

    this.setState({
      [name]: value,
    })
  }

  addMovie(props){
    window.alert('tudo em cima broo ?')
    /*this.handlechenge()
    getstate( )*/
  };

  render() {
    return (
      <form data-testid="add-movie-form" >
        <label data-testid="title-input-label"
        >Título<input data-testid="title-input" type="text" name="title" onChange={this.handlechenge} /></label>
        <label data-testid="subtitle-input-label">Subtítulo<input data-testid="subtitle-input" type="text" name="subtitle" onChange={this.handlechenge} /></label>
        <label data-testid="image-input-label" >Imagem<input data-testid="image-input" type="text" name="imagePath" onChange={this.handlechenge} /></label>
        <label data-testid="storyline-input-label" >Sinopse <textarea data-testid="storyline-input" name="storyline" id="" cols="30" rows="10" onChange={this.handlechenge}></textarea></label>
        <label data-testid="rating-input-label" >Avaliação<input data-testid="rating-input" type="number" name="rating" value={this.state.rating} onChange={this.handlechenge} /></label>
        <label data-testid="genre-input-label" >Gênero <select data-testid="genre-input" name="genre" id="" value={this.state.genre} onChange={this.handlechenge}>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select></label>
        <button data-testid="send-button" onClick={this.addMovie}>Adicionar filme</button>
      </form>
    )
  }
};

export default AddMovie;