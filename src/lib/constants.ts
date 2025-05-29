

const PRODUCTION_DOMAIN = "https://auth-dyxn.vercel.app";
const DEVELOPMENT_DOMAIN = "http://localhost:3000";

export const BETTER_AUTH_URL = process.env.NODE_ENV === 'production' 
? PRODUCTION_DOMAIN 
: DEVELOPMENT_DOMAIN;


export const NEXT_PUBLIC_API_URL = process.env.NODE_ENV === 'production' 
? PRODUCTION_DOMAIN 
: DEVELOPMENT_DOMAIN;