import ExternalLink from 'components/external-link/ExternalLink';

interface PropTypes {
    className?: string;
}

const Intro: React.FC<PropTypes> = ({ className }) => {
    return (
        <div className={className}>
            <h1 className="text-center md:text-left">
                Hey{' '}
                <span
                    role="img"
                    aria-label="Hello"
                    className="inline-block origin-bottom-right animate-wave md:animate-none md:hover:animate-wave md:focus:animate-wave"
                >
                    👋🏻
                </span>{' '}
                I’m Ruben,
                <br />
                Software Engineer
            </h1>
            <p className="text-justify mt-12">
                From{' '}
                <ExternalLink
                    href="https://visitporto.travel/"
                    className="hover:text-porto focus:text-porto transition-colors"
                >
                    Porto, Portugal
                </ExternalLink>{' '}
                to the world, I’m passionate about building things for the web.
                I love my profession, which I always wanted to be since I was a
                child and as a child I constantly try to learn new things and
                improve myself every day. Currently, I’m working for{' '}
                <ExternalLink
                    href="https://www.plex.tv/"
                    className="hover:text-yellow focus:text-yellow transition-colors"
                >
                    Plex
                </ExternalLink>
                .
            </p>
        </div>
    );
};

export default Intro;
