'use client';

import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
     <CountUp 
     duration={2.75}
     decimals={3}
     decimal=","
     prefix="₹ "
     suffix=''
     end={amount} 
    />
    </div>
  )
}

export default AnimatedCounter