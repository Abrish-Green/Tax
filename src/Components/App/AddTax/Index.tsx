import React from 'react'
import {
   Formik,
   FormikHelpers,
   FormikProps,
   Form,
   Field,
   FieldProps,
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
            <div className='grid grid-rows-1 grid-cols-4'>
                <Field id="name" name="name" className="border focus:outline-none col-span-3 mr-4 border-slate-500 p-2  rounded-md text-sm " placeholder="Tax Name" />
                <div className='inline-flex items-center border border-slate-500 rounded'>
                <Field id="name" type="number" value="5" name="name" className="border-none focus:outline-none w-3/4 relative col-span-1 border-slate-500 p-2 rounded-md " placeholder="rate" />
                  <span className="text-md w-1/4 text-gray-400 right-3 top-2">%</span>
                </div>
            </div>
           
            <div role="group" aria-labelledby="my-radio-group" className='flex-col w-full p-1 text-sm text-slate-700'>
              <ul className='p-2'>
                <li className='p-1'>
                  <label className='flex items-center'>
                    <Field type="radio" name="picked" value="One" />
                      <span className='px-1'>Apply to all items in collection</span>
                  </label>
                </li>
                <li className='p-1'>
                   <label className='flex items-center'>
                    <Field type="radio" name="picked" value="Two" />
                    <span className='px-1'>Apply to specific items</span>
                  </label>
                </li>
              </ul>
              
          </div>

         </Form>
       </Formik>
      </div>
      </>
  )
}

export default AddTax