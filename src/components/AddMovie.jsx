import React, { Component } from 'react';
import InputTitle from './componentForAddMovie/InputTitle';
import InputSubtitle from './componentForAddMovie/InputSubtitle';
import InputImage from './componentForAddMovie/InputImage';

class AddMovie extends Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
    //  storyline: '',
    //  rating: 0,
    //  genre: 'action',
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
    }
  }

  render() {
    const { title, subtitle, imagePath } = this.state;

    return (
      <form
        action=""
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
      </form>
    );
  }
}

export default AddMovie;
