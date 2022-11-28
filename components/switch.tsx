import { useState } from 'react'
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

interface SwitchProps {
    on: boolean
    onClick: (value: boolean) => void
}

const Switch = (props: SwitchProps) => {
    const [on, setOn] = useState(props.on)
    return (
        <div className='switch'>
            <div
                className='switch__contact'
                onClick={() => {
                    const b = !on

                    props.onClick(b)
                    setOn(b)
                }}
            >
                <span
                    className={on ? 'switch__lever switch__right' : 'switch__lever switch__left'}
                ></span>
                <span className={!on ? 'switch__contact-active' : ''}> <BsFillSunFill />  </span>

                <span className={on ? 'switch__contact-active' : ''}><BsFillMoonFill /></span>
            </div>
        </div>
    )
}

export default Switch
