import React from 'react'
import { User as UserType } from '@/state/api'
import { Fade, Tooltip } from '@mui/material';
import Image from 'next/image';

type UserImageProps = {
    user: UserType;
}

const UserImage = ({ user }: UserImageProps) => {
    return (
        <Tooltip
            title={user.username}
            placement="top"
            arrow
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
        >
            <Image
                key={user.userId}
                src={`https://proj-manag.s3.amazonaws.com/${user.profilePictureUrl!}`}
                alt={user.username}
                width={30}
                height={30}
                className='h-8 w-8 rounded-full border-2 border-white object-cover dark:border-dark-secondary'
            />
        </Tooltip>
    )
}

export default UserImage