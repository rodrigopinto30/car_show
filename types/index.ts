import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    // El simbolo '?' indica que el campo es opcional.
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}