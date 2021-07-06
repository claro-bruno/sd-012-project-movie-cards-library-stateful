import React from 'react';
// import PropTypes from 'prop-types';

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

  handleComponent = (element) => {
    const { name, value } = element.target;
    this.setState({
      [name]: value,
    });
  }

  theTitle = (title) => {
    const doTheTitle = (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          value={ title }
          data-testid="title-input"
          onChange={ this.handleComponent }
        />
      </label>
    );
    return doTheTitle;
  }

  TheSubtitle = (subtitle) => {
    const doTheSubTitle = (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleComponent }
        />
      </label>
    );
    return doTheSubTitle;
  }

  theImage = (imagePath) => {
    const doTheImage = (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.handleComponent }
        />
      </label>
    );
    return doTheImage;
  }

  theTextArea = (storyline) => {
    const doTheTextArea = (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.handleComponent }
        />
      </label>
    );
    return doTheTextArea;
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        {this.theTitle(title)}
        {this.theSubtitle(subtitle)}
        {this.theImage(imagePath)}
        {this.theTextArea(storyline)}
      </form>
    );
  }
}

/* AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}; */

export default AddMovie;
