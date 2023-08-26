import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Iframe from 'react-iframe'

export const metadata = genPageMetadata({ title: 'Tier List' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <Iframe
        url="https://docs.google.com/spreadsheets/d/e/2PACX-1vTPetJokA3x5mZmN_7AOYSRIx2G6UIf4GCSd_f4LDrV6Svfj61J57Eoz-X_cs6WzkxYpOoT4CrGY4iY/pubhtml?widget=false&amp;headers=false"
        width="100%"
        height="100%"
        id=""
        className=""
        display="block"
        position="relative"
        styles={{ height: '500px' }}
      />
    </>
  )
}
