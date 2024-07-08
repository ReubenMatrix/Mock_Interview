import React from 'react'

function AuthenticationHeader({title, content}) {
  return (
    <div className="text-center">
    <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
    <p className="text-muted-foreground">{content}</p>
  </div>

  )
}

export default AuthenticationHeader
