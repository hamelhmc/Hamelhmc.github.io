import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFile } from 'node:fs/promises';
import * as path from 'node:path';

export const GET = async () => {
  const [fontRegular, fontSemiBold, fontExtraBold, imageBuffer] = await Promise.all([
    readFile(path.join(process.cwd(), 'node_modules/@fontsource/onest/files/onest-latin-400-normal.woff')),
    readFile(path.join(process.cwd(), 'node_modules/@fontsource/onest/files/onest-latin-600-normal.woff')),
    readFile(path.join(process.cwd(), 'node_modules/@fontsource/onest/files/onest-latin-800-normal.woff')),
    readFile(path.join(process.cwd(), 'src/assets/hmc.png'))
  ]);

  const imageBase64 = `data:image/png;base64,${imageBuffer.toString('base64')}`;

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F9FAFB', // gray-50
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.1) 0%, rgba(255, 255, 255, 0) 50%)',
          fontFamily: 'Onest',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(229, 231, 235, 1)', // gray-200
                borderRadius: '24px',
                padding: '40px 80px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              },
              children: [
                {
                  type: 'img',
                  props: {
                    src: imageBase64,
                    width: 140,
                    height: 140,
                    style: {
                      borderRadius: '24px',
                      marginRight: '48px',
                      border: '1px solid rgba(20, 184, 166, 0.2)', // primary-200 equivalent
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    },
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                    },
                    children: [
                      {
                        type: 'h1',
                        props: {
                          children: 'Hamilton Mercado',
                          style: {
                            fontSize: '56px',
                            fontWeight: 800,
                            margin: '0 0 8px 0',
                            color: '#111827', // gray-900
                            letterSpacing: '-0.025em',
                          },
                        },
                      },
                      {
                        type: 'p',
                        props: {
                          children: 'Frontend Developer', // Updated text slightly closer to title
                          style: {
                            fontSize: '28px',
                            color: '#0D9488', // primary-600
                            margin: '0 0 16px 0',
                            fontWeight: 600,
                          },
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            display: 'flex',
                            gap: '12px',
                            alignItems: 'center',
                          },
                          children: [
                            {
                              type: 'span',
                              props: {
                                children: 'Angular',
                                style: {
                                  fontSize: '18px',
                                  padding: '4px 12px',
                                  backgroundColor: '#FEF2F2',
                                  color: '#DC2626',
                                  borderRadius: '999px',
                                  marginRight: '8px',
                                }
                              }
                            },
                            {
                              type: 'span',
                              props: {
                                children: 'Vue',
                                style: {
                                  fontSize: '18px',
                                  padding: '4px 12px',
                                  backgroundColor: '#ECFDF5',
                                  color: '#059669',
                                  borderRadius: '999px',
                                  marginRight: '8px',
                                }
                              }
                            },
                            {
                              type: 'span',
                              props: {
                                children: 'TypeScript',
                                style: {
                                  fontSize: '18px',
                                  padding: '4px 12px',
                                  backgroundColor: '#EFF6FF',
                                  color: '#2563EB',
                                  borderRadius: '999px',
                                }
                              }
                            }
                          ]
                        }
                      }
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    } as any,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Onest',
          data: fontRegular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Onest',
          data: fontSemiBold,
          style: 'normal',
          weight: 600,
        },
        {
          name: 'Onest',
          data: fontExtraBold,
          style: 'normal',
          weight: 800,
        },
      ],
    }
  );

  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(pngBuffer as any, {
    headers: {
      'Content-Type': 'image/png',
    },
  });
};

