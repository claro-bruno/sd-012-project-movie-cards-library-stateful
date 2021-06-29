import React from 'react';
import PropTypes from 'prop-types';
import Input from '../ComponentsCriados/Input';

class InputSubtitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <Input
        type="text"
        datatestid="subtitle-input"
        name="subtitle"
        value={ subtitle }
        onChange={ handleChange }
        labelText="Subtítulo"
        datatestidLabel="subtitle-input-label"
      />
    );
  }
}

InputSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputSubtitle;
