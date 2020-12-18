import React from 'react';

export const SearchFilter = (props) => {
    const { searchvalue, handleSearch } = props;
    return <div className="form-group">
        <label>Search</label>
        <input className="form-control" type="text" onChange={handleSearch} placeholder="search" value={searchvalue} />
    </div>
}