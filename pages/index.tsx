import PageWrapper from 'components/page-wrapper/PageWrapper';
import Avatar from 'components/avatar/Avatar';
import Intro from 'components/intro/Intro';

export default function Home() {
    return (
        <PageWrapper className="flex-wrap">
            <Intro className="w-full md:w-1/2 order-1 md:order-0 mb-auto md:mb-0" />
            <Avatar className="w-1/2 md:w-1/4 max-w-sm md:max-w-md mb-12 md:mb-0 mt-auto md:mt-0 order-0 md:order-1 md:ml-32" />
        </PageWrapper>
    );
}
