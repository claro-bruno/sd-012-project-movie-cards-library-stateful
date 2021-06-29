import React from 'react';
import PropTypes from 'prop-types';
import FormAddMovie from './FormAddMovie';

class AddStoryline extends React.Component {
  render() {
    const {
      name,
      callBack,
    } = this.props;
    return (
      <FormAddMovie
        htmlForId="form-storyline"
        inputName="storyline"
        dataLabelId="storyline-input-label"
        labelText="Sinopse"
        dataFormId2="storyline-input"
        inputType="text"
        inputValue={ name }
        inputOnChange={ callBack }
      />
    );
  }
}

AddStoryline.propTypes = {
  name: PropTypes.string,
  callBack: PropTypes.func,
};

AddStoryline.defaultProps = {
  name: '',
  callBack: '',
};

export default AddStoryline;
