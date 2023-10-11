import React from "react"

//import { createClient } from "@connect2ic/core"
//@connect2ic/core"
//import { InternetIdentity } from "@connect2ic/core/providers/internet-identity"
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react"
import { InternetIdentity } from "@connect2ic/core/src/providers/internet-identity"
import { createClient } from "@connect2ic/core/src"
import "@connect2ic/core/src/assets/index.css"

//Import canister definitions like this:
import * as Festividad_backend from "../Festividad_backend"



function App() {

  return (
    <div className="min-h-screen">
      <header className="relative flex justify-start items-center p-4 border-b border-gray-600">
        <div className="absolute top-2 right-2">
          <ConnectButton />
        </div>
      </header>
      <ConnectDialog />
      
    </div>
  )
}

const client = createClient({
  canisters: {
    Festividad_backend,
  },
  providers: [
    new InternetIdentity({ providerUrl: "http://127.0.0.1:8000/?canisterId=un4fu-tqaaa-aaaab-qadjq-cai" })
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
