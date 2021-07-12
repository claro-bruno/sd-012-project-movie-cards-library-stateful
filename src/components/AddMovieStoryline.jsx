import React from 'react';
import PropTypes from 'prop-types'

class AddMovieStoryline extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <textarea 
        data-testid="storyline-input" 
        name="storyLine" 
        id="storyLine" 
        cols="30" 
        rows="10"
        value={ value }
        onChange={ onChange }
    ></textarea>
    );
  }
}

AddMovieStoryline.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default AddMovieStoryline;
