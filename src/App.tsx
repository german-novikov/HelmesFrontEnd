import React, { useEffect } from 'react';
import SelectPage from "./SelectorPage";

function App() {
  useEffect(() => {
    document.title = 'Test work';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <SelectPage />
  );
}

export default App;
