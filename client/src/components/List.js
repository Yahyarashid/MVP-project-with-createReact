import React, { Component } from 'react';
import Listitem from './Listitem.js';

const List = (props) => (
  <div>
    <h4 className='publish'>Your Publishments </h4>
    { props.items.map(item => <Listitem delete ={props.delete} item={item}/>)}
  </div>
  
  
)

export default List;