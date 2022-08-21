import React from "react";
import { Field } from 'formik';
import ChildListItem from './ChildListItem';
import { ChildList } from './Index';
export function TaxListItem({title, list}:ChildList) {
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
                { title }
              </span>
          </div> 
                <ul className='px-10 py-4'>
                    {
                        list && list.map((item) => {
                            return (
                                <>
                                    <ChildListItem item={item} />
                                </>
                                )
                        })
                    }
            </ul>  
        </div>
        </>
    );
}


    