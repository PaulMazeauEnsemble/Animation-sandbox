'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import { frFRLocale } from "@sanity/locale-fr-fr";

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool(),
    frFRLocale(),
    visionTool(),
  ],
})
