import React from 'react'
import './Team.css'
import { useState } from 'react'
import { SAM } from "../assets/ScientificAdvisoryMember/ScientificAdvisoryMemberAPI"
import { Volunteer_interns } from '../assets/Volunteers/volunteersapi'
import { orgs } from '../assets/Organisers/organisersapi'
function Team() {

    const [toggle, setToggle] = useState(null);
    const [memberhover, setMemberhover] = useState(0);
    const [volunterhover, setVolunterhover] = useState(0);
    const [orghover, setOrghover] = useState(0);

    function Organisers() {
        return (
            <>
                <div className="team-container">
                    {
                        orgs.map((m, index) => (
                            <div key={index} className="team-member org" onMouseOver={() => setOrghover(index)} onMouseLeave={() => setOrghover(null)} >
                                <spam>
                                    <img src={m.img[0]} alt={m.name} className={`${orghover === index ? "team-member-hover-img" : ""}`} />
                                </spam>
                                <h3 className={`${orghover === index ? "team-member-hover-h3" : ""}`}>{m.name}</h3>
                                <p>{m.designation}</p>
                            </div>
                        ))}
                </div>
            </>
        )
    }

    function Volunteers() {
        return (
            <>
                <div className="team-container">
                    {
                        Volunteer_interns.map((m, index) => (
                            <div key={index} className="team-member" onMouseOver={() => setVolunterhover(index)} onMouseLeave={() => setMemberhover(null)} >
                                <spam>
                                    <img src={m.img[0]} alt={m.name} className={`${volunterhover === index ? "team-member-hover-img" : ""}`} />
                                </spam>
                                <h3 className={`${volunterhover === index ? "team-member-hover-h3" : ""}`}>{m.name}</h3>
                                <p>{m.post}</p>
                            </div>
                        ))}
                </div>
            </>
        )
    }

    function ScientificAdvisoryMembers() {
        return (
            <>
                <div className="team-container">
                    {
                        SAM.map((m, index) => (
                            <div key={index} className="team-member SAM" onMouseOver={() => setMemberhover(index)} onMouseLeave={() => setMemberhover(null)} >
                                <spam>
                                    <img src={m.image[0]} alt={m.name} className={`${memberhover === index ? "team-member-hover-img" : ""}`} />
                                </spam>
                                <h3 className={`${memberhover === index ? "team-member-hover-h3" : ""}`}>{m.name}</h3>
                                <p>{m.detail}</p>
                            </div>
                        ))}
                </div>
            </>
        )
    }

    return (
        <div>
            <h1>Our Team</h1>
            <div className="team-member-container">
                <div onClick={() => setToggle(0)} className={`team-member-containter-button ${toggle === 0 ? "team-member-containter-button-active" : ""}`}>
                    <h3>Organisers</h3>
                </div>
                <div onClick={() => setToggle(1)} className={`team-member-containter-button ${toggle === 1 ? "team-member-containter-button-active" : ""}`}>
                    <h3>Volunteers</h3>
                </div>
                <div onClick={() => setToggle(2)} className={`team-member-containter-button ${toggle === 2 ? "team-member-containter-button-active" : ""}`}>
                    <h3>Scientific advisory members</h3>
                </div>
            </div>
            {toggle === 0 ? Organisers() : toggle === 1 ? Volunteers() : toggle === 2 ? ScientificAdvisoryMembers() : ""}
        </div>
    )
}
export default Team;