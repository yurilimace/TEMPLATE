import React,{InputHTMLAttributes, useRef} from 'react'
import {Form} from 'react-bootstrap'
import { useField } from '@unform/core'
import { useEffect } from 'react'

interface InputProps{
  name:string,
  label:string,
  className?:string,
  desabilitado?:boolean,

}


type Props =  InputHTMLAttributes<HTMLInputElement> & InputProps

const Input = ({name,label,className,desabilitado,...rest}:Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, registerField,error } = useField(name)

  useEffect(() => {
  registerField({
    name: fieldName,
    ref: inputRef,
    getValue: ref => {
      return ref.current.value
    },
    setValue: (ref, value) => {
      ref.current.value = value
    },
    clearValue: ref => {
      ref.current.value = ''
    },
  })
}, [fieldName, registerField])



  return(
    <>
      <Form.Label> {label} </Form.Label>
      <Form.Control  name={name} className={className} ref={inputRef} placeholder="ola teste" isInvalid={!!error} disabled={desabilitado} />
      {error && <Form.Text className="text-danger">
        {error}
    </Form.Text>}
    </>
  )
}

export default Input
