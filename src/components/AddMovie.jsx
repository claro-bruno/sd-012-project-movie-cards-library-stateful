// implement AddMovie component here
import React from 'react';
import Input from './Input';

class AddMovie extends React.Component {
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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { handleChange } = this;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const {
      onClick
    } = this.props;

    return (
      <form data-testid="add-movie-form">
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </form>
    );
  }
}

export default AddMovie;
