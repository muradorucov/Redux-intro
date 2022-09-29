import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Table } from 'antd'
const Customers = () => {
  const dispatch = useDispatch()

  const add_customer = (e) => {
    dispatch({ type: 'add_customer', payload: e })
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
        <button onClick={() => add_customer(record)}>{'Add favorites'}</button>
      ),
    },
  ]

  const [customers, setCustomers] = useState([])
  useEffect(() => {
    axios
      .get('https://northwind.vercel.app/api/customers')
      .then((res) => setCustomers(res.data))
  }, [])
  return <Table dataSource={customers} columns={columns} />
}

export default Customers
