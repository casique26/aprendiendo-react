import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'JesusC',
        name: 'Jesus Casique',
        isFollowing:true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing:false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing:true
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing:false
    },
]


export function App (){

    return(
        <section className='App'>

            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard 
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }

            

        </section>
        
    )
}