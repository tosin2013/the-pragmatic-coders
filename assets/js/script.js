// Custom JavaScript for The Pragmatic Coders

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Mermaid diagrams
  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      flowchart: { 
        useMaxWidth: true,
        htmlLabels: true
      }
    });
  }
  
  // Add 'Questions to Ponder' styling
  const questionsHeadings = document.querySelectorAll('h2');
  questionsHeadings.forEach(heading => {
    if (heading.textContent.includes('Questions to Ponder')) {
      const questionsSection = document.createElement('div');
      questionsSection.className = 'questions-to-ponder';
      
      // Get all elements until the next heading or end of parent
      let currentElement = heading.nextElementSibling;
      const elementsToMove = [heading];
      
      while (currentElement && 
             !(currentElement.tagName === 'H2' || 
               currentElement.tagName === 'H1')) {
        elementsToMove.push(currentElement);
        currentElement = currentElement.nextElementSibling;
      }
      
      // Move elements into the new section
      elementsToMove.forEach(el => {
        questionsSection.appendChild(el.cloneNode(true));
      });
      
      // Replace original elements with the new section
      heading.parentNode.insertBefore(questionsSection, heading);
      elementsToMove.forEach(el => el.remove());
    }
  });
  
  // Add chapter navigation if on a chapter page
  if (document.querySelector('.page-content')) {
    const chapterNav = document.createElement('div');
    chapterNav.className = 'chapter-nav';
    
    // Get all chapter links from the main navigation
    const chapterLinks = Array.from(document.querySelectorAll('nav.site-nav a'))
      .filter(link => link.href.includes('/chapters/'));
    
    // Find current chapter index
    const currentUrl = window.location.pathname;
    const currentIndex = chapterLinks.findIndex(link => 
      link.getAttribute('href') === currentUrl || 
      link.getAttribute('href') === currentUrl + '/'
    );
    
    if (currentIndex !== -1) {
      // Add previous chapter link
      const prevLink = document.createElement('div');
      prevLink.className = 'prev-chapter';
      if (currentIndex > 0) {
        const a = document.createElement('a');
        a.href = chapterLinks[currentIndex - 1].getAttribute('href');
        a.textContent = '← Previous Chapter';
        prevLink.appendChild(a);
      }
      chapterNav.appendChild(prevLink);
      
      // Add next chapter link
      const nextLink = document.createElement('div');
      nextLink.className = 'next-chapter';
      if (currentIndex < chapterLinks.length - 1) {
        const a = document.createElement('a');
        a.href = chapterLinks[currentIndex + 1].getAttribute('href');
        a.textContent = 'Next Chapter →';
        nextLink.appendChild(a);
      }
      chapterNav.appendChild(nextLink);
      
      // Add navigation to the page
      document.querySelector('.page-content').appendChild(chapterNav);
    }
  }
});
