import React from 'react'
import { useEffect } from 'react'
import { useRequest } from 'src/hooks/useRequest'
import CargoRepository from 'src/services/backend/CargoRepository'
import { ODataCargoResponse } from 'src/shared/interfaces/Cargo/types'

export default function TestPage() {

  const { data: cargos } = useRequest<ODataCargoResponse>(async () => await CargoRepository.listAll())

  useEffect(() => {
    console.log(cargos)
  }, [cargos])

  return (
    <h1>página de teste!</h1>
  )
}
