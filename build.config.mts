import { defineConfig } from "@ice/pkg";

// https://pkg.ice.work/reference/config/
export default defineConfig({
  plugins: [
    [
      "@ice/pkg-plugin-docusaurus",
      {
        host: "localhost",
        title: "react-color-beauty-picker",
        navBarTitle: "react-color-beauty-picker",
        baseUrl: "/react-colors",
      },
    ],
  ],
});
