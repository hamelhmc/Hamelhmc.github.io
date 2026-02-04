import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFile } from 'node:fs/promises';
import * as path from 'node:path';

export const GET = async () => {
  const onestFont = await fetch('https://cdn.jsdelivr.net/fontsource/fonts/onest@latest/latin-400-normal.ttf').then(res => res.arrayBuffer());

  const imageBuffer = await readFile(path.join(process.cwd(), 'src/assets/hmc.png'));
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
          backgroundColor: '#0A0A0F',
          backgroundImage: 'radial-gradient(circle at 50% 50%, #14B8A6 0%, #0A0A0F 50%)',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#12121A', // Surface color
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                padding: '40px 60px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              },
              children: [
                {
                  type: 'img',
                  props: {
                    src: imageBase64,
                    width: 120,
                    height: 120,
                    style: {
                      borderRadius: '50%',
                      marginRight: '40px',
                      border: '4px solid #14B8A6',
                    },
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      color: 'white',
                    },
                    children: [
                      {
                        type: 'h1',
                        props: {
                          children: 'Hamilton Mercado',
                          style: {
                            fontSize: '48px',
                            fontWeight: 800,
                            margin: '0 0 10px 0',
                            background: 'linear-gradient(to right, #2DD4BF, #F0FDFA)',
                            backgroundClip: 'text',
                            color: 'transparent',
                          },
                        },
                      },
                      {
                        type: 'p',
                        props: {
                          children: 'Desarrollador Custom & Full Stack',
                          style: {
                            fontSize: '24px',
                            color: '#A1A1AA',
                            margin: 0,
                          },
                        },
                      },
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
          data: onestFont,
          style: 'normal',
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
