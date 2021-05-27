import { useRouter } from 'next/router';

import PageWrapper from 'components/page-wrapper/PageWrapper';
import Error from 'components/error/Error';

const NotFound: React.FC = () => {
    const { push } = useRouter();

    return (
        <PageWrapper>
            <Error
                title="Oops, I didn't find what you were looking for!"
                onClick={() => push('/')}
            />
        </PageWrapper>
    );
};

export default NotFound;
