import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      movies,
    };
  }

  render() {
    return (
      <div />
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes
    .arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
};
