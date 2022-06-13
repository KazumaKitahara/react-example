import * as React from 'react'
import styled from 'styled-components'
import {ScDivFlexRow} from '../../common-sc/index'
import {mixins} from '../../mixins'
// @ts-ignore
import { default as logoPath } from '../../imgs/logo.svg'

const ScHeaderRoot = styled.header`
    ${mixins.flexRowCenter}
    justify-content: space-between;
    height: 50px;
    width: 100%;
    padding: 0 32px;
    position: fixed;
    top: 0;
    background-color: black;
    color: white;
    z-index: 1;
`

const ScRotateLogo = styled.img`
    ${mixins.animationSpin}
    height: 30px;
    pointer-events: none;
    animation: spin infinite 20s linear;
`;
const ScHeaderTitle = styled.span`
    transform: translateY(-5px);
`;
const ScHeaderTitleDot = styled.span`
    color: #61dafb;
    font-weight: bold;
    font-size: 2rem;
    padding-left: 2px;
`;

function Header() {
    return (
        <ScHeaderRoot>
            <ScDivFlexRow>
                <ScRotateLogo src={logoPath} alt="logo" />
                <ScHeaderTitle>React Example<ScHeaderTitleDot>.</ScHeaderTitleDot></ScHeaderTitle>
            </ScDivFlexRow>
        </ScHeaderRoot>
    )
}

export default Header;