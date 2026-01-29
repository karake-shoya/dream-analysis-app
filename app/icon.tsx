import { ImageResponse } from 'next/og';

// サーバーサイド（Edge）で実行するための設定
export const runtime = 'edge';

// 画像のサイズ
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: '#0B0B10',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '20%',
          fontWeight: 800,
          fontFamily: 'sans-serif',
          lineHeight: 0.8,
        }}
      >
        <div style={{ display: 'flex', marginTop: '-2px' }}>Y</div>
        <div style={{ display: 'flex', marginTop: '-4px' }}>I</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
