// implement AddMovie component here
import React, { Component } from 'react';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    // this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
    this.state = {
      title: '',
      subtitle: '',
    };
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle } = this.state;
    return (
      <form
        data-testid="add-movie-form"
      >
        <AddMovieTitle
          title={ title }
          onChangeTitle={ this.handleChange }
        />
        <AddMovieSubtitle
          subtitle={ subtitle }
          onChangeSubtitle={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
