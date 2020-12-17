import React from 'react';

export const SearchFilter=(props)=>{
    const {searchValue,handleSearch}=props;
    return <div className="form-group">
        <label>Search</label>
        <input className="form-control" type="text" onChange={handleSearch} placeholder="search" searchValue={searchValue}/>
    </div>
}