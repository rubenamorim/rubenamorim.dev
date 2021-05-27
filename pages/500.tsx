import PageWrapper from 'components/page-wrapper/PageWrapper';
import Error from 'components/error/Error';

const host = process.env.NEXT_PUBLIC_HOST;

const GenericError: React.FC = () => {
    return (
        <PageWrapper>
            <Error title="Oops, an unexpected error occurred!" href={host} />
        </PageWrapper>
    );
};

export default GenericError;
