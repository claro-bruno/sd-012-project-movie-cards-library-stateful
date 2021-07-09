import React from 'react';
import PropType from 'prop-types';

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

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
    this.handleChangeImagePath = this.handleChangeImagePath.bind(this);
    this.handleChangeStoryline = this.handleChangeStoryline.bind(this);
    this.handleChangeRating = this.handleChangeRating.bind(this);
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
    this.handleClickSend = this.handleClickSend.bind(this);
  }

  handleChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleChangeSubtitle(e) {
    this.setState({
      subtitle: e.target.value,
    });
  }

  handleChangeImagePath(e) {
    this.setState({
      imagePath: e.target.value,
    });
  }

  handleChangeStoryline(e) {
    this.setState({
      storyline: e.target.value,
    });
  }

  handleChangeRating(e) {
    this.setState({
      rating: e.target.value,
    });
  }

  handleChangeGenre(e) {
    this.setState({
      genre: e.target.value,
    });
  }

  handleClickSend(currentState) {
    const { onClick } = this.props;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    return (onClick(currentState));
  }

  renderTitleInput() {
    const { title } = this.state;
    return (
      <label
        data-testid="title-input-label"
        htmlFor="add-title-input"
      >
        Título
        <input
          data-testid="title-input"
          type="text"
          id="add-title-input"
          value={ title }
          onChange={ this.handleChangeTitle }
        />
      </label>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;
    return (
      <label
        htmlFor="add-subtitle-input"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          id="add-subtitle-input"
          value={ subtitle }
          onChange={ this.handleChangeSubtitle }
        />
      </label>
    );
  }

  renderImagepathInput() {
    const { imagePath } = this.state;
    return (
      <label
        htmlFor="add-image-input"
        data-testid="image-input-label"
      >
        Imagem
        <input
          data-testid="image-input"
          type="text"
          id="add-image-input"
          value={ imagePath }
          onChange={ this.handleChangeImagePath }
        />
      </label>
    );
  }

  renderStorylineTextarea() {
    const { storyline } = this.state;
    return (
      <label
        htmlFor="storyline-textarea"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline-textarea"
          id="storyline-textarea"
          cols="30"
          rows="10"
          value={ storyline }
          onChange={ this.handleChangeStoryline }
        />
      </label>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <label
        htmlFor="rating-input"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          id="rating-input"
          value={ rating }
          onChange={ this.handleChangeRating }
        />
      </label>
    );
  }

  renderGenreSelect() {
    const { genre } = this.state;
    return (
      <label
        htmlFor="genre-select"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          data-testid="genre-input"
          name="genre-select"
          id="genre-select"
          value={ genre }
          onChange={ this.handleChangeGenre }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  renderSendButton(currentState) {
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ () => this.handleClickSend(currentState) }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form" onSubmit={ this.onSubmitForm }>
        {this.renderTitleInput()}
        {this.renderSubtitleInput()}
        {this.renderImagepathInput()}
        {this.renderStorylineTextarea()}
        {this.renderRatingInput()}
        {this.renderGenreSelect()}
        {this.renderSendButton(this.state)}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropType.func.isRequired,
};

export default AddMovie;
