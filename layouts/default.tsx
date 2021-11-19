import { FC } from 'react'

import Footer from '~/components/Footer'
import Navbar from '~/components/Navbar'

const DefaultLayout: FC = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
)

export default DefaultLayout
