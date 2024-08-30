/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_PRIV_KEY: string
    REACT_APP_PUBLIC_KEY: string
  }
}
