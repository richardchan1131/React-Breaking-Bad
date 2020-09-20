import React, { useState } from 'react'
import TableCard from './TableCard'
import Paginator from './Paginator'

const Table = ({ items, isLoading }) => {
    const [showPerPage, setShowPerPage] = useState(10);
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    });

    const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end })
    };
    return isLoading ? (
        //spinner
        <div className="spinner">
            <div className="loader" />
        </div>
    ) : (
        <div>
            {/* list card */}
            <div className="cardBackground">

                {/* table title */}
                <div className="tableCard-heading">
                    <div className="tableCard-body">
                        <div className="tableCard-content">
                            <p className="name">Name</p>
                            <p>Occupation</p>
                            <p>Birthday</p>
                            <p>Status</p>
                        </div>
                    </div>
                </div>

                {/* table list mapped from items from the api */}
                {items.slice(pagination.start, pagination.end).map(item => (
                    <TableCard
                        key={item.char_id}
                        item={item}
                    />
                ))}

            </div>

            {/* paginator which allows pagination */}
            <Paginator total={items.length} showPerPage={showPerPage} onPaginationChange={onPaginationChange} />
        </div>

    )
}

export default Table;
