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

  return (
    <>
      <Header setMenuIsViseble={setMenuIsViseble} />
      <HeaderMobile
        menuIsViseble={menuIsViseble}
        setMenuIsViseble={setMenuIsViseble}
      />
      <SectionHome />
      <SectionDesign />
      <SectionGalery />
      <SectionBudget />
      <Footer />
    </>
  )
}

export default App
