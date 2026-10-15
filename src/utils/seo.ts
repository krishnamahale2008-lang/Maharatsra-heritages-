export interface SEOMetadata {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  image?: string;
  publishedTime?: string;
  authorName?: string;
  jsonLd?: Record<string, any>;
  noindex?: boolean;
}

/**
 * Updates document head metadata dynamically for client-side navigation.
 * Uses window.location.origin to resolve canonical URLs without assuming an unverified production domain.
 */
export function updateSEO(meta: SEOMetadata) {
  if (typeof document === 'undefined') return;

  // 1. Page Title
  document.title = meta.title;

  // 2. Meta Description
  let descMeta = document.querySelector('meta[name="description"]');
  if (!descMeta) {
    descMeta = document.createElement('meta');
    descMeta.setAttribute('name', 'description');
    document.head.appendChild(descMeta);
  }
  descMeta.setAttribute('content', meta.description);

  // 3. OpenGraph Tags
  const setMetaProperty = (prop: string, content: string) => {
    let tag = document.querySelector(`meta[property="${prop}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', prop);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  const setMetaName = (name: string, content: string) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', name);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  setMetaProperty('og:title', meta.title);
  setMetaProperty('og:description', meta.description);
  setMetaProperty('og:type', meta.ogType || 'website');

  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const currentPath = meta.canonicalPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
  const fullCanonicalUrl = origin ? `${origin}${currentPath}` : currentPath;

  setMetaProperty('og:url', fullCanonicalUrl);
  if (meta.image) {
    const fullImg = meta.image.startsWith('http') ? meta.image : `${origin}${meta.image}`;
    setMetaProperty('og:image', fullImg);
    setMetaName('twitter:image', fullImg);
  }

  // 4. Twitter Cards
  setMetaName('twitter:card', 'summary_large_image');
  setMetaName('twitter:title', meta.title);
  setMetaName('twitter:description', meta.description);

  // 5. Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', fullCanonicalUrl);

  // 6. Robots Meta Tag (controls indexing; prevents Soft 404s on unknown routes)
  let robotsTag = document.querySelector('meta[name="robots"]');
  if (meta.noindex) {
    if (!robotsTag) {
      robotsTag = document.createElement('meta');
      robotsTag.setAttribute('name', 'robots');
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute('content', 'noindex, nofollow');
  } else if (robotsTag) {
    robotsTag.remove();
  }

  // 7. Schema.org JSON-LD Structured Data
  let scriptTag = document.getElementById('schema-structured-data');
  if (meta.jsonLd) {
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-structured-data';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(meta.jsonLd, null, 2);
  } else if (scriptTag) {
    scriptTag.remove();
  }
}
