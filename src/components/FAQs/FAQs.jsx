import React from 'react'
import './FAQs.css'
import faq from './FAQdata.json'
import FAQpage from './FAQpage'

function FAQs() {
  return (
    <div id='faqs'>
    <div className='container'>
      <h2 className='heading'>Frequently asked questions (FAQs)</h2>
      <div className='faq-all-containers'>
        {faq.map((faqs) => {
          return (
            <FAQpage question={faqs.question} answer={faqs.answer} key={faqs.index} />
          )
        })}


      </div>

    </div>
    </div>
  )
}

export default FAQs
