import React from 'react';

class Formlabelsubtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="subtitle"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          id="subtitle"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default Formlabelsubtitle;
