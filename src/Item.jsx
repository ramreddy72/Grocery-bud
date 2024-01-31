import React from 'react'
import { useState } from 'react'

const Item = ({ item, deleteItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button className="btn" onClick={() => deleteItem(item.name)}>
        Delete
      </button>
    </div>
  )
}

export default Item
