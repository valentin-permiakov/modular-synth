import React from 'react';
import { Content } from './Content';
import './styles/main.global.scss';
import './styles/_variables.scss';
import { SynthContainer } from './SynthContainer';

export const App = () => {
  return (
    <Content>
      <SynthContainer></SynthContainer>
    </Content>
  );
};
