import styled from 'styled-components'
import { useRecentBookings } from './useRecentBookings'
import { useRecentStays } from './useRecentStays'
import { useCabins } from '../cabins/useCabin'
import Spinner from '../../ui/Spinner'
import Stats from './Stats'
import SalesChart from './SalesChart'
import DurationChart from './DurationChart'

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`

function DashboardLayout() {
  const { bookings, isLoading } = useRecentBookings()
  const {
    stays,
    confirmedStays,
    numDays,
    isLoading: isStaysLoading,
  } = useRecentStays()
  const { cabins, isLoading: isCabinsLoading } = useCabins()

  if (isLoading || isStaysLoading || isCabinsLoading) return <Spinner />

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div>Today's activity</div>
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  )
}

export default DashboardLayout
