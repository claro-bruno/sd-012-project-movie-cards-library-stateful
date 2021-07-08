import React, { Component } from 'react';
import Title from './AddButtonComp/Title';
import Subtitle from './AddButtonComp/Subtitle';
import ImagePath from './AddButtonComp/ImagePath';
import Storyline from './AddButtonComp/Storyline';
import RatingAdd from './AddButtonComp/RatingAdd';
import SelectAdd from './AddButtonComp/SelectAdd';
import ButtonAdd from './AddButtonComp/ButtonAdd';

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

    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange2({ e }) {
    this.setState({ title: e.target.value,
      subtitle: e.target.value,
      imagePath: e.target.value,
      storyline: e.target.value,
      rating: e.target.value,
      genre: e.target.value,
    });
  }

  render() {
    const { title, subtitle,
      imagePath, storyline, rating, genre, handleChange2 } = this.state;

    return (
      <form data-testid="add-movie-form" action="">
        <Title title={ title } handleChange={ handleChange2 } />

        <Subtitle subtitle={ subtitle } handleChange={ handleChange2 } />

        <ImagePath imagePath={ imagePath } handleChange={ handleChange2 } />

        <Storyline storyline={ storyline } handleChange={ handleChange2 } />

        <RatingAdd rating={ rating } handleChange={ handleChange2 } />

        <SelectAdd genre={ genre } handleChange={ handleChange2 } />

        <ButtonAdd />
      </form>
    );
  }
}
export default AddMovie;
