import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible`} role="alert">
       <div>{props.alert.message}</div>
    </div>
  )
}
