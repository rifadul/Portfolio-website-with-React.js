import React from 'react'

import { BsPatchCheckFill } from 'react-icons/bs'

export default function ExperienceStacks(props) {
    const [ stackName, skills ] = props
    console.log('my skill', skills);
    return (
        <div className="experience__frontend">
            <h3>{stackName}</h3>
            <div className="experience__content">
                {/* {
                    skills.map((skill, lavel, index) => {
                        return ( */}
                            < article className="experience__details">
                                <BsPatchCheckFill />
                                <h4>dsdfs</h4>
                                <small className="text-light">sfsd</small>
                            </article>
                        {/* )
                    })
                } */}
            </div>
        </div >
    )
}
