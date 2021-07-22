import React, { Component } from 'react';
import TitleInput from './inputsAddMovie/TitleImput';
import SubtitleInput from './inputsAddMovie/SubtitleImput';
// import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
    // console.log(name);
    // console.log(value);
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInput value={ title } handleChange={ this.handleChange } />
        <SubtitleInput value={ subtitle } handleChange={ this.handleChange } />
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
