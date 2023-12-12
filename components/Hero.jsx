import React from 'react'

const Hero = () => {
    return(
        <div id='hero' className='p-2 md:p-8'>
            <div className='relative overflow-hidden w-full pt-[56.25%]'>
            <iframe className='absolute top-0 left-0 right-0 bottom-0 w-full h-full' width="560" height="315" src="https://www.youtube.com/embed/aFANd2l-yVE?si=8pF9Im710yX6Inoc"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
            </iframe>
            </div>
        </div>
    )
}

export default Hero