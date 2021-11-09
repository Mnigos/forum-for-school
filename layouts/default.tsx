import { FC } from 'react'

import Navbar from '~/components/Navbar'

const DefaultLayout: FC = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
)

export default DefaultLayout
