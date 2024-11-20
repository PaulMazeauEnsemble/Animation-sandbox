import { type SchemaTypeDefinition } from 'sanity'
import project from '../schemas/project-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project],
}
