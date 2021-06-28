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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="" data-testid="title-input-label">
          Título
          <input data-testid="title-input" type="text" name="title" onChange={title} value={title}/>
        </label>
        <label htmlFor="" data-testid="subtitle-input-label">
          Subtítulo
          <input data-testid="subtitle-input" type="text" value={subtitle}/>
        </label>
        <label htmlFor="" data-testid="image-input-label">
          Imagem
          <input data-testid="image-input" type="text" value={imagePath}/>
        </label>
        <label htmlFor="" data-testid="storyline-input-label">
          Sinopse
          <textarea data-testid="storyline-input" type="text" value={storyline}/>
        </label>
        <label htmlFor="" data-testid="rating-input-label">
          Avaliação
          <input data-testid="rating-input" type="number" value={rating}/>
        </label>
        <label data-testid="genre-input-label">
        Gênero
          <select
            data-testid="genre-input"
            value={ genre }
            onChange={ genre }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
          </label>
      </form>
    )
  }
}



export default AddMovie;