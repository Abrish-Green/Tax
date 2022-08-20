import React from "react";
import { Field } from 'formik';
export function UserInput() {
    return (
        <>
            <div className = 'grid grid-rows-1 grid-cols-4 w-3/4 px-2' >
                <Field id="name" name="name" className="border focus:outline-none col-span-3 mr-2 border-slate-500 p-1.5  rounded-md text-sm " placeholder="Tax Name" />
                <div className='inline-flex items-center border border-slate-500 rounded w-3/4'>
                <Field id="name" type="number" value="5" name="name" className="border-none focus:outline-none w-3/4 relative col-span-1 border-slate-500 p-1.5 rounded-md " placeholder="rate" />
                  <span className="text-md w-1/4 text-gray-400 right-3 top-2">%</span>
                </div>
            </div>
        </>
    )
}
  