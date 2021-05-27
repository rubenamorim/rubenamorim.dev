import cx from 'classnames';

import { BurgerMenu } from 'components/icons';

interface PropTypes {
    className?: string;
}

const MobileHeader: React.FC<PropTypes> = ({ className }) => {
    return (
        <button
            className={cx(
                'p-0 bg-transparent rounded-none text-4xl text-blue relative soon cursor-not-allowed opacity-50',
                className
            )}
            disabled
            aria-label="Open the menu soon"
            aria-expanded="false"
            data-after="🚧"
        >
            <BurgerMenu />
        </button>
    );
};

export default MobileHeader;
