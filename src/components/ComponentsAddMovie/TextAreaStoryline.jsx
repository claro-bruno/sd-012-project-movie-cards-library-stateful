import React from 'react';
import PropTypes from 'prop-types';
import TextArea from '../ComponentsCriados/TextArea';

class TextAreaStoryline extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <TextArea
        datatestid="storyline-input"
        name="storyline"
        value={ storyline }
        onChange={ handleChange }
        labelText="Sinopse"
        datatestidLabel="storyline-input-label"
      />
    );
  }
}

TextAreaStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextAreaStoryline;
