import React, { Component } from 'react';
import Input1 from './Input1';

class AddMovie extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: '',
  //     subtitle: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action',
  //   };
  // }

  // onChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // }

  render() {
    // const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input1 />
      </form>
    );
  }
}
export default AddMovie;
