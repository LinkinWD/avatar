import { createContext, useContext, useRef } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
	const scrollRef = useRef(null);

	return <AppContext.Provider value={{ scrollRef }}> {children}</AppContext.Provider>;
}

export const useGlobalContext = () => useContext(AppContext);
