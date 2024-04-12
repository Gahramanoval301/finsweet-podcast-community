import React from 'react'
import { mainEpisodes } from '@/data/episodes'
import EpisodeCard from './EpisodeCard'

export default function MainEpisodes() {
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-3  gap-10 md:gap-4 place-content-center place-items-center '>
            {mainEpisodes
                .sort((a, b) => new Date(b.producing_time) - new Date(a.producing_time)) // Sort episodes by producing time
                .slice(0, 3) // Get the three newest episodes
                .map(({ id, title, description, image, producing_time }) => (
                    <EpisodeCard
                        key={id}
                        image={image}
                        title={title}
                        description={description}
                        producing_time={producing_time}
                    />
                ))}
        </div>
    )
}
