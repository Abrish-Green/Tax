import { UserInput } from './UserInput';
import { Filter } from './Filter';
import React from 'react'

const AddTax = ({ error, touched }: { error: any, touched: any }) => {
  console.log(error)
  return (
      <>
      <div className="text-2xl p-2"> Add Tax</div>
      <div className="">
        <UserInput err={error} touched={ touched } />
           <Filter />
      </div>
      
      </>
  )
}

export default AddTax