import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest, response: NextResponse) {
  //   console.log("request", request);

  const userAgent = request.headers.get("user-agent");
  const referer = request.headers.get("referer");
  const ip = request.headers.get("x-forwarded-for");
  let country;
  let countryCode;
  let region;
  let regionName;
  let city;
  let lat;
  let lon;

  try {
    const res = await fetch("http://ip-api.com/json/121.134.31.98");
    const json = await res.json();
    country = json.country;
    countryCode = json.countryCode;
    region = json.region;
    regionName = json.regionName;
    city = json.city;
    lat = json.lat;
    lon = json.lon;
  } catch (err) {
    console.error(err);
    NextResponse.next();
  }

  console.log("referer", referer);
  console.log("ip", ip);
  console.log("country", country);
  console.log("countryCode", countryCode);
  console.log("region", region);
  console.log("regionName", regionName);
  console.log("city", city);
  console.log("lat", lat);
  console.log("city", city);
  console.log("lon", lon);

  return NextResponse.redirect(
    new URL(
      `https://collagenboost.kr?referer=${referer}&userAgent=${userAgent}&ip=${ip}&country=${country}&countryCode=${countryCode}&region=${region}&regionName=${regionName}&city=${city}&lat=${lat}&lon=${lon}`,
      request.url
    )
  );
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
