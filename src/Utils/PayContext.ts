import React from 'react';
import { PayCheckContextType } from './Interfaces';

export const PayContext = React.createContext<PayCheckContextType | null>(null);