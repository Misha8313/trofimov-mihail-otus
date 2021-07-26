import React from "react";
import { Link } from "react-router-dom";

export type Props = {
    city: String;   
}

export const FilterWeatherByDay: React.FC<Props> =({city}) =>{

    return (
        <>
     <span><Link to={`/city/${city}`}>сегодня</Link></span>-
     <span><Link to={`/city/${city}/1`}>завтра</Link></span>-
     <span><Link to={`/city/${city}/2`}>послезавтра</Link></span>-
     <span><Link to={`/city/${city}/3`}>через два дня</Link></span>
    </>
      );

}

