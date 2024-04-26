import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){

const [ name, setName] = useState('Jesus')
    return(
        <section className='App'>
            <TwitterFollowCard 
                userName={name} 
            >
                Jesus Casique
            </TwitterFollowCard>
            {/* como comentar dentro del jsx */}
            <TwitterFollowCard 
                userName="Elon Musk"
            >
                Tiffany Casique
            </TwitterFollowCard>


            <button onClick={ () => setName('Casique') }>
                Cambio de Nombre
            </button>
        </section>
        
    )
}