import { createContext, useContext, useRef, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
	const scrollRef = useRef(null);
	const [ isSidebarOpen, setIsSidebarOpen ] = useState(true);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	return (
		<AppContext.Provider value={{ scrollRef, isSidebarOpen, toggleSidebar, closeSidebar }}>
			{children}
		</AppContext.Provider>
	);
}

//custom hook
export const useGlobalContext = () => useContext(AppContext);
