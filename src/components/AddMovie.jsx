import React from 'react';
import ImageMovie from './addMovieComponents/ImageMovie';
import RatingMovie from './addMovieComponents/RatingMovie';
import SinopseMovie from './addMovieComponents/SinopseMovie';
import SubtitleMovie from './addMovieComponents/SubtitleMovie';
import TitleMovie from './addMovieComponents/TitleMovie';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(target) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleMovie title={ title } onTitleChange={ this.handleChange } />
        <SubtitleMovie subtitle={ subtitle } onSubChange={ this.handleChange } />
        <ImageMovie imagePath={ imagePath } onImgChange={ this.handleChange } />
        <SinopseMovie storyline={ storyline } onSinChange={ this.handleChange } />
        <RatingMovie rating={ rating } onRatChange={ this.handleChange } />
      </form>

    );
  }
}

export default AddMovie;
