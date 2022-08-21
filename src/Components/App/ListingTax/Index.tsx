import { TaxListItem } from './TaxListItem';
import React from 'react'
import { Formik } from 'formik';
export interface ChildList{
  title: string,
  list: {
    name: string,
    checked: boolean
  }[]
}

const sampleData: ChildList[] = [
  {
    title: "Breaclet",
    list: [
      {
        "name": "Jasinthe Bracelet",
        "checked": true
      },
      {
        "name": "Jasinthe ",
        "checked": false
      }
    ]
   
  },
  {
    title: "",
    list : [
      {
        "name": "Jasinthe Bracelet",
        "checked": true
      },
      {
        "name": "Jasinthe Bracelet",
        "checked": false
      }
    ]
   
  },
]

const ListingTax = () => {
  console.log(sampleData)
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
          {
            sampleData.map((data) => {
              return (
                <>
                    <TaxListItem {...data} />
                </>
              )
            })
        }
      </div>
    </Formik>
  </>
  )
}

export default ListingTax