import React from 'react'

const Education = () => {

  const educations = [
    {
      name: 'AWS Certified Cloud Practitioner',
      period: 'Dec 2024'
    },
    {
      name: 'AWS Cloud re/Start Bootcamp',
      period: 'Apr 2024 - Jul 2024',
    },
    {
      name: 'DELE B1',
      period: 'Feb 2024'
    },
    {
      name: 'Javascript Full-Stack Bootcamp',
      period: 'May 2021 - Jul 2021',
    },
    {
      name: 'Bachelor of Policy Studies',
      period: 'Apr 2011 - Mar 2016',
    }
  ]

  return (
    <section>
      <header className='bento_title flex items-center gap-2'>
        Education and Certificates
      </header>

      <div className='h-2' />

      <ul className='flex flex-wrap gap-1.5 mt-2'>
        {educations.map((education, i) => (
          <li className='border-1 border-custom_burgundy text-custom_burgundy px-2 py-1 rounded-xl text-xs whitespace-nowrap'>
            {education.name}
          </li>
        ))}
      </ul>

    </section>
  )
}

export default Education