import React, { Component } from 'react';
import PropType, { func } from 'prop-types';

class AddMovie extends Component {
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
    this.alteraItem = this.alteraItem.bind(this);
  }

  alteraItem(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titleInput" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.alteraItem }
            name="title"
            id="titleInput"
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropType.func.isRequired,
};

export default AddMovie;
