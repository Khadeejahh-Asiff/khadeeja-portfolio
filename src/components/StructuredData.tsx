import { CONTACT_INFO } from '@/constants';

export const StructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Khadeejah Asif',
    jobTitle: 'Full Stack Developer',
    description:
      'Full Stack Developer skilled in React.js, Next.js, TypeScript, Node.js, and MongoDB. Building responsive, high-performance web applications.',
    url: 'https://khadeeja-portfolio.vercel.app',
    image: 'https://khadeeja-portfolio.vercel.app/me.jpeg',
    sameAs: [CONTACT_INFO.linkedin, CONTACT_INFO.github],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'Pakistan',
    },
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phone,
    knowsAbout: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'JavaScript',
      'Web Development',
      'Frontend Development',
      'Backend Development',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Software Developer',
      occupationLocation: {
        '@type': 'Country',
        name: 'Pakistan',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
