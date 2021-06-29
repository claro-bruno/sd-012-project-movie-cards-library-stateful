import React from 'react';
import PropTypes from 'prop-types';
import FormAddMovie from './FormAddMovie';

class AddSubtitle extends React.Component {
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

AddSubtitle.propTypes = {
  title: PropTypes.string,
  callBack: PropTypes.func,
};

AddSubtitle.defaultProps = {
  title: '',
  callBack: '',
};

export default AddSubtitle;
