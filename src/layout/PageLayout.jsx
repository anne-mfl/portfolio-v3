import React from 'react'

const PageLayout = ({ children, activePage, setActivePage, thisPage }) => {
  return (
    <div
      // className={`min-h-screen duration-500 ease-out
      className={`h-screen duration-500 ease-out
          ${activePage === thisPage ? 'flex-1 min-w-[200px]' : 'w-20'}
          ${thisPage === 'Home' && 'bg-custom_navy text-custom_white'}
          ${thisPage === 'About' && 'bg-custom_red text-custom_black'}
          ${thisPage === 'Experience' && 'bg-custom_greyishblue text-custom_black'}
          ${thisPage === 'Projects' && 'bg-custom_mustard text-custom_black'}
          ${thisPage === 'Contact' && 'bg-custom_pink text-custom_black'}
        `}
      onClick={() => setActivePage(thisPage)}
    >
      {
        thisPage === activePage
          ? <div className='overflow-auto h-full'>{children}</div>
          // : thisPage !== activePage && thisPage === 'Home'
          //   ? <div className='h-screen flex flex-col justify-between items-center'>
          //     <img src='src/assets/logo_yellow_sq.png' alt="Anne Lee logo" className='w-16 px-2 pt-3 cursor-pointer' />
          //     <h1 className={`${thisPage === 'Projects' || thisPage === 'Experience' ? 'text-custom_dark_yellow' : 'text-custom_yellow'} -rotate-90 my-12`}>
          //       {thisPage}
          //     </h1>
          //   </div>
          : <div className='h-screen flex justify-center items-end'>
            <h1 className={`${thisPage === 'Projects' || thisPage === 'Experience' || thisPage === 'Contact' ? 'text-custom_dark_yellow' : 'text-custom_yellow'} -rotate-90 my-12`}>
              {thisPage}
            </h1>
          </div>
      }
    </div>
  )
}

export default PageLayout




// ${thisPage === 'Home' && 'bg-[#F6EEE9] text-[#2E4638]'}
// ${thisPage === 'About' && 'bg-[#F3D8C7] text-[#2e2e2e]'}
// ${thisPage === 'Experience' && 'bg-[#E8B9A6] text-[#2e2e2e]'}
// ${thisPage === 'Projects' && 'bg-[#D99873] text-[#2e2e2e]'}
// ${thisPage === 'Contact' && 'bg-[#514244] text-[#fdfcfb]'}

// ${thisPage === 'Home' && 'bg-[#F4EDE4] text-[#2E4638]'}
// ${thisPage === 'About' && 'bg-[#E7D8C9] text-[#2e2e2e]'}
// ${thisPage === 'Experience' && 'bg-[#D3C6B3] text-[#2e2e2e]'}
// ${thisPage === 'Projects' && 'bg-[#C1A78C] text-[#2e2e2e]'}
// ${thisPage === 'Contact' && 'bg-[#4A4E46] text-[#fdfcfb]'}

// ${thisPage === 'Home' && 'bg-[#E6E4F6] text-[#2e2e2e]'}
// ${thisPage === 'About' && 'bg-[#D2E9E1] text-[#2e2e2e]'}
// ${thisPage === 'Experience' && 'bg-[#EAD7C2] text-[#2e2e2e]'}
// ${thisPage === 'Projects' && 'bg-[#E9C4C2] text-[#2e2e2e]'}
// ${thisPage === 'Contact' && 'bg-[#332940] text-[#fdfcfb]'}