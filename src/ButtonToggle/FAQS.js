import React, { useState } from 'react'
import { faqsData } from './data'
import Faq from './Faq';

const FAQS = () => {
    const[faqs,setFaqs]=useState(faqsData);
  return (
    <div>
      <main>
        <section>
            <h1>Frequently asked questions</h1>
            {faqs.map((faq)=> 
            <Faq key={faq.id} {...faq}/>)
            } 
        </section>
      </main>
    </div>
  )
}

export default FAQS
