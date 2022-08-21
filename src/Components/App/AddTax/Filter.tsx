import React from "react";
import { Field } from 'formik';
export function Filter() {
    return (
        <>
            <div role="group" aria-labelledby="my-radio-group" className='flex-col w-full p-1 text-md text-slate-700'>
              <ul className='p-2 list-none'>
                <li className='p-1'>
                  <label className='flex items-center'>
                    <Field type="radio" name="applied_to" value="all" />
                      <span className='px-1'>Apply to all items in collection</span>
                  </label>
                </li>
                <li className='p-1'>
                   <label className='flex items-center'>
                    <Field type="radio" name="applied_to" value="some" />
                    <span className='px-1'>Apply to specific items</span>
                  </label>
                </li>
              </ul>
              
          </div>
        </>)
    
}
  