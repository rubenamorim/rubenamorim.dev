import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../Button';

describe('Button', () => {
    it('should render correctly', () => {
        const { container } = render(<Button>Hello</Button>);

        expect(container.firstChild).toBeInTheDocument();
    });

    it('should call the function passed on click', () => {
        const mockFn = jest.fn();

        const { getByText } = render(<Button onClick={mockFn}>Hello</Button>);

        userEvent.click(getByText('Hello'));

        expect(mockFn).toHaveBeenCalled();
    });
});
