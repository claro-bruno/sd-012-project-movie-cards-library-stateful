import React from 'react';
import PropTypes from 'prop-types';
import Input from '../ComponentsCriados/Input';

class InputStoryline extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <Input
        type="textarea"
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

InputStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputStoryline;
