import DesktopHeader from './components/desktop-header/DesktopHeader';
import MobileHeader from './components/mobile-header/MobileHeader';

import { useHydrationRender } from 'hooks/useHydrationRender';
import { useViewport } from 'hooks/useViewport';

const Header: React.FC = () => {
    const isHydrationRender = useHydrationRender();
    const { gteMedium } = useViewport();

    return (
        <header className="fixed z-10 w-full flex justify-end items-center p-6 sm:p-8">
            {(!gteMedium || isHydrationRender) && (
                <MobileHeader className="md:hidden" />
            )}
            {(gteMedium || isHydrationRender) && (
                <DesktopHeader className="hidden md:block" />
            )}
        </header>
    );
};

export default Header;
