import React from 'react'

export default function Alert(props) {
  return (
    <div className='my-4 text-center w-100' style={{ height: "50px" }} >
      <div className='justify-content-center' style={{ width: 'fit-content' }}>
        {
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible`} role="alert" style={{ backgroundColor: props.primary, color: props.secondary }}>
          <div>{props.alert.message}</div>
        </div>
      }
      </div>
    </div>
  )
}
