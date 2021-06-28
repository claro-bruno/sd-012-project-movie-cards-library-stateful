import React from 'react';

class AddMovie extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       subtitle: '',
//       title: '',
//       imagePath: '',
//       storyline: '',
//       rating: 0,
//       genre: 'action',
//     };

  //     this.handleChange = this.handleChange.bind(this);
  //     // this.handleSubmit = this.handleSubmit.bind(this);
  //   }

  //   handleChange({ target }) {
  //     const { name, value } = target;
  //     this.setState({
  //       [name]: value,
  //     });
  //   }

  renderTitle() {
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          id="title-input"
        //   value={ title }
        //   onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSubtitle() {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          data-testid="subtitle-input"
          id="subtitle-input"
          // value={ subtitle }
          // onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderImage() {
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          data-testid="image-input"
          id="image-input"
        />
      </label>
    );
  }

  renderStoryline() {
    return (
      <label data-testid="storyline-input-label" htmlFor="textarea-input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          id="textarea-input"
        />
      </label>
    );
  }

  renderRating() {
    return (
      <label data-testid="rating-input-label" htmlFor="number-input">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          id="number-input"
          defaultValue="0"
          // value={ rating }
          // onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    // const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.renderTitle() }
        { this.renderSubtitle() }
        { this.renderImage() }
        { this.renderStoryline() }
        { this.renderRating() }
      </form>
    );
  }
}

export default AddMovie;
