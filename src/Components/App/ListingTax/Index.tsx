import { TaxListItem } from './TaxListItem';
import React from 'react'
import { Formik } from 'formik';
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
      <div className="listing-tax mt-3">
          <TaxListItem />
          <TaxListItem     />
      </div>
    </Formik>
  </>
  )
}

export default ListingTax