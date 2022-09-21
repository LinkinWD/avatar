import { createContext, useContext, useRef, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
	//scrollauksen kohta kohta header napissa ja main osiossa.
	const scrollRef = useRef(null);

	//sidebar tila
	const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);

	//minä osion puolen valinta
	const [ turning, setTurning ] = useState(false);

	//sidebar
	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	//tekstin kääntö
	const side = () => {
		setTurning(!turning);
	};
	return (
		<AppContext.Provider
			value={{ scrollRef, isSidebarOpen, toggleSidebar, closeSidebar, turning, setTurning, side }}
		>
			{children}
		</AppContext.Provider>
	);
}

//custom hook
export const useGlobalContext = () => useContext(AppContext);
