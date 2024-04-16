import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp