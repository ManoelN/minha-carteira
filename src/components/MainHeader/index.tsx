import React, {useMemo} from 'react';

import Toggle from '../Toggle';
import emojis from '../../utils/emojis';

import {
     Container,
     Profile,
     Welcome, 
     UserName,
     White,
     Black
 } from './styles';

const MainHeader: React.FC = () => {

    const emoji = useMemo( () => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, [] );

    return (
        <Container>
            <White>Light</White>
            <Toggle/>
            <Black>Dark</Black>
            <Profile>
                <Welcome> Olá, {emoji}</Welcome>
                <UserName>Manoel Neto</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;