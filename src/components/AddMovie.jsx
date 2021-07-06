// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormPart1 from './FormPart1';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  onClickButton(elem) {
    elem.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    });
  }

  render() {
    return (
      <section>
        <form data-testid="add-movie-form">
          <FormPart1 state={ this.state } handleChange={ this.handleChange } />
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
