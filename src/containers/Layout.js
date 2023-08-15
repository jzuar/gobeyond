import Footer from "./Footer";
import Navbar from "./Navbar";
import Link from 'next/link'
import Bars3Icon  from '@heroicons/react/24/outline/Bars3Icon'
import Navlinks from "./Navlinks";


export default function Layout({ children }) {

  const logoutUser = () => {

  }


  return (
    <>
      <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
              <div className="overflow-y-auto  flex flex-col ">

                  <div className="overflow-y-auto">
                      <main>{children}</main>
                      <Footer />
                  </div>

               </div>
          </div>
      </div>
    </>
  )
}
