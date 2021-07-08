import React, { Component } from 'react';
import InputTitle from './componentForAddMovie/InputTitle';
import InputSubtitle from './componentForAddMovie/InputSubtitle';
import InputImage from './componentForAddMovie/InputImage';
import InputTextarea from './componentForAddMovie/InputTextarea';
import InputNumber from './componentForAddMovie/InputNumber';
import SelectGenre from './componentForAddMovie/SelectGenre';
import Button from './componentForAddMovie/Button';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  updateState(e) {
    if (e.target.id === 'title') {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.id === 'subtitle') {
      this.setState({
        subtitle: e.target.value,
      });
    } else if (e.target.id === 'imagePath') {
      this.setState({
        imagePath: e.target.value,
      });
    } else if (e.target.id === 'sinopse') {
      this.setState({
        storyline: e.target.value,
      });
    } else if (e.target.id === 'rating') {
      const number = Number(e.target.value);
      this.setState({
        rating: number,
      });
    } else {
      this.setState({
        genre: e.target.value,
      });
    }
  }

  resetState() {
    const { onClick } = this.props;
    onClick(this.state);
    
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form
        data-testid="add-movie-form"
      >
        <InputTitle
          title={ title }
          updateState={ this.updateState }
        />
        <InputSubtitle
          subtitle={ subtitle }
          updateState={ this.updateState }
        />
        <InputImage
          imagePath={ imagePath }
          updateState={ this.updateState }
        />
        <InputTextarea
          storyline={ storyline }
          updateState={ this.updateState }
        />
        <InputNumber
          rating={ rating }
          updateState={ this.updateState }
        />
        <SelectGenre
          genre={ genre }
          updateState={ this.updateState }
        />
        <Button
          onClick={ this.resetState }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
