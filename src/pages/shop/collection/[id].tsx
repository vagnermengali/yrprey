import Collections from '@/components/Routes/Shop/Collections';
import { useRouter } from 'next/router';

const CollectionPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
        <Collections/>
    </>
  );
};

export default CollectionPage;