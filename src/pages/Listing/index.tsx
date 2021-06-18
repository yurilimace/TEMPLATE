import React from 'react'
// import { useEffect } from 'react'
import { useRequest } from 'src/hooks/useRequest'
import CargoRepository from 'src/services/backend/CargoRepository'
import { ODataCargoResponse } from 'src/shared/interfaces/Cargo/types'

export default function ListingPage() {

  const { data: cargos, loading } = useRequest<ODataCargoResponse>(async () => await CargoRepository.listAll())

  // useEffect(() => {
  //   console.log(cargos)
  // }, [cargos])

  return (
    loading ? <div>Carregando...</div> :
    <ul>
      {cargos && cargos.value.map((c, i) => (
        <li key={i}>{c.descricao}</li>
      ))}
    </ul>
  )
}
