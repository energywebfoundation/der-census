import {rankWith, scopeEndsWith, hasType, uiTypeIs} from '@jsonforms/core'
import * as schema from './schema.json'

export default rankWith(
  3, //increase rank as needed
  uiTypeIs('Rating')
);
