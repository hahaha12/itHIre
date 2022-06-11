import { FC, memo } from "react"

interface ButtonProps {
    children: string
    onClick: () => void
    color: string
}

const Button: FC<ButtonProps> = ({ children, onClick, color }) => {
    return (
        <button onClick={onClick} style={{ background: color }} type='button' className='button'> {children}</button>
    )
}

export default memo(Button)