import PropTypes from 'prop-types';
import React from 'react';

class Input extends React.Component {
  render() {
    const {
      dataIdLabel,
      inpId,
      dataId,
      inpName,
      inpValue,
      onChangeInp,
      inpType,
      inpContent,
    } = this.props;

    return (
      <label htmlFor={ inpId } data-testid={ dataIdLabel }>
        {inpContent}
        <input
          type={ inpType }
          id={ inpId }
          name={ inpName }
          value={ inpValue }
          onChange={ onChangeInp }
          data-testid={ dataId }
        />
      </label>
    );
  }
}

Input.propTypes = {
  dataIdLabel: PropTypes.string,
  inpId: PropTypes.string,
  dataId: PropTypes.string,
  inpName: PropTypes.string,
  inpValue: PropTypes.string,
  onChangeInp: PropTypes.func,
  inpType: PropTypes.string,
  inpContent: PropTypes.string,
};

Input.defaultProps = {
  dataIdLabel: PropTypes.string,
  inpId: PropTypes.string,
  dataId: PropTypes.string,
  inpName: PropTypes.string,
  inpValue: PropTypes.string,
  onChangeInp: PropTypes.func,
  inpType: PropTypes.string,
  inpContent: PropTypes.string,
};

export default Input;
