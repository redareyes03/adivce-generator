import { AdviceContainer } from "./styled-components/AdviceContainer"
import pattern from "./assets/pattern-divider-desktop.svg"
import pattern_mobile from "./assets/pattern-divider-mobile.svg"
import button_icon from "./assets/icon-dice.svg"
import { useEffect, useState } from "react"




function App() {

  const [advice, setAdvice] = useState(null)
  const [loading, setLoading] = useState(null)

  const getAdvice = async () => {
    const data = await fetch("https://api.adviceslip.com/advice")
    const json = await data.json()
    return json.slip
  }

  const updateAdvice = async () => {
    setLoading(true)
    const advice_object = await getAdvice()
    if (advice && advice_object.id === advice.id) {
      updateAdvice();
      return;
    }
    setAdvice(advice_object)
    setLoading(false)
  }

  useEffect(() => {
    updateAdvice();
  }, [])

  const [isMobile, setIsMobile] = useState(false)

  //choose the screen size 
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768)

  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", () => {
      // console.clear()
      handleResize()
    })
  }, [])

  return (
    <>
      {
        (advice && !loading) ? (
          <AdviceContainer>
            <h2>Advice #{advice.id}</h2>
            <p>"{advice.advice}"</p>
            <img src={isMobile ? pattern_mobile : pattern} alt="" />
            <button
              onClick={() => updateAdvice()}
            >
              <img src={button_icon} alt="" />
            </button>
          </AdviceContainer>
        )
        :
        <AdviceContainer>
          <h2>Loading...</h2>
        </AdviceContainer>
      }

    </>
  )
}

export default App
