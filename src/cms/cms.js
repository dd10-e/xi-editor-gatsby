import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/blog-post-preview'

CMS.registerPreviewTemplate('blog', BlogPostPreview)
