
import Head from 'next/head'
import './globals.css'

export const metadata = {
  title: 'Maia Martinez',
  description: 'Esta es una pagina web dedicada a Maia martinez, legisladora del sector este de San miguel de Tucuman',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className=" bg-slate-300 scroll-smooth">{children}</body>
    </html>
  )
}
