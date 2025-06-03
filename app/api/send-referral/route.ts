import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, link, msg, mode } = body;

    // バリデーション
    if (!name || !msg) {
      return NextResponse.json(
        { error: 'お名前とメッセージは必須です' },
        { status: 400 }
      );
    }

    // IPアドレスの取得（Next.js 13以降）
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0] || request.headers.get('x-real-ip') || 'unknown';

    // メール内容の構成
    const subject = `【紹介フォーム】${mode === 'friend' ? '友達紹介' : '自己紹介'}: ${name}`;
    const emailBody = `
=== 友達紹介フォーム ===

お名前: ${name}
紹介モード: ${mode === 'friend' ? '友達紹介' : '自分が興味ある'}
${link ? `リンク/SNS: ${link}` : ''}

メッセージ:
${msg}

送信日時: ${new Date().toLocaleString('ja-JP')}
送信元IP: ${ip}
    `.trim();

    // 本来ここでメール送信処理を行います
    // 例: SendGrid, AWS SES, Nodemailer など
    console.log('=== 受信した紹介フォーム ===');
    console.log('宛先:', 'kino@athearth.com');
    console.log('件名:', subject);
    console.log('本文:', emailBody);
    console.log('================================');

    // 成功レスポンスを返す（実際のメール送信後）
    return NextResponse.json({
      success: true,
      message: 'お問い合わせを受信しました！',
      data: {
        name,
        mode,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('API エラー:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}

// CORS対応
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
} 