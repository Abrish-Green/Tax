import React from 'react';
import AddTax from './Components/App/AddTax/Index';
import ListingTax from './Components/App/ListingTax/Index';
import SearchBar from './Components/App/SearchBar/Index';
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './Services/Redux/store'
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
const useAppDispatch: () => AppDispatch = useDispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export interface AddTaxProps {
  name: string,
  rate: number,
  applied_to?: []
  
 }
function App() {
  const initialValues: AddTaxProps = { name: '', rate: 0.05, applied_to: [] };
  const TaxSchema = Yup.object().shape({
   name: Yup.string().required('Required')
 });
  return (
    <div className="App flex justify-center">
      <div className="wrapper flex-col border w-[60%] shadow-lg mt-5 rounded-lg">
        <Formik
          initialValues={initialValues}
          validationSchema={TaxSchema}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
        >
          {({ errors, touched }) => (
            
          <Form>
              <div className="top-part flex-col py-6 px-10 border-b">
                <AddTax error={errors} touched={touched} />
              </div>
              <div className="body px-10 flex-col py-5">
                <SearchBar />
                <ListingTax />
              </div>
              <div className='w-full flex justify-end py-5 px-5'>
                <button type="submit" className="px-4 text-lg bg-[#e05b1f] hover:bg-[#da6725] rounded-sm py-2 text-white">Apply tax to 2 item(s)</button>
              </div>
            </Form>
            )}
       </Formik>
      </div>
    </div>
    
  );
}

export default App;
