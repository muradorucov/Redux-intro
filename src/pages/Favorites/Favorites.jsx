import React from 'react'
import { Table, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
const Favorites = () => {
  const favorite_customers = useSelector((state) => state)
  const dispatch = useDispatch()
  console.log(favorite_customers)

  const remove = (e) => {
    dispatch({ type: 'remove_customer', payload: e })
  }
  const empty = () => {
    console.log('data empted ')
    dispatch({ type: 'empty_customer' })
  }

  const columns = [
    {
      title: 'Company Name',
      dataIndex: 'companyName',
    },
    {
      title: 'Contact Name',
      dataIndex: 'contactName',
    },
    {
      title: 'Contact title',
      dataIndex: 'contactTitle',
    },
    {
      render: (text, record) => (
        <button onClick={() => remove(record)}>{'Delete '}</button>
      ),
    },
  ]
  return (
    <>
      <h1>Favorites customers</h1>
      <Button onClick={empty}>Empty Favorites</Button>
      <Table dataSource={favorite_customers} columns={columns} />
    </>
  )
}

export default Favorites
