import React from 'react';
import Input from './Input';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <form htmlFor="movie-form" data-testid="add-movie-form">
        <Input />
      </form>
    );
  }
}

export default AddMovie;
