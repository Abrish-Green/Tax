import React from 'react'
import { Field, Formik } from 'formik';

const ListingTax = () => {
  return (
    <>
      <Formik
      initialValues={{
        toggle: false,
        checked: [],
      }}
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <div className="listing-tax border mt-3">
        <div className="">
          <div className='text-sm w-full inline-flex items-center gap-2 bg-gray-200 px-3 py-2'>
              <span>
                <label><Field type="checkbox" name="toggle" /></label>
            </span>
            Parent Header</div>  
        </div>
        </div>
        </Formik>
      </>
  )
}

export default ListingTax