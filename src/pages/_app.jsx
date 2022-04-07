import GlobalStyles from '../styles/globals'

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
