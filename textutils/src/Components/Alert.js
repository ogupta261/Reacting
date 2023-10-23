import React from 'react'

export default function Alert(props) {
  return (
    <div className='container my-4' style={{ height: "50px"}}>
      {
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible`} role="alert">
          <div>{props.alert.message}</div>
        </div>
      }</div>
  )
}
