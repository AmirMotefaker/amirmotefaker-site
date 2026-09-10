const key = "d292034187738bc1bd6f36a8405bc819";

export const dynamic = "force-static";

export function GET() {
  return new Response(key, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
