import React, { Component } from 'react';
import './styles/Universe.css';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App d-flex w-100 h-100 mx-auto p-4 flex-column">
        <div>
          <div className="mb-auto"
            style={{
              paddingTop: '80px'
            }}>
          </div>
          <main role="main" className="mx-auto text-center content-hero"
            style={{
              maxWidth: '685px'
            }}>
            <h1 className="display-2 text-white font-weight-bold">
              Universe
            </h1>
            <div className="lead text-white-50">
              Universe is a blockchain agnostic dApp solutions community
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
