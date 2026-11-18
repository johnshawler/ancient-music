// Serves the single-page game. The page is bundled into the Worker as text.
import page from '../public/index.html';

export default {
  fetch(request) {
    const { pathname } = new URL(request.url);
    if (pathname === '/' || pathname === '/index.html') {
      return new Response(page, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=300' } });
    }
    return new Response('Not found', { status: 404, headers: { 'content-type': 'text/plain; charset=utf-8' } });
  }
};
