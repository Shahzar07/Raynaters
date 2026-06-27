import { NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/seo/meta';
import { LANDING_PAGES } from '@/lib/landing-pages';
import { CASE_STUDIES } from '@/lib/case-studies';
import { RESOURCES } from '@/lib/resources';

const INDEXNOW_KEY = '6d79621f386561a6e0b5bc682280b08f';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

function buildUrlList(): string[] {
  const static_ = ['/', '/book', '/case-studies', '/resources'];
  const landing = LANDING_PAGES.map((p) => `/${p.slug}`);
  const cases = CASE_STUDIES.map((c) => `/case-studies/${c.slug}`);
  const res = RESOURCES.map((r) => `/resources/${r.slug}`);
  return [...static_, ...landing, ...cases, ...res].map(
    (path) => `${SITE_URL}${path === '/' ? '/' : path}`,
  );
}

export async function POST() {
  const urlList = buildUrlList();

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: new URL(SITE_URL).hostname,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: 'IndexNow submission failed', status: response.status },
      { status: 502 },
    );
  }

  return NextResponse.json({ submitted: urlList.length, urls: urlList });
}
