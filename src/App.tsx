import Header from './components/common/Header'
import Contents from './components/Contents'
import styled from 'styled-components'
import * as React from 'react'

const ScAppRoot = styled.div`
    min-height: 100vh;
`;

const App = () => {
  return (
    <ScAppRoot>
        <Header />
        <Contents />
    </ScAppRoot>
  );
}

export default App;
