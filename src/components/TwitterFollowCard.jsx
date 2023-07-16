import React from 'react';
import { useState } from 'react';
function TwitterFollowCard({
  formatUserName,
  userName = 'unknown',
  name = 'unknown',
  initialIsFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  const [stopFollow, setStopFollow] = useState(false);
  const changeStopFollow = () => {
    setStopFollow(!stopFollow);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard__header">
        <img
          className="tw-followCard__avatar"
          src={`https://unavatar.io/${userName}`}
          alt="el avatar de kikobeats"
        />
        <div className="tw-followCard__info">
          <strong>{name}</strong>
          <span className="tw-followCard__infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button
          onClick={handleClick}
          className={`tw-followCard__button ${
            isFollowing ? 'is-following' : ''
          }`}
        >
          <span className='tw-followCard__text-follow'>
            {isFollowing ? 'siguiendo' : 'seguir'}
          </span>
          <span className='tw-followCard__stop-follow'>
            Dejar de seguir
          </span>
        </button>
      </aside>
    </article>
  );
}

export default TwitterFollowCard;
