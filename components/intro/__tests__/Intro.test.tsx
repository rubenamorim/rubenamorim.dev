import { render, screen } from '@testing-library/react';

import Intro from '../Intro';

describe('Intro', () => {
    it('should render correctly', () => {
        const { container } = render(<Intro />);

        expect(screen.getByText(/Hey/)).toBeInTheDocument();
        expect(screen.getByText(/I’m Ruben,/)).toBeInTheDocument();
        expect(screen.getByText(/Software Engineer/)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
