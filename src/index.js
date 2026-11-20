// One Worker serves two single-page games, chosen by hostname. Each page is bundled into the Worker as text.
//   greece.johnshawler.com  ->  public/index.html  (Ancient Music Odyssey)
//   iliad.johnshawler.com   ->  public/iliad.html  (The Rage of Achilles)
// The Iliad game is also served at /iliad on any hostname.
import greece from '../public/index.html';
import iliad from '../public/iliad.html';

const html = body => new Response(body, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=300' } });

export default {
  fetch(request) {
    const { hostname, pathname } = new URL(request.url);
    if (pathname === '/' || pathname === '/index.html') return html(hostname.startsWith('iliad.') ? iliad : greece);
    if (pathname === '/iliad' || pathname === '/iliad/') return html(iliad);
    return new Response('Not found', { status: 404, headers: { 'content-type': 'text/plain; charset=utf-8' } });
  }
};
