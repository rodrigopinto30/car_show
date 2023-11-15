'use client'
import React from "react";
import { SearchManufacturer } from "./";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { searchBarProps } from "@/types";

const SearchButton = ({ otherClasses }: {otherClasses:string}) =>{
    return (<button 
        type="submit"
        className={`-ml-3 z-10 ${otherClasses}`}>
            <Image 
                src="/magnifying-glass.svg"
                alt="maginifying glass"
                width={40}
                height={40}
                className="object-contain"
            />
        </button>)
}

const SearchBar =({setManufacturer, setModel}: searchBarProps)=>{

    const [searchManufacturer, setSearchManufacturer] = React.useState('');
    
    const [searchModel, setSearchModel] = React.useState(''); 

    const router = useRouter();

    const handleSearch =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if(searchManufacturer === '' && searchModel === ''){
            alert('please fill in the search car');
        }

        setModel(searchModel); 
        setManufacturer(searchManufacturer);
    }

    return(
        <form 
            className="searchbar"
            onClick={handleSearch}    
        >
            <div className="searchbar__item">
                <SearchManufacturer 
                    selected={searchManufacturer}
                    setSelected={setSearchManufacturer}
                />
                <SearchButton otherClasses="sm:hidden"/>
            </div>
            <div className="searchbar__item">
                <Image 
                    src="/model-icon.png"
                    width={25}
                    height={25}
                    className="absolute w-[20px] h-[20px] ml-4"
                    alt="car model"
                />
                <input 
                    type="text"
                    name="model"
                    value={searchModel}
                    placeholder="Tiguan"
                    onChange={(e)=>setSearchModel(e.target.value)}
                    className="searchbar__input"
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <SearchButton otherClasses="max-sm:hidden" />
        </form> 
    )
}

export default SearchBar;