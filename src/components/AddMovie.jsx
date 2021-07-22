import React from 'react';
import { func } from 'prop-types';
import Button from './Button';
import InputImage from './InputImage';
import InputRating from './InputRating';
import InputSubtitle from './InputSubtitle';
import InputTitle from './InputTitle.jsx';
import Select from './Select';
import TextStoryline from './TextStoryline.jsx';

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
    this.updateTitle = this.updateTitle.bind(this);
    this.updateSubtitle = this.updateSubtitle.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.updateStoryline = this.updateStoryline.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.updateGenre = this.updateGenre.bind(this);
    this.resetButton = this.resetButton.bind(this);
  }

  updateTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  updateSubtitle(event) {
    this.setState({
      subtitle: event.target.value,
    });
  }

  updateImage(event) {
    this.setState({
      imagePath: event.target.value,
    });
  }

  updateStoryline(event) {
    this.setState({
      storyline: event.target.value,
    });
  }

  updateRating(event) {
    const number = Number(event.target.value);
    this.setState({
      rating: number,
    });
  }

  updateGenre(event) {
    this.setState({
      genre: event.target.value,
    });
  }

  resetButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle title={ title } updateTitle={ this.updateTitle } />
        <InputSubtitle subtitle={ subtitle } updateSubtitle={ this.updateSubtitle } />
        <InputImage imagePath={ imagePath } updateImage={ this.updateImage } />
        <TextStoryline storyline={ storyline } updateStoryline={ this.updateStoryline } />
        <InputRating rating={ rating } updateRating={ this.updateRating } />
        <Select genre={ genre } updateGenre={ this.updateGenre } />
        <Button onClick={ this.resetButton } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: func.isRequired,
};

export default AddMovie;
