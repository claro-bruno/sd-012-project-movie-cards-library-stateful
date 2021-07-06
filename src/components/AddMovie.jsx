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

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        {this.theTitle(title)}
        {this.theSubtitle(subtitle)}
      </form>
    );
  }
}

/* AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}; */

export default AddMovie;
