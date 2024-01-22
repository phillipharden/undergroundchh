import React from 'react';

function Landing() {
  return (
    <div className="landing">
      <div className="landing-container">
        <h1>Welcome to Underground CHH</h1>
        <p>
          Your home of the hottest and latest in underground Christian hip hop!
        </p>
        <p>
          Our official launch will be taking place soon. As we prepare, please
          reach out to us with any questions you may have. If you are an
          independant artist that would like to have your music reviewed please
          contact us with your info at{' '}
          <a className="email-address" href="mailto:info@undergroundchh.com">
            info@undergroundchh.com
          </a>
        </p>
      </div>

      <div className="playlist-container">
        <h2>Checkout our official playlist on Spotify</h2>
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/2RZgpCw9NbHa7lffDHbwmf?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      <div className="playlist-container">
        <iframe
            style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/69v1vGaBvwm77ngbCBlYb8?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

     
    </div>
  );
}

export default Landing;
