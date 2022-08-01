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
      <HeaderMobile
        menuIsViseble={menuIsViseble}
        setMenuIsViseble={setMenuIsViseble}
      />
      <Header setMenuIsViseble={setMenuIsViseble} />
      <SectionHome />
      <SectionDesign />
      <SectionGalery />
      <SectionBudget />
      <Footer />
    </>
  )
}

export default App
