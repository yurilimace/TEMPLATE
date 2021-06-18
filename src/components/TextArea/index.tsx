import React,{InputHTMLAttributes, useRef} from 'react'
import {Form} from 'react-bootstrap'
import { useField } from '@unform/core'
import { useEffect } from 'react'

interface TextAreaProps{
  name:string,
  label:string,
  className?:string,
  desabilitado?:boolean,
  linhas:number

}


type Props =  InputHTMLAttributes<HTMLInputElement> & TextAreaProps

const TextArea = ({name,label,className,desabilitado,linhas,...rest}:Props) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const { fieldName, defaultValue, registerField,error } = useField(name)

  useEffect(() => {
  registerField({
    name: fieldName,
    ref: textAreaRef,
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
    <div>
      <Form.Label> {label} </Form.Label>
      <Form.Control  as="textarea" name={name} className={className} ref={textAreaRef} placeholder="ola teste" isInvalid={!!error} disabled={desabilitado} rows={linhas}  />
      {error && <Form.Text className="text-danger">
        {error}
    </Form.Text>}
    </div>
  )
}

export default TextArea
