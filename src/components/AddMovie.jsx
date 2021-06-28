import React from 'react';
import Storyline from './Storyline';
import RatingInput from './RatingInput';
import GenreSelect from './GenreSelect';
import ImagePath from './ImagePath';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <TitleInput handleTitle={ this.handleChange } valueTitle={ title } />
          <SubtitleInput handleSub={ this.handleChange } valueSub={ subtitle } />
          <ImagePath handleImage={ this.handleChange } valueImagePath={ imagePath } />
          <Storyline handleArea={ this.handleChange } valueTextArea={ storyline } />
          <RatingInput handleNumber={ this.handleChange } valueNumber={ rating } />
          <GenreSelect handleSelect={ this.handleChange } valueSelected={ genre } />
        </form>
      </section>
    );
  }
}

export default AddMovie;
