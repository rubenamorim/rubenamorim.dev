import {
    useState,
    useCallback,
    useEffect,
    useContext,
    createContext,
} from 'react';

import { useHydrationRender } from './useHydrationRender';

const BREAKPOINTS = {
    extraSmall: '(max-width: 767px)',
    small: '(min-width: 768px) and (max-width: 1023px)',
    medium: '(min-width: 1024px) and (max-width: 1439px)',
    large: '(min-width: 1440px)',
    gteSmall: '(min-width: 768px)',
    gteMedium: '(min-width: 1024px)',
    lteSmall: '(max-width: 1023px)',
    lteMedium: '(max-width: 1439px)',
};

type ViewportContextTypes = Record<keyof typeof BREAKPOINTS, boolean>;

const matchers: {
    name: keyof typeof BREAKPOINTS;
    query: MediaQueryList | undefined;
}[] = Object.entries(BREAKPOINTS).map(([breakpoint, query]) => ({
    name: breakpoint as keyof typeof BREAKPOINTS,
    query:
        typeof window !== 'undefined' ? window?.matchMedia(query) : undefined,
}));

export const ViewportContext = createContext<Partial<ViewportContextTypes>>({});

export const ViewportProvider: React.FC = (props) => {
    const isHydrationRender = useHydrationRender();

    const [breakpoints, setBreakpoints] = useState({});

    const update = useCallback(() => {
        setBreakpoints(
            matchers.reduce(
                (accum, { name, query }) => ({
                    ...accum,
                    [name]: !!query?.matches,
                }),
                {} as ViewportContextTypes
            )
        );
    }, []);

    useEffect(() => {
        update();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isHydrationRender]);

    useEffect(() => {
        matchers.forEach(({ query }) => {
            query?.addEventListener?.('change', update);
        });

        return (): void => {
            matchers.forEach(({ query }) => {
                query?.removeEventListener?.('change', update);
            });
        };
    }, [update]);

    return <ViewportContext.Provider value={breakpoints} {...props} />;
};

export const useViewport = (): Partial<ViewportContextTypes> => {
    return useContext(ViewportContext);
};

export default useViewport;
