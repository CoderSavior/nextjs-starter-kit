import Head from 'next/head'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'

export default ({ children }) =>
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.13.10/antd.min.css' />
    </Head>
    <style jsx global>{`
      body {
      }
    `}</style>
    <LocaleProvider locale={enUS}>
      <div>{children}</div>
    </LocaleProvider>
  </div>