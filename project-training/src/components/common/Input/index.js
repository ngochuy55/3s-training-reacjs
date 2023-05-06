import React from "react"

export function InputField(props) {

  const className = ("block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6")
  return (
    <React.Fragment>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          {props.label}
        </label>
        <div className="mt-2">
          <input
            required={props.required}
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            className={className + " " + props.className}
            value={props.value}
            name={props.name}
            onChange={props.onChange}
            onClick={props.onClick}
          />
        </div>
      </div>
    </React.Fragment>
  )
}