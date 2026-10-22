import StudioEditor from "@grapesjs/studio-sdk/react";
import "@grapesjs/studio-sdk/style";
import {
  swiperComponent,
  iconifyComponent,
  canvasGridMode,
} from "@grapesjs/studio-sdk-plugins";
import { semuaBlok } from "./blocks";

export default function App() {
  return (
    <div style={{ height: "100vh" }}>
      <StudioEditor
        options={{
          licenseKey: import.meta.env.VITE_GRAPESJS_LICENSE_KEY,
          blocks: { default: semuaBlok },
          project: {
            type: "web",
            default: {
              pages: [{ name: "Home", component: `<h1>Halaman Baru</h1>` }],
            },
          },
          plugins: [
            swiperComponent?.init({}),
            iconifyComponent.init({
              block: { category: "Extra", label: "Iconify" },
            }),
            canvasGridMode?.init({ styleableGrid: true }),
          ],
        }}
      />
    </div>
  );
}
