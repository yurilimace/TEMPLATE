import React,{useRef} from 'react'
import Input from 'src/components/Input'
import TextArea from 'src/components/TextArea'
import SelectComponent from 'src/components/Select'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import Option from 'react-select/src/components/Option'

type Opcao = {
  valor:number,
  faixa:string,
}

interface Options  {
  options:Array<Opcao>
}

const BasePage = () => {

  const options:Options = {options:[{valor:1,faixa:'op1'},{valor:2,faixa:'op2'}]}
  const formRef =  useRef<FormHandles>(null)
  const handleSubmit = (data:any) =>{
    console.log(data)
    if(data.input === ''){
      formRef.current?.setFieldError('input','deu ruim')
      formRef.current?.setFieldError('textarea','deu ruim')
    }
    if(data.selectInput  === ''){
      formRef.current?.setFieldError('selectInput','deu ruim')
    }
  }

  return(
    <div className="d-flex flex-column">
      <Form ref={formRef} onSubmit={handleSubmit}>
        <TextArea name="textarea" label="textarea" className="w-50 mt-3 mb-3" linhas={2}  />
        <Input name="input" label="input" className="w-50" />
        <SelectComponent name="selectInput" type={options.options} value="valor" label='faixa' />
        <button type="submit" > click me </button>
      </Form>
    </div>
  )
}

export default BasePage
