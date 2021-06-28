import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="" data-testid="title-input-label">
          Título
          <input data-testid="title-input" type="text" value={title}/>
        </label>
        <label htmlFor="" data-testid="subtitle-input-label">
          Subtítulo
          <input data-testid="subtitle-input" type="text" value={subtitle}/>
        </label>
        <label htmlFor="" data-testid="image-input-label">
          Imagem
          <input data-testid="image-input" type="text" value={imagePath}/>
        </label>
      </form>
    )
  }
}



export default AddMovie;