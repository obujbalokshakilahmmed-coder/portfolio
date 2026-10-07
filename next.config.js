/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // এটি আপনার Next.js অ্যাপটিকে স্ট্যাটিক এইচটিএমএলে রূপান্তর করবে ভাই
  images: {
    unoptimized: true, // গিটহাবে আপনার ছবিগুলোকে ক্র্যাশ হওয়া থেকে রক্ষা করবে ভাই
  },
};

module.exports = nextConfig;
