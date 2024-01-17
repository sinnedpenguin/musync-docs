import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  logo: <strong>Musync!</strong>,
  project: {
    link: 'https://github.com/sinnedpenguin/musync-docs',
  },
  docsRepositoryBase: 'https://github.com/sinnedpenguin/musync-docs/tree/main',
  footer: {
    text: `© ${new Date().getFullYear()} sinnedpenguin. All Rights Reserved.`,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    const titleTemplate = asPath !== '/' ? '%s – Musync!' : 'Musync!';

    return {
      titleTemplate,
    };
  },
};

export default config;
