import React from 'react';
import Form from './Form';

const state = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = state;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <Form onChange={ this.handleClick } state={ this.state } />
    );
  }
}

export default AddMovie;
