import { useContext } from "react"
import { CounterContext } from "../../App"

const Counter = () => {
  const counter = useContext(CounterContext)
    return (
        <div className="counter">
            {counter}
        </div>
    )
}


export default Counter 