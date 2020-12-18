import React from 'react';

const MovieForm = (props) => {
    const { handleChange, values, handleSubmit } = props;
    return <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Movie Name</label>
            <input type="text"
                name="movieName"
                className="form-control"
                onChange={handleChange}
                required
                value={values.movieName || ""}
            />
        </div>
        <div className="form-group">
            <label>Rating</label>
            <input
                className="form-control"
                type='number'
                name="rating"
                required
                onChange={handleChange}
                value={values.rating || ""}
            />
        </div>
        <div className="form-group">
            <label>Duration</label>
            <input type="number"
                className="form-control"
                type='number'
                name="duration"
                required
                onChange={handleChange}
                value={values.duration || ""}
            />
        </div>
        <div className="form-group">
            <button className="btn btn-primary" type="submit">Submit</button>
        </div>
    </form>
}

export default MovieForm;