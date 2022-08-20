import React from "react";
import { Field } from 'formik';
import ChildListItem from './ChildListItem';
export function TaxListItem() {
    return (
        <>
         <div className="tax-list-item">
          <div className='text-sm w-full inline-flex items-center gap-2 bg-gray-200 px-3 py-2'>
              <span>
                        <label className='flex items-center'>
                            <Field type="checkbox" name="toggle" />
                        </label>
              </span>
              <span>
                Parent Header
              </span>
          </div> 
            <ul className='px-10 py-4'>
                    <ChildListItem />
                    <ChildListItem     />
            </ul>  
        </div>
        </>
    );
}


    