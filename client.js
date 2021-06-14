const sanityClient = require('@sanity/client')
export default sanityClient({
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATASET,
    apiVersion: process.env.API_VERSION, // use current UTC date - see "specifying API version"!
    token: process.env.TOKEN, // or leave blank for unauthenticated usage
    useCdn: process.env.USE_CDN, // `false` if you want to ensure fresh data
})

