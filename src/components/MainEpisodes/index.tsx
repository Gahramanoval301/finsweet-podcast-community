import React from 'react'
import { mainEpisodes } from '@/data/episodes'
import EpisodeCard from './EpisodeCard'

export default function MainEpisodes() {
//     const day = producing_time.slice(0, 2);
//     const month = producing_time.slice(3, 5);
//     const year = producing_time.slice(6)

//     const producingDate = new Date(`${month}/${day}/${year}`);

//     // Sort function to compare producing times
//     const compareProducingTime = (a, b) => {
//        const dateA = new Date(a.producing_time);
//        const dateB = new Date(b.producing_time);
//        return dateB - dateA;
//    };

//    // Sort episodes by producing time
//    mainEpisodes.sort(compareProducingTime);

   // Get the three newest episodes
//    const newestEpisodes = mainEpisodes.slice(0, 3);
    return (
        <div className='grid grid-cols-3 gap-4'>
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
