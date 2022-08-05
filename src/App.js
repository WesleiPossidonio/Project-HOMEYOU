import React, { useState } from 'react'

import {
  Footer,
  Header,
  HeaderMobile,
  SectionBudget,
  SectionDesign,
  SectionGalery,
  SectionHome
} from './componentes'

function App() {
  const [menuIsViseble, setMenuIsViseble] = useState(false)
  const [clickPage, setClickPage] = useState(false)

  return (
    <>
      <HeaderMobile
        menuIsViseble={menuIsViseble}
        setMenuIsViseble={setMenuIsViseble}
        setClickPage={setClickPage}
        clickPage={clickPage}
      />
      <Header setMenuIsViseble={setMenuIsViseble} setClickPage={setClickPage} />
      <SectionHome />
      <SectionDesign />
      <SectionGalery />
      <SectionBudget />
      <Footer />
    </>
  )
}

export default App
