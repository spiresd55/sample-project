import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const dashboard: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    return <div>Request Params {id} </div>
}

export default dashboard;