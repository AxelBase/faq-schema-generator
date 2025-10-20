import { writable } from 'svelte/store';
import { loadStorage, saveStorage } from './storage.js';

// Load FAQs from localStorage on init (FR9)
const faqs = writable(loadStorage());
export { faqs };

// FR1: Add FAQ Entry
export function addFaq(question, answer) {
  faqs.update(f => {
    const newFaqs = [...f, { question: question.trim(), answer: answer.trim() }];
    saveStorage(newFaqs);
    return newFaqs;
  });
}

// FR2: Delete FAQ Entry
export function deleteFaq(index) {
  faqs.update(f => {
    const newFaqs = f.filter((_, i) => i !== index);
    saveStorage(newFaqs);
    return newFaqs;
  });
}

// FR8: Clear All FAQs
export function clearAll() {
  faqs.set([]);
  saveStorage([]);
}

// FR4: Generate Schema
export function generateSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { 
        "@type": "Answer", 
        "text": faq.answer 
      }
    }))
  };
}