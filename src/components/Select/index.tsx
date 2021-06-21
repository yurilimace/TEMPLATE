import React from 'react'


import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';
import { useField } from '@unform/core';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
}


const SelectComponent = () => {
  const options = [{value:1,label:'op1'},{value:2,label:'op2'}]


  const customStyles = {
    control:(styles:any) => ({
      ...styles,
      height: 'calc(1.5em + 0.75rem + 2px);',
      minHeight: '0rem',
    })
  }




  return(
    <>
      <ReactSelect
         styles={customStyles}
         options={options}
      />
    </>
  )
}

export default SelectComponent
