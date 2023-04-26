import './globals.css'
import favicon from "../../src/app/favicon.ico"
import Head from 'next/head'



export const metadata = {
  title: 'Maia Martinez',
  description: 'Esta es una pagina web dedicada a Maia martinez, legisladora del sector este de San miguel de Tucuman',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Head>
      <body className=" bg-slate-300 scroll-smooth">{children}</body>
    </html>
  )
}
