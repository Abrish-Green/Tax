import { UserInput } from './UserInput';
import { Filter } from './Filter';
import React from 'react'
import {
   Formik,
   Form,
   Field,
} from 'formik';
 
interface AddTaxProps {
  name: string,
  rate: number
  
 }
const AddTax = () => {
  const initialValues: AddTaxProps = { name: '', rate: 0.05 };
  return (
      <>
      <div className="text-2xl p-2"> Add Tax</div>
      <div className="">
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
          >
          <Form>
           <UserInput />
           <Filter />
         </Form>
       </Formik>
      </div>
      </>
  )
}

export default AddTax