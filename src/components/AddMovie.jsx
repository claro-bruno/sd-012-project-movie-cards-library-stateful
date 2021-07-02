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
    };
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-title" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="input-title"
            data-testid="title-input"
            value={}
            onChange={}
          />
        </label>
        <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
           Subtítulo
           <input
           type="text"
           id="input-subtitle"
           data-testid="subtitle-input"
           value={}
           onChange={}
            />
        </label>
        <label htmlFor="input-img" data-testid="image-input-label" >
            Imagem
            <input
            type="text"
            id="input-img"
            data-testid="image-input"
            value={}
            onChange={}
             />
        </label>
        <label htmlFor="input-sinopse" data-testid="storyline-input-label" >
             Sinopse 
             <textarea
             id="input-sinopse"
             data-testid="storyline-input"
             onChange={}
             >{''}</textarea>
        </label>
        <label htmlFor="input-rating" data-testid="rating-input-label" >
             Avaliação
             <input
             type="number"
             id="input-rating"
             data-testid="rating-input"
             value={} 
             onChange={}
             />
        </label>
        <label htmlFor="select-genre" data-testid="genre-input-label" >
             Gênero
             <select 
            id="select-genre" 
            data-testid="genre-input"
            value={}
            onChange={}
            >
             <option data-testid="genre-option" value="action">Ação</option>
             <option data-testid="genre-option" value="comedy">Comédia</option>
             <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
        </label>
        <button
        data-testid="send-button"
        onClick={}
        >Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;