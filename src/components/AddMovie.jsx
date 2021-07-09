import React from 'react';

class AddMovie extends React.Component {
  render() {
    const { subtitle, title, imagePath,
       storyline, rating, genre} = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input data-testid="title-input" value={ title } onChange={ title } />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input data-testid="subtitle-input" onChange={ subtitle } />
        </label>
      </form>
    );
  }
}

export default AddMovie;
