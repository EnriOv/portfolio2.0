import AppLogic from './AppLogic';

function App() {
  const { checkDisplayType } = AppLogic();

  return (
    <div className="App">
      {checkDisplayType()}
    </div>
  );
}

export default App;
