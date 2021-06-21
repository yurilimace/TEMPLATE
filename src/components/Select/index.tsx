import React, { useRef, useEffect,useState } from 'react';
import {Form} from 'react-bootstrap'
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';
import { useField } from '@unform/core';



interface Props extends SelectProps<OptionTypeBase> {
  name: string;
  value?:any;
  label?:string;
  type?:any;
}



const SelectComponent =({name,type,value,label,...rest}:Props) => {
  const selectRef = useRef(null)
  const options = [{value:1,label:'op1'},{value:2,label:'op2'}]
  const [selectOptions,setSelectOptions] = useState<Array<any>>([])
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const customStyles = {
    control:(styles:any) => ({
      ...styles,
      height: 'calc(1.5em + 0.75rem + 2px);',
      minHeight: '0rem',
    })
  }

  const errorStyles = {
    control:(styles:any) => ({
      ...styles,
      borderColor:"red",

    })
  }





 function mountOptionsSelct(value,label){
    const buildedOptions:Array<any> =[]

    type.map(o => {
      const optionObject:any = {value:o?.[value],label:o?.[label]}
      buildedOptions.push(optionObject)
    })
    setSelectOptions(buildedOptions)
 }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state?.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);


  useEffect(()=>{
  mountOptionsSelct(value,label)

  },[])

  return(
    <>
      <ReactSelect
         ref={selectRef}
         styles={error ? errorStyles : customStyles}
         options={options}
         {...rest}
      />
     {error && <Form.Text className="text-danger">
        {error}
    </Form.Text>}
    </>
  )
}

export default SelectComponent
