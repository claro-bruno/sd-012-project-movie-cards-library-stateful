import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.setState = this.setState.bind(this);
  }

  setState() {
    const { onClick } = this.props;
    onClick();
  }

  render() {
    return (
      <form data-testid="add-movie-form" />
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
