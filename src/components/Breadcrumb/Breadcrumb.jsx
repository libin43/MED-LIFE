import React from 'react'
import './Breadcrumb.css'

export const Breadcrumb = () => {
    const items = [{text:['appointments', 'tasks']}]
    return (
        <ul className="breadcrumb">
        {/* {items.map((item, index) => ( */}
          <li >
            {/* <a href={item.link}>{item.text}</a> */}
            <>Clinical</>
          </li>
          <li >
            {/* <a href={item.link}>{item.text}</a> */}
            <>Tasks</>
          </li>
          
        {/* ))} */}
      </ul>
      );
}
