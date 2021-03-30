import React from 'react';
import styled from 'styled-components';

const SidebarOptionContainer = styled.div`
    padding: 5px 10px;
    height: 40px;
    display: flex;
    align-items: center;
    color: white;
    transition: 200ms color ease-in;
    cursor: pointer;

    .MuiSvgIcon-root {
        margin-right: 20px;
    }

    :hover {
        color: #1ed760;
    }

    h4 {
        font-weight: 400;
    }
    
    p {
        font-size: 14px;
    }
`

function SidebarOption({Icon, title}) {
    return (
        <SidebarOptionContainer>
            {Icon && <Icon />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </SidebarOptionContainer>
    )
}

export default SidebarOption;
