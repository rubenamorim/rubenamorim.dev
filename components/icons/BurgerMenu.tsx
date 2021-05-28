const BurgerMenu: React.FC = (props) => {
    return (
        <svg viewBox="0 0 22.5 17.5" width="1.26em" height="1em" {...props}>
            <path
                d="M1.833 15.75h19.334M1.833 1.25h19.334H1.833zm0 7.25h19.334H1.833z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default BurgerMenu;
