import React from 'react';
import FormAddMovie from './FormAddMovie';
import PropTypes from 'prop-types';

class AddTitle extends React.Component {
  render() {
    const {
      title,
      callBack
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
    )
  }
}

AddTitle.propTypes = {
  title: PropTypes.string,
  callBack: PropTypes.func,
};

FormAddMovie.defaultProps = {
  title: '',
  callBack: '',
};

export default AddTitle; 