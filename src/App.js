import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    const name = "John Doe";
    const loading = false;
    const showName = false;
    return (
      <div className="App">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <h1>Hello {showName && name.toUpperCase()}</h1>
        )}
      </div>
    );
  }
}

export default App;
