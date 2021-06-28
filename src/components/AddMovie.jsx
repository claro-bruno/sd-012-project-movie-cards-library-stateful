import React, { Component } from 'react';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';

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
  }

handle = ({ target }) => {
  const { name, value } = target;
  this.setState({
    [name]: value,
  });
}

render() {
  const { onClick } = this.props;
  const { title, subtitle } = this.state;
  return (
    <div>
      <form data-testid="add-movie-form">
        <AddMovieTitle handle={ this.handle } title={ title } />
        <AddMovieSubtitle handle={ this.handle } title={ subtitle } />
      </form>
    </div>
  );
}
}

export default AddMovie;
