import {
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import Login from "./components/Login"

interface State { }

class App extends StreamlitComponentBase<State> {
  public render = (): ReactNode => {
    return <Login />
  }
}

export default withStreamlitConnection(App)
