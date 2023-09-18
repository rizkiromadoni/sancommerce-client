import getBillboard from '@/actions/get-billboard';
import Billboard from '@/components/billboard'
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("b9491079-7097-4371-a8bb-2c299bb53b77");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  )
}

export default HomePage