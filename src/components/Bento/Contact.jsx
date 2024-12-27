import React, { useState } from 'react'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';

const Contact = () => {

  const [tooltipMessage, setTooltipMessage] = useState('Copy to clipboard')

  return (
    <section className='flex flex-col h-full'>
      <header className='bento_title flex items-center gap-2'>
        Contact
      </header>

      <div className='flex grow flex-col justify-center'>
        <div>

          <p>Available for Frontend Developer positions or freelance projects starting January 2025. Feel free to contact me through
            &nbsp;
            <a href='https://www.linkedin.com/in/anne-gemma-lee/' className='underline hover:text-neutral-400'>Linkedin</a>
            &nbsp;
            or email me at:
            &nbsp;
            <span className='cursor-pointer hover:text-neutral-400 inline'
              onClick={() => {
                navigator.clipboard.writeText('anne.gemma.lee@gmail.com')
                setTooltipMessage('Copied!')
              }}
            >
              <span className='tooltip underline' data-tip={tooltipMessage}>
                anne.gemma.lee@gmail.com
                <ContentCopyRoundedIcon fontSize='small' />
              </span>
            </span>

          </p>







        </div>
      </div>
    </section>
  )
}

export default Contact