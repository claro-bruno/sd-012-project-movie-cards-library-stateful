import React from 'react';

class Formlabelsubtitle extends React.Component {
  render() {
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
          onChange={ this.handlechenge }
        />
      </label>
    );
  }
}

export default Formlabelsubtitle;
