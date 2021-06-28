
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super()
    
    this.nomefun = this.nomefun.bind(this)

  this.state = { 
    subtitle: '',
    title: '',
    imagePath: '',
    storyline: '',
    rating: 0,
    genre: 'action',
    }
  }
  
render () {
  const { onclick } = this.props 
  return (
    <div></div>
  ) 

}
}
export default AddMovie;