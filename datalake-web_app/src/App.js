import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" id="header">
        <a id="headerLogo" href="/">Datalake</a>
          <div id="headerRightSidePane">
            <a className="NavbarItem" href="/info">What is Datalake?</a>
            <a className="NavbarItem" href="/team">Team</a>
            <a className="NavbarItem" href="/aboutus">About Us</a>
          </div>
      </header>
      {/*<Home />*/}
    </div>
  );
}

export default App;
