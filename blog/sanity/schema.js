import {blockContent} from './schemaTypes/blockContent'
import {category} from './schemaTypes/category'
import {post} from './schemaTypes/post'
import {author} from './schemaTypes/author'
import {Users} from './schemaTypes/User'

export const schema = {
  types: [post, author, category, blockContent, Users],
}
