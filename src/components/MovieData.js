import React from 'react';

const MovieData =(props)=>{
    return <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Movie</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Duration</th>
                    </tr>
                </thead>
                <tbody>
                {props.data && props.data.length?  props.data.map((item,i)=>{
                    return  <tr>
                                <td scope="row">{item.movieName}</td>
                                <td>{item.rating}</td>
                                <td>{item.duration}</td>
                            </tr>
                }):
                            <tr>
                                <td colSpan="3" className="text-center">{"No data Available"}</td>
                            </tr>
                }
                </tbody>

            </table>

    </>
}

export default MovieData;