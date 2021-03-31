import React from 'react';
import '../Styles/SidebarOption/SidebarOption.css';

const SidebarOption = ({active, text, Icon}) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`} >
      <Icon/>
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption;
