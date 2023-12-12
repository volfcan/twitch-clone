import React from "react";
import LiveChannelItem from "./LiveChannelItem";
import Live1 from '../public/assets/live/live1.jpeg'




const LiveChannels = () => {
    return(
        <div id='live' className={'p-2 md:p-8'}>
            <h2 className={'text-xl font-bold px-2'}>
                <span className={'text-[#9147ff]'}>Live Channels</span> we thin you'll like
            </h2>
            {/*Container*/}
            <div className={'grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2'}>
              <LiveChannelItem
                  profile_img={'https://static-cdn.jtvnw.net/jtv_user_pictures/1975b18f-fa7d-443f-b191-fba08f92f3a2-profile_image-50x50.jpeg'}
                  title={'CHARITY STREAM!'}
                  user={'Natt'}
                  game={'Valorant'}
                  img={Live1} />
              <LiveChannelItem
                  profile_img={'https://static-cdn.jtvnw.net/jtv_user_pictures/1975b18f-fa7d-443f-b191-fba08f92f3a2-profile_image-50x50.jpeg'}
                  title={'CHARITY Stream!'}
                  user={'Natt'}
                  game={'Valoran'}
                  img={'https://static-cdn.jtvnw.net/previews-ttv/live_user_olofmeister-440x248.jpg'}/>
                <LiveChannelItem
                    profile_img={'https://static-cdn.jtvnw.net/jtv_user_pictures/31b9e758-02e4-4be7-98a7-184e4941e02d-profile_image-50x50.png'}
                    title={'CS2'}
                    user={'Naru'}
                    game={'League Of Legends'}
                    img={'https://static-cdn.jtvnw.net/previews-ttv/live_user_f0rest-440x248.jpg'}/>
                <LiveChannelItem
                    profile_img={'https://static-cdn.jtvnw.net/jtv_user_pictures/31b9e758-02e4-4be7-98a7-184e4941e02d-profile_image-50x50.png'}
                    title={'CS2'}
                    user={'Naru'}
                    game={'League Of Legends'}
                    img={'https://static-cdn.jtvnw.net/previews-ttv/live_user_f0rest-440x248.jpg'}/>
                <LiveChannelItem
                    profile_img={'https://static-cdn.jtvnw.net/jtv_user_pictures/31b9e758-02e4-4be7-98a7-184e4941e02d-profile_image-50x50.png'}
                    title={'CS2'}
                    user={'Naru'}
                    game={'League Of Legends'}
                    img={'https://static-cdn.jtvnw.net/previews-ttv/live_user_f0rest-440x248.jpg'}/>
                <LiveChannelItem
                    profile_img={'https://static-cdn.jtvnw.net/jtv_user_pictures/31b9e758-02e4-4be7-98a7-184e4941e02d-profile_image-50x50.png'}
                    title={'CS2'}
                    user={'Naru'}
                    game={'League Of Legends'}
                    img={'https://static-cdn.jtvnw.net/previews-ttv/live_user_f0rest-440x248.jpg'}/>
                <LiveChannelItem
                    profile_img={'https://static-cdn.jtvnw.net/jtv_user_pictures/31b9e758-02e4-4be7-98a7-184e4941e02d-profile_image-50x50.png'}
                    title={'CS2'}
                    user={'Naru'}
                    game={'League Of Legends'}
                    img={'https://static-cdn.jtvnw.net/previews-ttv/live_user_f0rest-440x248.jpg'}/>
                <LiveChannelItem
                    profile_img={'https://static-cdn.jtvnw.net/jtv_user_pictures/31b9e758-02e4-4be7-98a7-184e4941e02d-profile_image-50x50.png'}
                    title={'CS2'}
                    user={'Naru'}
                    game={'League Of Legends'}
                    img={'https://static-cdn.jtvnw.net/previews-ttv/live_user_f0rest-440x248.jpg'}/>
                <LiveChannelItem
                    profile_img={'https://static-cdn.jtvnw.net/jtv_user_pictures/31b9e758-02e4-4be7-98a7-184e4941e02d-profile_image-50x50.png'}
                    title={'CS2'}
                    user={'Naru'}
                    game={'League Of Legends'}
                    img={'https://static-cdn.jtvnw.net/previews-ttv/live_user_f0rest-440x248.jpg'}/>
            </div>
        </div>
    )
}

export default LiveChannels