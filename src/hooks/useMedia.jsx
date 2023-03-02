import { useEffect, useState } from "react";

export const useMedia = () => {
    const [width, setWidth] =  useState(0);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        updateDimensions()
    })

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        console.log(width)
        return () => window.removeEventListener("resize", updateDimensions);
    }, [width])
    return width
}