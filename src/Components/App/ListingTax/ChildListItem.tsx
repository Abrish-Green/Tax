import React from 'react'
import { Field } from 'formik';

const ChildListItem = () => {
  return (
    <li className='py-3'>
        <label htmlFor=''>
              <Field type="checkbox" name="toggle" />
              <span className='ml-4'>Jasinthe Bracelet</span>
          </label>
    </li>
  )
}

export default ChildListItem
