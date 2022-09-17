
import React from 'react';
import { ImageBackground } from 'react-native';

import { styles } from './styles';

import backgroundImg from '../../assets/background-galaxy.png';

type Props = {
    children: React.ReactNode;
}

export function Background({ children }: Props) {
    return (
        <ImageBackground
            source={backgroundImg}
            style={styles.container}
            defaultSource={backgroundImg}
            >
            {children}
        </ImageBackground>
    );
}