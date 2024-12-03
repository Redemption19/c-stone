import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What financial services do you offer?',
    answer: 'We offer a comprehensive range of mobile financial services including money transfers, bill payments, savings accounts, and micro-loans, all designed to meet the specific needs of rural communities.',
  },
  {
    question: 'How do I start using your mobile banking services?',
    answer: 'Getting started is easy! Visit any of our branches with a valid ID and proof of address. Our team will help you set up your mobile banking account and guide you through the features.',
  },
  {
    question: 'What types of livestock do you supply?',
    answer: 'We primarily supply poultry and goats, sourced from certified suppliers. All our livestock meets quality standards and comes with veterinary certification.',
  },
  {
    question: 'Are your telecommunications services available in all rural areas?',
    answer: 'We currently cover most rural areas in the Eastern Region of Ghana, with ongoing expansion plans. Contact us to check coverage in your specific location.',
  },
  {
    question: 'Do you provide training for farmers?',
    answer: 'Yes, we offer regular training sessions on livestock management, financial literacy, and sustainable farming practices. These sessions are available to all our registered farmers.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
            className="flex justify-center mb-6"
          >
            <div className="bg-green-50 p-4 rounded-full">
              <HelpCircle className="w-12 h-12 text-green-600" />
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Find answers to common questions about our services and how we can help your community
            thrive.
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="text-lg font-semibold text-gray-900 text-left">
                  {faq.question}
                </span>
                <motion.div
                  initial={false}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? (
                    <Minus className="w-5 h-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-green-600 flex-shrink-0" />
                  )}
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;