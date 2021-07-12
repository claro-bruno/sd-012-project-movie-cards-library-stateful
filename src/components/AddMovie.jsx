// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types'

class AddMovie extends React.Component{
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    }
  }

}

AddMovie.prototype = {
  onClick: PropTypes.func
}

export default AddMovie;