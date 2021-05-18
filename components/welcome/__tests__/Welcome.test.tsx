import { render, screen } from '@testing-library/react';

import Welcome from '../Welcome';

describe('Welcome', () => {
    it('should render correctly', () => {
        const { container } = render(<Welcome />);

        expect(screen.getByText(/Hey/)).toBeInTheDocument();
        expect(screen.getByText(/I’m Ruben,/)).toBeInTheDocument();
        expect(screen.getByText(/Software Engineer/)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
