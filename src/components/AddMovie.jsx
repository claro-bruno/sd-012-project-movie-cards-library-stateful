// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

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
  }

  handleClick() {
    console.log(this.state);
  }

  render() {
    const { onclick } = this.props;
    return (
      <form>
        <li>{ onclick }</li>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func.isRequired,
};

export default AddMovie;
