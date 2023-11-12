import logo from './logo.svg';
import './App.css';


import { defaultProviders } from "@connect2ic/core/providers"
import { createClient } from "@connect2ic/core"
import { Connect2ICProvider } from "@connect2ic/react"
import "@connect2ic/core/style.css"

import * as backend from "../declarations/FESTIVIDAD_backend"
import PageHeader from "./components/PageHeader.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const client = createClient({
    canisters: {
      backend,
    },
    providers: [
      new InternetIdentity({ providerUrl: "http://127.0.0.1:8000/?canisterId=c5kvi-uuaaa-aaaaa-qaaia-cai" })
    ],
    globalProviderConfig: {
      /*
       * Disables dev mode in production
       * Should be enabled when using local canisters
       */
      dev: true,
    },
  })

  export default () => (
    <Connect2ICProvider client={client}>
      <App />
    </Connect2ICProvider>
  )