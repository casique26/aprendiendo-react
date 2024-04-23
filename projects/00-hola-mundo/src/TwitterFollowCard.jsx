export function TwitterFollowCard({ userName, name, isFollowing }) {

    return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
                className='tw-followCard-avatar'
                alt="El avatar de midudev" 
                src={`https://unavatar.io/${userName}}`}></img>
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span>@{userName}</span>
            </div>
        </header>

        <aside>
            <button className='tw-followCard-button'>
                Seguir
            </button>
        </aside>
       </article>
  )
}
