import { Email, LinkedIn, Github, Twitter } from 'components/icons';

const LINKS = [
    {
        id: 'email',
        url: 'mailto:me@rubenamorim.dev?body=Hey%20%F0%9F%91%8B%0D%0A',
        title: 'Email',
        label: 'Send an email to Ruben',
        icon: Email,
    },
    {
        id: 'linkedin',
        url: 'https://www.linkedin.com/in/rubenamorim/',
        title: 'LinkedIn',
        label: "Open Ruben's LinkedIn profile",
        icon: LinkedIn,
    },
    {
        id: 'twitter',
        url: 'https://twitter.com/rubentamorim',
        title: 'Twitter',
        label: "Open Ruben's Twitter profile",
        icon: Twitter,
    },
    {
        id: 'github',
        url: 'https://github.com/rubenamorim',
        title: 'Github',
        label: "Open Ruben's Github profile",
        icon: Github,
    },
];

const Footer: React.FC = () => {
    return (
        <footer className="h-28 flex justify-center items-center md:h-40">
            <nav aria-label="Social navigation">
                <ul className="flex flex-row text-4xl text-blue md:text-5xl">
                    {LINKS.map(({ id, label, url, title, icon: Icon }) => (
                        <li key={id} className="mr-14 last:mr-0">
                            <a
                                href={url}
                                aria-label={label}
                                title={title}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                <Icon />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
