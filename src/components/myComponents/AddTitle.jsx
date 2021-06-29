import React from 'react';
import PropTypes from 'prop-types';
import FormAddMovie from './FormAddMovie';

class AddTitle extends React.Component {
  render() {
    const {
      name,
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
        inputValue={ name }
        inputOnChange={ callBack }
      />
    );
  }
}

AddTitle.propTypes = {
  name: PropTypes.string,
  callBack: PropTypes.func,
};

AddTitle.defaultProps = {
  name: '',
  callBack: '',
};

export default AddTitle;
