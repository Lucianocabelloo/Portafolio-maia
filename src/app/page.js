
import Footer from "./components/Footer/page";
import Gallery from "./components/Gallery/page";
import Main from "./components/Main/page";
import DrawerAppBar from "./components/navbar/page";
import Notices from "./components/Notices/page";




export default function Home() {
  return (
    <>
      <DrawerAppBar/>
    <main className="flex min-h-screen flex-col items-center desktop:my-8 desktop:mx-24 tablet:my-0  tablet:mx-0 bg-slate-">
      <Main/>
      <Gallery/>
      <Notices/>
    </main>
    <Footer/>
    </>
  )
}
