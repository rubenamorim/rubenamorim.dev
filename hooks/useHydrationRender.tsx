import { createContext, useState, useEffect, useContext } from 'react';

export const HydrationRenderContext = createContext<boolean>(true);

export const HydrationRenderProvider: React.FC = (props) => {
    const [isHydrationRender, setIsHydrationRender] = useState(true);

    useEffect(() => {
        setIsHydrationRender(false);
    }, []);

    return (
        <HydrationRenderContext.Provider value={isHydrationRender} {...props} />
    );
};

export const useHydrationRender = (): boolean => {
    return useContext(HydrationRenderContext);
};

export default useHydrationRender;
