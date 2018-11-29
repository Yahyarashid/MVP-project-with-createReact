import React, { Component } from 'react';

const Listitem = (props) => (
  <div  className='component'>
  <p className="card-panel hoverable">
    { props.item.posts }
    </p><button onClick={ () => {props.delete(props.item.id)}}
    >delete</button>
  </div>
)





export default Listitem;