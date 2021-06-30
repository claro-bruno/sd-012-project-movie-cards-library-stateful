import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const {
      datatestid,
      value,
      name,
      onChange,
      labelText,
      datatestidLabel,
    } = this.props;

    return (
      <section>
        <label htmlFor={ datatestid } data-testid={ datatestidLabel }>
          { labelText }
          <textarea
            id={ datatestid }
            data-testid={ datatestid }
            value={ value }
            name={ name }
            onChange={ onChange }
          />
        </label>
      </section>
    );
  }
}

TextArea.propTypes = {
  datatestid: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  datatestidLabel: PropTypes.string.isRequired,
}.isRequired;

export default TextArea;
