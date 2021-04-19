import Step3Table from './Step3Table';
import React from 'react';
import PropTypes from 'prop-types';




class Step3 extends React.Component {

  removeItem = (index) => {
    const data = [ ...this.props.data ];
    data.splice(index,1);
    this.props.setData(data);
  }

  render() {
    return (
      <>
        <Step3Table data={this.props.data} removeItem={this.removeItem} />
      </>
    )
  }
}

Step3.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired
}


export default Step3;