import React, { useState, useEffect } from "react";
import Page from "../components/pages";
import styled from "styled-components";
import MembersOfParliamentButton from "../components/membersOfParliamentButton";
import MPList from "../components/MPList";
import Link from "next/link";
import Hero from "../components/Hero";

const PageContainer = styled.div`
  margin: 0 auto;
  width: 60rem;
  height: 10rem;
  text-align: center;
`;

const PersonCard = props => (
  <li>
    <Link href={`/{$props.name}`}>
      <a>
        <div>card should go here</div>
      </a>
    </Link>
  </li>
);

const propIncludesString = (prop, string, obj) =>
  obj[prop] && obj[prop].toLowerCase().includes(string.toLowerCase());

const MEMBERS_OF_PARLIAMENT_JSON_ADDRESS =
  "https://hello-politician.s3-ap-southeast-2.amazonaws.com/members-of-parliament-cleaned.json";

const CORS_FETCH_SETTINGS = {
  method: "GET",
  mode: "cors",
  headers: { "Content-Type": "application/json" }
};

const retrieveMembersOfParliament = async () => {
  let rawResponse = await fetch(
    MEMBERS_OF_PARLIAMENT_JSON_ADDRESS,
    CORS_FETCH_SETTINGS
  );
  let response = await rawResponse.json();
  return response;
};

const filterSearchResults = searchStr => obj => {
  return (
    propIncludesString("Contact", searchStr, obj) ||
    propIncludesString("Electorate", searchStr, obj) ||
    propIncludesString("Party", searchStr, obj)
  );
};

const Index = () => {
  const [mpList, setMpList] = useState([]);

  useEffect(() => {
    retrieveMembersOfParliament().then(res => {
      setMpList(res);
    });
  }, [retrieveMembersOfParliament]);

  const getSearchResults = searchStr => {
    retrieveMembersOfParliament().then(res => {
      const results = res.filter(filterSearchResults(searchStr));
      setMpList(results);
    });
  };

  return (
    <Page>
      <Hero getSearchResults={getSearchResults} />
      <PageContainer>
        <MPList mpList={mpList} />
        <MembersOfParliamentButton />
      </PageContainer>
    </Page>
  );
};

export default Index;
