import React from 'react'
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  const thisYear = getCurrentYear();

  return (
    <section className=''>
      <p className='flex items-center gap-1 justify-center pb-2'>
        <CopyrightRoundedIcon fontSize='' />Anne Lee {thisYear}
      </p>
    </section>
  )
}

export default Footer