import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { cn } from '../../utils/helpers';

export default function FAQAccordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  return (
    <div className="space-y-3" role="list">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="border border-silver/40 bg-white dark:border-carbon dark:bg-carbon" role="listitem">
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-body text-sm font-semibold text-ink dark:text-offwhite sm:text-base"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                id={`faq-button-${item.id}`}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span>{item.question}</span>
                <FiChevronDown
                  className={cn('shrink-0 text-gold transition-transform', isOpen && 'rotate-180')}
                  aria-hidden
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-button-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-ink/70 dark:text-silver/80">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
