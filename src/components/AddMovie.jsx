import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  submitHandler(e) {
    e.preventDefault();
    return;
  }

  render() {
    const { onClick } = this.props;
    const _this = this;

    function onclickHandler(e) {
      e.preventDefault();
      onClick(_this.state);
      _this.setState({
        subtitle: "",
        title: "",
        imagePath: "",
        storyline: "",
        rating: 0,
        genre: "action",
      });
    }

    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">Título</label>
          <input onChange={ this.changeHandler } type="text" data-testid="title-input" value={ this.state.title } id="title" />

          <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
          <input onChange={ this.changeHandler } type="text" data-testid="subtitle-input" value={ this.state.subtitle } id="subtitle" />

          <label htmlFor="imagePath" data-testid="image-input-label">Imagem</label>
          <input onChange={ this.changeHandler } type="text" data-testid="image-input" value={ this.state.imagePath } id="imagePath" />

          <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse</label>
          <textarea data-testid="storyline-input" id="storyline">{ this.state.storyline }</textarea>

          <label htmlFor="rating" data-testid="rating-input-label">Avaliação</label>
          <input onChange={ this.changeHandler } type="number" data-testid="rating-input" value={ this.state.rating } id="rating" />

          <label htmlFor="genre" data-testid="genre-input-label">Gênero"</label>
          <select onChange={ this.changeHandler } value={ this.state.genre } data-testid="genre-input" id="genre">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>

          <button onClick={ onclickHandler } data-testid="send-button">Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
