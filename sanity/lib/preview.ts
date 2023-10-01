"use client"

import { definePreview } from "next-sanity/preview";
import { apiVersion, dataset, projectId, useCdn } from '../env';

function onPublicAccessOnly() {
    throw new Error(`Unable to load preview as you're not logged in`);
}

if (!projectId || !dataset) {
    throw new Error(
        `Missing projectId or dataset. Check your sanity.json or .env files`
    )
}

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
});