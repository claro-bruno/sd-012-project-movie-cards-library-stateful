import React from 'react';
import PropTypes from 'prop-types';
import AddMovieButton from './aux/AddMovieButton';
import AddMovieTitle from './AddMovieInput/AddMovieTitle';
import AddMovieSubtitle from './AddMovieInput/AddMovieSubtitle';
import AddMovieImage from './AddMovieInput/AddMovieImage';
import AddMovieTextarea from './AddMovieInput/AddMovieTextarea';
import AddMovieRating from './AddMovieInput/AddMovieRating';
import AddMovieSelect from './AddMovieSelect';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.callback = this.callback.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(e.target.value);
  }

  callback() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form
        data-testid="add-movie-form"
        className="form"
        onSubmit={ (e) => e.preventDefault() }
      >
        <AddMovieTitle title={ title } func={ this.handleChange } />
        <AddMovieSubtitle subtitle={ subtitle } func={ this.handleChange } />
        <AddMovieImage imagePath={ imagePath } func={ this.handleChange } />
        <AddMovieTextarea storyLine={ storyLine } func={ this.handleChange } />
        <AddMovieRating rating={ rating } func={ this.handleChange } />
        <AddMovieSelect genre={ genre } handleChange={ this.handleChange } />
        <AddMovieButton func={ this.callback } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
