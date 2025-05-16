
export const handleScroll = () => {
  const sections = document.querySelectorAll('.fade-in-section');
  
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight * 0.75) {
      section.classList.add('is-visible');
    }
  });
};
