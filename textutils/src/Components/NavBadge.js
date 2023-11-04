import React from 'react'

export default function NavBadge(props) {
  return (
    <div class="nav-badge">
      <i className="fa-solid fa-pen-to-square p-2" style={{ color: props.primary, borderRadius: '100%', boxShadow: `0px 0px 2px 0px ${props.primary}` }} />
      <div class="content">
        <div class="text" style={{ color: props.primary }}>Whatsapp</div>
      </div>
    </div>
  )
}
