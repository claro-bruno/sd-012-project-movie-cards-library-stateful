import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      image: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitChange = this.submitChange.bind(this);
  }

  handleStateChange(evt) {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  }

  submitChange() {
    const { onClick } = this.props;
    const { state } = this;
    onClick(state);
    this.setState({
      subtitle: '',
      title: '',
      image: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, image, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <input
          name="title"
          label="Título"
          onChange={ this.handleChange }
          value={ title }
        />

        <input
          name="subtitle"
          label="Subtítulo"
          onChange={ this.handleChange }
          value={ subtitle }
        />

        <input
          name="image"
          label="Imagem"
          onChange={ this.handleChange }
          value={ image }
        />

        <input
          name="storyline"
          label="Sinopse"
          onChange={ this.handleChange }
          value={ storyline }
          type="textarea"
        />

        <input
          name="rating"
          label="Avaliação"
          onChange={ this.handleChange }
          value={ rating }
        />

        <button type="submit" data-testid="send-button" onClick={ this.handleChange }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
