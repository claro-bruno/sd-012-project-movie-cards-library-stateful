import React, { Component } from 'react';
// import Proptypes from 'prop-types';
import AddTitle from './newComponents/AddTitle';
import AddSubtitle from './newComponents/AddSubtitle';
import AddImg from './newComponents/AddImage';
import AddStoryline from './newComponents/AddStoryline';
import AddRating from './newComponents/AddRating';
import AddGenre from './newComponents/AddGenre';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleClick(onClick) {
    onClick(this.state);
    this.setState({
      title: '',
      subtitulo: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <AddTitle title={ title } handleChange={ this.handleChange } />
          <AddSubtitle subtitle={ subtitle } handleChange={ this.handleChange } />
          <AddImg imagePath={ imagePath } handleChange={ this.handleChange } />
          <AddStoryline storyline={ storyline } handleChange={ this.handleChange } />
          <AddRating rating={ rating } handleChange={ this.handleChange } />
          <AddGenre genre={ genre } handleChange={ this.handleChange } />
        </form>
      </div>
    );
  }
}

// AddMovie.propType = {
//   handleChange: Proptypes.func.isRequired,
// };

export default AddMovie;
