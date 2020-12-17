import './App.css';
import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import MovieForm from './components/MovieForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchFilter } from './components/SearchFilter';
import MovieData from './components/MovieData';
import {setMovieRecord} from './redux/action';
function App() {
  const movieData=useSelector(state=>state.data)

  const dispatch=useDispatch();
  const [values,setValues]=useState({});
    const [data,setData]=useState([]);
    const [searchValue,setSearch]=useState('');
  const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(setMovieRecord(values));
    setValues({});
  }
  const handleFilterData=(val)=>{
    if(val.length){
      setData(movieData.filter((movie,i)=>{
        return val===movie.movieName.slice(0,val.length)
    }));
    }
    else{setData(movieData)}
  }
  const handleSearch=(e)=>{
    setSearch(e.target.value);
    handleFilterData(e.target.value)
  }
  useEffect(()=>{
    handleFilterData(searchValue)
  },[movieData])
  console.log(data,"jjjjjjjj")
  return (
    <div className="App">
      <main className="container py-5">
        <div className="row">
          <div className="col-sm-8 m-auto">
          <MovieForm handleChange={handleChange} handleSubmit={handleSubmit} values={values}/>
          <SearchFilter handleSearch={handleSearch} searchValue={searchValue}/>
          <MovieData data={data}/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
