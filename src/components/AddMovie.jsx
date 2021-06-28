// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(){
    super()
    this.state = {
      subtitle: '',
      title: '',
      imagePath:'',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
  }

  render() {
    return (
      <form data-testid="add-movie-form" >
        <label data-testid="subtitle-input-label">subtítulo<input data-testid="subtitle-input" type="text"/></label>
        <label data-testid="title-input-label"
        >Titulo<input data-testid="title-input" type="text"/></label>
        <label data-testid="image-input-label" >caminho da imagem<input data-testid="image-input" type="text"/></label>
        <label data-testid="storyline-input-label" >sinopse <textarea data-testid="storyline-input" name="" id="" cols="30" rows="10"></textarea></label>
        <label data-testid="rating-input-label" >avaliação<input data-testid="rating-input" type="text"/></label>
        <label data-testid="genre-input-label" >gênero <select data-testid="genre-input" name="" id=""></select></label>
      </form>
    )
  }
};

export default AddMovie;