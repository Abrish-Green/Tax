import React from 'react'
import { Field } from 'formik';

interface ChildListProps{
  item: {
    name: string,
    checked: boolean
  }
}
const ChildListItem = ({ item }: ChildListProps) => {
  const [checked, setChecked] = React.useState(false)
  return (
    <li className='py-3'>
        <label htmlFor=''>
        <Field type="checkbox" name={ item.name} onClick={()=>{  setChecked(!checked)}} checked={checked} />
              <span className='ml-4'>{ item.name }</span>
          </label>
    </li>
  )
}

export default ChildListItem
