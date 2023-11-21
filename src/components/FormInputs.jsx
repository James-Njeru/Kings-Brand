import React from "react";

function FormInputs(props) {
  const { label, onChange, errorMessage, ...inputProps } = props;

  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        className="peer my-2 outline outline-bgcolor outline-offset-4 rounded-sm"
      />
      <span className="hidden peer-focus:peer-invalid:flex text-[12px] text-red-500 p-[3px]">
        {errorMessage}
      </span>
    </div>
  );
}

export default FormInputs;
