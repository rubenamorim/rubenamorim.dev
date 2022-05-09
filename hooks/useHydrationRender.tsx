import React, { createContext, useState, useEffect, useContext } from 'react';

interface PropTypes {
    children?: React.ReactNode;
}

export const HydrationRenderContext = createContext<boolean>(true);

export const HydrationRenderProvider: React.FC<PropTypes> = (props) => {
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
