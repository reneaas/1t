// The sidebar's "Python notebook" entry is a url: toc item pointing straight
// at the JupyterLite site; Sphinx/sphinx-book-theme render external toc links
// as plain same-tab anchors, so force it into a new tab like a real popout.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a.reference.external[href*="/_static/munchboka/notebook/"]').forEach((link) => {
    link.target = '_blank';
    link.rel = 'noopener';
  });
});
