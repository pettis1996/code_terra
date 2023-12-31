import 'server-only'

import type {QueryParams} from '@sanity/client'
import {draftMode} from 'next/headers'

import {client} from './client'

import {token} from "../env"

const DEFAULT_PARAMS = {} as QueryParams
const DEFAULT_TAGS = [] as string[]

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string
  params?: QueryParams
  tags: string[]
}): Promise<QueryResponse> {
  const isDraftMode = draftMode().isEnabled
  if (isDraftMode && !token) {
    throw new Error('The `NEXT_PUBLIC_SANITY_API_TOKEN` environment variable is required.')
  }

  return client.fetch<QueryResponse>(query, params, {
    cache: 'force-cache',
    ...(isDraftMode && {
      cache: undefined,
      token: token,
      perspective: 'previewDrafts',
    }),
    next: {
      ...(isDraftMode && {revalidate: 30}),
      tags,
    },
  })
}