// FR9: Auto-save Draft to LocalStorage
export function loadStorage() {
  try {
    return JSON.parse(localStorage.getItem('faq-generator') || '[]');
  } catch {
    return [];
  }
}

export function saveStorage(faqs) {
  localStorage.setItem('faq-generator', JSON.stringify(faqs));
}