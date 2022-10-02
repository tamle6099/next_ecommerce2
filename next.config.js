/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  env: {
    BASE_URL: "http://localhost:3000",
    MONGODB_URL:"mongodb://localhost:27017/commerce?retryWrites=true&w=majority",
    ACCESS_TOKEN_SECRET:"2fBa5w7Tf0G#5r6b%^NE",
    REFRESH_TOKEN_SECRET: "PoWk&M%J3gyEX%meS#8VBbs5%m8c9pbHh1*7TIxxvRjBpGmtwQ"
  },
};
