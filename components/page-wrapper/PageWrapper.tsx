import cx from 'classnames';

interface PropTypes {
    className?: string;
}

const PageWrapper: React.FC<PropTypes> = ({ children, className }) => {
    return (
        <main
            id="siteContent"
            className={cx(
                'flex justify-center items-center p-6 sm:p-8 max-w-screen-lg mx-auto',
                className
            )}
        >
            {children}
        </main>
    );
};

export default PageWrapper;
