

import { defaultProviders } from "@connect2ic/core/providers"
import { createClient } from "@connect2ic/core"
import { Connect2ICProvider } from "@connect2ic/react"
import "@connect2ic/core/style.css"

import * as backend from "../declarations/FESTIVIDAD_backend"
import PageHeader from "./components/PageHeader"

function App() {

    return (
      <div className="min-h-screen">
        <header className="relative flex justify-start items-center p-4 border-b border-gray-600">
          <img src={logo} width="80" alt="logo" />
          <div className="absolute top-2 right-2">
            <ConnectButton />
          </div>
        </header>
        <ConnectDialog />
        <PageHeader/>
      </div>
    )
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