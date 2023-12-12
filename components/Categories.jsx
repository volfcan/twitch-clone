import React from 'react'
import CategoriesItem from "./CategoriesItem";

const Categories = () => {
    return(
        <div id='categories' className={'p-2 md:p-8'}>
            <h2 className={'text-xl font-bold px-2'}>
                <span className={'text-[#9147ff]'}>Top Categories</span>
            </h2>
            {/*Container*/}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 gap-2 py-2">
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/32399-188x250.jpg'
                    title={'Counter Strike'}
                    viewers={'38k'}
                    tag1={'FPS'}
                    tag2={'Shooter'}
                  />
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/32399-188x250.jpg'
                    title={'Counter Strike'}
                    viewers={'38k'}
                    tag1={'FPS'}
                    tag2={'Shooter'}
                  />
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/32399-188x250.jpg'
                    title={'Counter Strike'}
                    viewers={'38k'}
                    tag1={'FPS'}
                    tag2={'Shooter'}
                  />
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/32399-188x250.jpg'
                    title={'Counter Strike'}
                    viewers={'38k'}
                    tag1={'FPS'}
                    tag2={'Shooter'}
                  />
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/32399-188x250.jpg'
                    title={'Counter Strike'}
                    viewers={'38k'}
                    tag1={'FPS'}
                    tag2={'Shooter'}
                  />
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/32399-188x250.jpg'
                    title={'Counter Strike'}
                    viewers={'38k'}
                    tag1={'FPS'}
                    tag2={'Shooter'}
                  />
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/32399-188x250.jpg'
                    title={'Counter Strike'}
                    viewers={'38k'}
                    tag1={'FPS'}
                    tag2={'Shooter'}
                  />
            </div>
        </div>
    );
};

export default Categories