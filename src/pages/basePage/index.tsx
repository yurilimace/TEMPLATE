import React,{useRef} from 'react'
import Input from 'src/components/Input'
import TextArea from 'src/components/TextArea'
import SelectComponent from 'src/components/Select'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

const BasePage = () => {
  const formRef =  useRef<FormHandles>(null)
  const handleSubmit = (data: { input: string }) =>{
    console.log(data)
    if(data.input === ''){
      formRef.current?.setFieldError('input','deu ruim')
      formRef.current?.setFieldError('textarea','deu ruim')
    }
  }

  return(
    <div>
      <Form ref={formRef} onSubmit={handleSubmit}>

        <TextArea name="textarea" label="textarea" className="w-50 mt-3 mb-3" linhas={2}  />
        <div className="d-flex w-100">
        <Input name="input" label="input" className="w-50" />
        <SelectComponent/>
        </div>
        <button type="submit" > click me </button>
      </Form>
    </div>
  )
}

export default BasePage
