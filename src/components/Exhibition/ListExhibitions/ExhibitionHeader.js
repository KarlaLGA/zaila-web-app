import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const ExhibitionHeader = () => {

    const dispatch = useDispatch();

    const filterSelected = useSelector(state => state.exhibition.filterSelected);

    const filters = [
        {
            status: 'current'
        }, {
            status: 'future'
        }, {
            status: 'past'
        }
    ];

    return (
        <div className="section-header section-header-exhibition">
            <h2 className="section-title">Exhibitions</h2>

            <div className="filters">
                {filters.map(filter => (
                    <div
                        onClick={() => dispatch({type: 'SET_EXHIBITION_FILTER', payload: filter.status})}
                        key={filter.status}
                        className={filterSelected === filter.status
                        ? "filter-title selected"
                        : "filter-title"}>
                        {filter.status}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ExhibitionHeader