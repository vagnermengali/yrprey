import Collections from '@/components/Routes/Shop/Collections';
import SEO from '@/components/SEO';
import { useRouter } from 'next/router';

const CollectionPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const capitalizedId = Array.isArray(id) ? id.join('') : id || '';
  const capitalizedIdWithFirstLetterUpperCase = capitalizedId.charAt(0).toUpperCase() + capitalizedId.slice(1);

  return (
    <>
      <SEO
        title={`Collection ${capitalizedIdWithFirstLetterUpperCase} • YRPrey`}
        description={`Get to know a little more about our red collection ${capitalizedIdWithFirstLetterUpperCase}!`}
      />
      <Collections />
    </>
  );
};

export default CollectionPage;
