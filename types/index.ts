import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    // El simbolo '?' indica que el campo es opcional.
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDiseabled?: boolean;
}

export interface SearchManufacturerProps {
    selected: string;
    setSelected: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}

export interface OptionPros{
    title: string;
    value:string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionPros[];
    setFilter: (filter: string )=> void;
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (limit:number)=>void;
}

export interface searchBarProps {
    setManufacturer: (searchModel: string)=> void;
    setModel: (setModel: string)=> void;
}

export interface HomeProps {
    searchParams: FilterProps;
}