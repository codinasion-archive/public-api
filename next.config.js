const theme = require("shiki/themes/dark-plus.json");
const { remarkCodeHike } = require("@code-hike/mdx");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          theme,
          lineNumbers: false,
          showCopyButton: true,
          autoImport: true,
          skipLanguages: ["mermaid"],
        },
      ],
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  api: {
    bodyParser: true,
  },
};

module.exports = withMDX(nextConfig);
