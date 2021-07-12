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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.check : target.value;

    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <form data-testid="add-movie-form" >
        
      </form>
    )
  }

}

AddMovie.prototype = {
  onClick: PropTypes.func
}

export default AddMovie;