import React from 'react'

function Alert(props) {
  const capitalise=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    // 'props.alert &&' is used to not to pass null value to div section.if props.alert got null value the condition becomes false 
props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalise(props.alert.type)}</strong>:{props.alert.msg} 
</div>
  )
}

export default Alert