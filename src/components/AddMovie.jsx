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
    const { title, subtitle } = this.state;
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
      </form>
    )
  }
}



export default AddMovie;