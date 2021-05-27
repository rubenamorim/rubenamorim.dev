import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Avatar from '../Avatar';

import { HydrationRenderProvider } from 'hooks/useHydrationRender';
import { ViewportProvider } from 'hooks/useViewport';

const Wrapper: React.FC = ({ children }) => {
    return (
        <HydrationRenderProvider>
            <ViewportProvider>{children}</ViewportProvider>
        </HydrationRenderProvider>
    );
};

describe('Avatar', () => {
    it('should render correctly', () => {
        const { container } = render(<Avatar />, { wrapper: Wrapper });

        expect(screen.getByAltText("Ruben's avatar")).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it('should apply styles when moving the mouse', async () => {
        const { container } = render(<Avatar />, { wrapper: Wrapper });

        fireEvent.mouseMove(container, { clientX: 100, clientY: 100 });

        await waitFor(() => {
            expect(screen.getByAltText("Ruben's avatar")).toHaveStyle(
                'transform: perspective(250px) scale(1.1) rotateX(9.244791666666668deg) rotateY(-10.05859375deg);'
            );
        });
    });
});
