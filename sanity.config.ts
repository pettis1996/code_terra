import {visionTool} from '@sanity/vision';
import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {apiVersion, dataset, projectId} from './sanity/env';
import {schema} from './sanity/schema';
import { myTheme } from './theme';
import StudioNavbar from "./components/StudioNavbar";
import Logo from "./components/Logo";

export default defineConfig({
  basePath: '/studio',
  name: "Code_Terra_Blog_Studio",
  title: "Code Terra Blog Studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar
    }
  },
  theme: myTheme
})
