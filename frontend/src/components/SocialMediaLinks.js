import React from 'react';

const SocialMediaLinks = () => {
  return (
    <>
      <div className="social-media-container">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/UndergroundCHH"
              target="blank"
              className="facebook icon"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/theUndergroundCHH/"
              target="blank"
              className="instagram icon"
            >
              Instagram
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/UndergroundCHH"
              target="blank"
              className="twitterx icon"
            >
              Twitter X
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@UndergroundCHH"
              target="blank"
              className="tiktok icon"
            >
              Tik Tok
            </a>
          </li>
          <li>
            <a
              href="www.youtube.com/@UndergroundCHH"
              target="blank"
              className="youtube icon"
            >
              YouTube
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SocialMediaLinks;
