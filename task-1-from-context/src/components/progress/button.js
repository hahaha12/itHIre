import {  memo } from "react"


const Button = ({ title, onClick, color }) => {
    return (
        <button style={{ background: color }} className="button" onClick={onClick}>{title}</button>
    )
}
export default memo(Button) 