
import localFont from 'next/font/local';
export const sportingGrotesque = localFont({
  src: [
    {
      path: './SportingGrotesque-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './SportingGrotesque-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sporting',
  display: 'swap',
});

export const bwGradual = localFont({
  src: [
    {
      path: './BwGradualDEMO-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './BwGradualDEMO-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-bwgradual',
  display: 'swap',
});
