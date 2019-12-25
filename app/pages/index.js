import React from "react";
import Head from "next/head";
import algoliasearch from "algoliasearch/lite";
import { findResultsState } from "react-instantsearch-dom/server";
import qs from "qs";

import { Search } from "../components/Search/Search";

const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
);

function Home({ resultsState, searchState }) {
  return (
    <div>
      <Head>
        <title>Ultimate Pokedex | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Search
        searchClient={searchClient}
        indexName={process.env.ALGOLIA_INDEX_NAME}
        resultsState={resultsState}
        searchState={searchState}
      />
    </div>
  );
}

Home.getInitialProps = async ({ asPath }) => {
  const searchState = qs.parse(asPath.replace(/^\/?\?/g, ""));
  const resultsState = await findResultsState(Search, {
    searchClient,
    indexName: process.env.ALGOLIA_INDEX_NAME,
    searchState
  });

  return {
    resultsState,
    searchState
  };
};

export default Home;
