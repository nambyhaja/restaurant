import React from 'react';

class Restaurant extends React.Component {
  render() {
    const { params } = this.props.match
    return (
      <div>
        <h1>Users</h1>
        <p>{params.id}</p>
      </div>
    )
  }
}
export default Restaurant