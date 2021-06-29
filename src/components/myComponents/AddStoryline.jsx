import React from 'react';
import PropTypes from 'prop-types';
import FormAddMovie from './FormAddMovie';

class AddStoryline extends React.Component {
  render() {
    const {
      title,
      callBack,
    } = this.props;
    return (
      <FormAddMovie
        htmlForId="form-title"
        inputName="title"
        dataLabelId="title-input-label"
        labelText="Título"
        dataFormId2="title-input"
        inputType="text"
        inputValue={ title }
        inputOnChange={ callBack }
      />
    );
  }
}

AddStoryline.propTypes = {
  title: PropTypes.string,
  callBack: PropTypes.func,
};

AddStoryline.defaultProps = {
  title: '',
  callBack: '',
};

export default AddStoryline;
