import React, { useEffect } from 'react';
import SelectPage from "./SelectorPage";
import GlobalStyles from "./GlobalStyles";

function App() {
  useEffect(() => {
    document.title = 'Test work';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <>
        <GlobalStyles />
        <SelectPage />
      </>
  );
}

export default App;
