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

  handleChange2(e) {
    this.setState({ [e.target.name]: e.target.value,
    });
  }

  render() {
    const { title, subtitle,
      imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form" action="">
        <Title title={ title } handleChange2={ this.handleChange2 } />

        <Subtitle subtitle={ subtitle } handleChange2={ this.handleChange2 } />

        <ImagePath imagePath={ imagePath } handleChange2={ this.handleChange2 } />

        <Storyline storyline={ storyline } handleChange2={ this.handleChange2 } />

        <RatingAdd rating={ rating } handleChange2={ this.handleChange2 } />

        <SelectAdd genre={ genre } handleChange2={ this.handleChange2 } />

        <ButtonAdd />
      </form>
    );
  }
}
export default AddMovie;
