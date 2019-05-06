import React from "react";
import { Header } from "semantic-ui-react";

export default function Head() {
  return (
    <div>
      <Header as="h1" content="Pokemon" inverted />
      <Header as="h2" content="Which one will you catch?!" inverted />
    </div>
  );
}
