import React from 'react'
import {CusWrapper} from "./Wrapper.style";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <CusWrapper>
        {children}
    </CusWrapper>
  )
}
