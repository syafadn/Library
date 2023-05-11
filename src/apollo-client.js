import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri : 'https://manage-library.hasura.app/v1/graphql',
    cache : new InMemoryCache(),
    headers : {
         'x-hasura-admin-secret':'v17oPb6lQtJvBghsGDzNEvfTousGPluvtkvwUGkDiPsXVDLVy32hD92hY6FXlhDr'
    }
})
export default client