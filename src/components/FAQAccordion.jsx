import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div 
            className="faq-question" 
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <motion.span 
              animate={{ rotate: openIndex === index ? 45 : 0 }}
              style={{ display: 'inline-block' }}
            >
              +
            </motion.span>
          </div>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div 
                className="faq-answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ paddingTop: '16px' }}>
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
