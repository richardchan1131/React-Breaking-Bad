import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";

const TableCard = ({ item }) => {
    const [statusColor, setStatusColor] = useState('');
    useEffect(() => {
        if (item.status === 'Alive') {
            setStatusColor('rgb(81, 255, 0)')
        } else if (item.status === 'Presumed dead') {
            setStatusColor('rgb(255, 50, 50)')
        } else if (item.status === 'Deceased') {
            setStatusColor('rgb(255, 231, 10)')
        }
    }, [])
    var link= `${item.name}`
    return (
        <Link to={link}>
            <div className="tableCard">
                <div className="tableCard-body">
                    <div className="tableCard-content">
                        <div className="name"><span>{item.char_id}.</span><Avatar className="image" src={item.img} />{item.name}</div>
                        <p><span className="mobileOnly">Occupation</span>{item.occupation}</p>
                        <p><span className="mobileOnly">Birthday</span>{item.birthday}</p>
                        <p style={{ color: `${statusColor}` }}><span className="mobileOnly">Status</span>{item.status}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default TableCard;
