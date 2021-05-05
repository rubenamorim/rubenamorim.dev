import { render, screen } from '@testing-library/react';

import Footer from '../Footer';

describe('Footer', () => {
    it('should render correctly', () => {
        const { container } = render(<Footer />);

        expect(
            screen.getByLabelText('Send an email to Ruben')
        ).toBeInTheDocument();
        expect(
            screen.getByLabelText("Open Ruben's LinkedIn profile")
        ).toBeInTheDocument();
        expect(
            screen.getByLabelText("Open Ruben's Twitter profile")
        ).toBeInTheDocument();
        expect(
            screen.getByLabelText("Open Ruben's Github profile")
        ).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
