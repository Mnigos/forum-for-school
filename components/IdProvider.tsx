import { IdProvider as Provider } from '@radix-ui/react-id'
import React, { FC } from 'react'

const IdProvider: FC = ({ children }) => <Provider>{children}</Provider>

export default IdProvider
