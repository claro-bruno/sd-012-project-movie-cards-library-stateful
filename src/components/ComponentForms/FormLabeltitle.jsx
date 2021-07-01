import React from 'react';

class FormLabeltitle extends React.Component {
  render() {
    return (
      <label
        htmlFor="Título"
        data-testid="title-input-label"
      >
        Título
        <input
          id="Título"
          data-testid="title-input"
          type="text"
          name="title"
          onChange={ this.handlechenge }
        />
      </label>
    );
  }
}

export default FormLabeltitle;
