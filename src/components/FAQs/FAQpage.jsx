import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
function FAQpage({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='faqs-container'>
            <div className='faqs-question' onClick={() => setIsOpen(!isOpen)}>
                <h5>{question}</h5>
                <button>{isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</button>
            </div>
            {isOpen && <p>{answer}</p>}
        </div>
    )
}

export default FAQpage
