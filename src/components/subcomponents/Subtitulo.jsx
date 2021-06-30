import React from 'react';

class Subtitulo extends React.Component {
  render() {
    return (
      <label data-testid="subtitle-input-label" htmlFor="search" className="col-12">
        Subtítulo
        <input
          className="form-control"
          type="text"
          placeholder="Insira um subtítulo"
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

export default Subtitulo;
