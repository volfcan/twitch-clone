import React from "react";
import Image from "next/image";

const LiveChannelItem = ({img, profile_img, title, user, game}) => {
    return (
        <div className={'p-2'}>
            <Image src={img} alt='/' width={555} height={315} />
            <div>
                <div>
                    <Image
                      src={profile_img}
                      alt='/'
                      width={40}
                      height={40}
                      className={'rounded-full'}/>
                </div>
                <div>
                    <p className={'text-sm font-bold'}>{title}</p>
                    <p className={'text-sm text-gray-500'}>{user}</p>
                    <p className={'text-sm text-gray-500'}>{game}</p>
                </div>
            </div>
        </div>
    )
}

export default LiveChannelItem