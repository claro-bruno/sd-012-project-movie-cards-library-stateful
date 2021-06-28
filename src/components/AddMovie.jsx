import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* Requirito 06 */

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.stateSet = this.stateSet.bind(this);
  }

  stateSet() {
    const { onClick } = this.props;
    onClick();
  }

  render() {
    /* Requisito 7 */
    return (
      <div>
        <form data-testid="add-movie-form" />
      </div>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
