import Spinner from '../../ui/Spinner'
import CabinRow from './CabinRow'
import { useCabins } from './useCabin'
import Table from '../../ui/Table'
import Menus from '../../ui/Menus'
import { useSearchParams } from 'react-router-dom'
import { useMemo } from 'react'

function CabinTable() {
  const { isLoading, cabins } = useCabins()
  const [searchParams] = useSearchParams()

  // Filter
  const filterValue = searchParams.get('discount') || 'all'
  const filteredCabins = useMemo(() => {
    if (!cabins?.length) return []

    if (filterValue === 'all') return cabins

    if (filterValue === 'no-discount')
      return cabins.filter((cabin) => cabin.discount === 0)

    if (filterValue === 'with-discount')
      return cabins.filter((cabin) => cabin.discount > 0)

    return cabins
  }, [cabins, filterValue])

  // Sort
  const sortBy = searchParams.get('sortBy') || 'startDate-asc'
  const sortedCabins = useMemo(() => {
    const [field, direction] = sortBy.split('-')
    const modifier = direction === 'asc' ? 1 : -1
    const cloneFilteredCabins = [...filteredCabins]
    return cloneFilteredCabins.sort((a, b) => (a[field] - b[field]) * modifier)
  }, [sortBy, filteredCabins])

  if (isLoading) return <Spinner />

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  )
}

export default CabinTable
