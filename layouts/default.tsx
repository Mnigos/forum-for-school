import { FC } from 'react'

import Footer from '~/components/Footer'
import Navbar from '~/components/Navbar'

const DefaultLayout: FC = ({ children }) => (
  <div className="flex flex-col justify-between min-h-[100vh]">
    <Navbar />
    {children}
    <Footer />
  </div>
)

export default DefaultLayout
