import {draftMode} from 'next/headers'
import {LiveQuery} from 'next-sanity/preview/live-query'
import DocumentsCount, {query} from '@/components/DocumentsCount'
import PreviewDocumentsCount from '@/components/PreviewDocumentsCount'
import {sanityFetch} from '../../sanity/lib/fetch'
import Posts from '@/components/Posts'
import { postsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from 'next-sanity'

export default async function HomePage() {
  const data = await sanityFetch<number>({query, tags: ['post']});
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery, tags:['post'] });

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={query}
      initialData={data}
      as={PreviewDocumentsCount}
    >
      <DocumentsCount data={data} />
      <Posts posts={posts} />
    </LiveQuery>
  )
}