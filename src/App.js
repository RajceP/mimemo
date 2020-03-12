import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Aux from './hoc/Auxiliary';
import Layout from './Layout/Layout';
import MiMemo from './containers/MiMemo/MiMemo';

function App() {
  return (
    <div>
      <Aux>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Layout>
            <MiMemo />
          </Layout>
        </BrowserRouter>
      </Aux>
    </div>
  );
}

export default App;
