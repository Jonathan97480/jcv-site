import { useState, useEffect } from 'react'
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

interface SwitchProps {
    on: boolean
    onClick: (value: boolean) => void
}

const Switch = (props: SwitchProps) => {
    const [on, setOn] = useState<boolean>()

    useEffect(() => {
        setOn(props.on)
    }, [props.on])


    console.log(on)
    return (
        <div className='switch'>
            <div
                className='switch__contact'
                onClick={() => {
                    props.onClick(!on)
                }}
            >
                <span className={getCalssBtn(on)}></span>
                <span className={on == false ? 'switch__contact-active' : ''}> <BsFillSunFill />  </span>

                <span className={on === true ? 'switch__contact-active' : ''}><BsFillMoonFill /></span>
            </div>
        </div>
    )
}

function getCalssBtn(on: boolean | undefined) {
    if (on) {
        return 'switch__lever switch__right'
    } else {
        return 'switch__lever switch__left'
    }
}

export default Switch
