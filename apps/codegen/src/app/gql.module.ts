import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';

const uri = 'http://localhost:3333/graphql';
export interface InterceptHeaders {
  Authorization: string;
  access_token?: string;
  cookie?: any;
  page_index?: number;
}

export function createApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => {
    return {
      headers: {
        Accept: 'charset=utf-8',
      },
    };
  });

  // Get the authentication token from local storage if it exists
  const auth = setContext((operation, context) => {
    const header = {} as InterceptHeaders;
    const accessToken = '';

    if (accessToken !== null) header.access_token = accessToken || '';

    return {
      headers: {
        ...header,
      },
    };
  });

  return {
    link: ApolloLink.from([basic, auth, httpLink.create({ uri })]),
    cache: new InMemoryCache({ addTypename: false }),
    fetchOptions: {
      credentials: 'include',
    },
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all',
      },
    },
  };
}

@NgModule({
  exports: [HttpLinkModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
