import React , {useState} from 'react'
import SearchIcon from './search.svg';



const SearchInput = ({onSearch}) => {
    const [input , setInput] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        onSearch(input);
    };
  return (
    <div className="search">
       <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search for a country"
            value={input}
            onChange={(e) =>setInput(e.target.value)}
            onKeyPress={(e)=>{
              if (e.key==="Enter"){
                onSearch(input);
              }
            }}
            />
        </form>
           <img src={SearchIcon}
            alt="search"
            onClick = {()=> onSearch(input)  }
            />

    </div>

  )
}

export default SearchInput
