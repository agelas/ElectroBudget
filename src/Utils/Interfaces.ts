import React from "react";

export interface PayCheckContextType {
    payCheckOffset: number;
    setPayCheckOffset: React.Dispatch<React.SetStateAction<number>>;
}