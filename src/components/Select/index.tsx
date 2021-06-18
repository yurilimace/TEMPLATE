import React from 'react'
import Select from 'react-select'
import {Form} from 'react-bootstrap'


const SelectComponent = () => {
  const options = [{value:1,label:'op1'},{value:2,label:'op2'}]

  const customControl = () => {
    return(
      <div>
    <Form.Control as="select" />
  </div>
    )
  }

  return(
    <div>
      <Select
        components={{Control:customControl}}
        options={options}


      />
    </div>
  )
}

export default SelectComponent
