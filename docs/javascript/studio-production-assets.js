(() => {
  document.documentElement.dataset.studioProduction = 'ready';
  window.addEventListener('DOMContentLoaded', () => {
    try {
      if (typeof window.va === 'function') window.va('event', { name: 'docs_studio_production_ready' });
    } catch {}
  });
})();
