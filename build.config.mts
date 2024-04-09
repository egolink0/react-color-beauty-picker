import { defineConfig } from "@ice/pkg";

// https://pkg.ice.work/reference/config/
export default defineConfig({
  plugins: [
    [
      "@ice/pkg-plugin-docusaurus",
      {
        host: "localhost",
        title: "react-colors-picker",
        navBarTitle: "react-colors-picker",
        baseUrl: "/react-colors",
      },
    ],
  ],
});
