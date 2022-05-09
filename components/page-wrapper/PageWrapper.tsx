import cx from 'classnames';

interface PropTypes {
    className?: string;
    children: React.ReactNode;
}

const PageWrapper: React.FC<PropTypes> = ({ children, className }) => {
    return (
        <main
            className={cx(
                'flex justify-center items-center p-6 sm:p-8 w-full max-w-screen-lg mx-auto',
                className
            )}
        >
            {children}
        </main>
    );
};

export default PageWrapper;
