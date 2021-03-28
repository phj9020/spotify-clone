import React from 'react';
import {useStateValue} from '../dataLayer/StateProvider';

function Player() {
    const {user} = useStateValue();
    console.log(user);
    return (
        <div>
            <h1>player</h1>
            {/* header */}
            {/* sidebar */}
            {/* body */}
        </div>
    )
}

export default Player;
