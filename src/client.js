import sanityClient from '@sanity/client'
import imageUrlBulider from '@sanity/image-url'

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PORJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
})

const builder = imageUrlBulider(client)
export const urlFor = (source) => builder.image(source)
