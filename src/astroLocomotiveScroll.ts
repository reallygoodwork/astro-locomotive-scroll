import { defineIntegration } from "astro-integration-kit";
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const absoluteStylesPath = resolve(dirname(fileURLToPath(import.meta.url)), 'locomotive-scroll.css')

export const astroLocomotiveScroll = defineIntegration({
  name: "astro-locomotive-scroll",
  setup() {
    return {
      hooks: {
        "astro:config:setup": ({ injectScript }) => {
          injectScript('page', `
            import LocomotiveScroll from 'locomotive-scroll';
            const locomotiveScroll = new LocomotiveScroll();
          `)
          injectScript('page-ssr', JSON.stringify(absoluteStylesPath))
        },
      },
    };
  },
});