import React from 'react'
import catLogo from "../../static/images/catLogo.png";
export const Menu = () => {
  return (
    <div>
      <div className='flex justify-center items-center'  style={{height:'90vh'}}>
      <img src={catLogo} alt="catLogo" />
      </div>
    </div>
  )
}
