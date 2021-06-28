import React from 'react';
import Input from './Input';

class AddMovie extends React.Component {
  render() {
    // const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Input
          dataTestidLabel="title-input-label"
          htmlFor="text-addmovie"
          labelText="Título"
          id="text-addmovie"
          type="text"
          name="title"
          dataTestidInput="title-input"
        />
      </form>
    );
  }
}

export default AddMovie;
