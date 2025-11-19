import React from 'react'

export const Alert = (props) => {
    const Capital = (text)=>{
        return text.charAt(0).toUpperCase() + text.slice(1)
    }
  return (
    props.alert && (
      <div className="position-fixed end-0" style={{top: '20px', right: '20px', width: '320px', maxWidth: '90vw', zIndex: 1060}}>
        <div className={`alert alert-${props.alert.type}`} role="alert">
          <strong>{Capital(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      </div>
    )
  )
}