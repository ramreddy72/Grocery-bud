import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import Form from './Form'
import Item from './Item'
import { nanoid } from 'nanoid'

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}
const defaultList = JSON.parse(localStorage.getItem('list') || '[]')

const App = () => {
  const [items, setItems] = useState(defaultList)

  const deleteItem = (name) => {
    const newItems = items.filter((item) => item.name !== name)
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('item deleted!')
  }
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('item added to the list')
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }

  return (
    <section className="section-center">
      <ToastContainer className="Toastify" position="top-center" />

      <Form addItem={addItem} />
      <div className="items">
        {items.length > 0
          ? items.map((item) => {
              return (
                <Item
                  key={nanoid()}
                  item={item}
                  deleteItem={deleteItem}
                  editItem={editItem}
                />
              )
            })
          : 'Items not available'}
      </div>
    </section>
  )
}

export default App
