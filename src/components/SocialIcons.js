import React from 'react'

const SocialIcons = () => {
  return (
    <div className="SocialIcons">
      <a href="https://www.facebook.com/cronjeempyre" target="_blank">
        <img
          src={require('../images/Facebook.svg')}
          alt="Facebook"
          width="50"
        />
      </a>
      <a href="https://www.instagram.com/cronje_empyre/" target="_blank">
        <img
          src={require('../images/Instagram.svg')}
          alt="Instagram"
          width="50"
        />
      </a>
      <a
        href="https://open.spotify.com/artist/03MtEenG1uuWgIT1qyMPrJ"
        target="_blank"
      >
        <img src={require('../images/Spotify.svg')} alt="Spotify" width="50" />
      </a>
      <a
        href="https://www.beatport.com/artist/cronje-empyre/751828"
        target="_blank"
      >
        <img
          src={require('../images/Beatport.svg')}
          alt="Beatport"
          width="50"
        />
      </a>
      <a href="https://soundcloud.com/cronje-empyre" target="_blank">
        <img
          src={require('../images/Soundcloud.svg')}
          alt="Soundcloud"
          width="50"
        />
      </a>
      <a href="https://www.mixcloud.com/CronjeEmpyre/" target="_blank">
        <img
          src={require('../images/Mixcloud.svg')}
          alt="Mixcloud"
          width="50"
        />
      </a>
    </div>
  )
}

export default SocialIcons
