import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    //    const { onClick } = this.props;

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="addTitle">
          Título
          <input
            type="text"
            name="addTitle"
            data-testid="title-input"
            value={ title }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="Subtítulo" data-testid="subtitle-input-label">
          <input
            data-testid="subtitle-input"
            type="text"
            id="Subtítulo"
            value={ subtitle }
            onChange={ handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
