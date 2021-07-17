import { HandlerEvent, HandlerContext } from "@netlify/functions";

const handler = (event: HandlerEvent, context: HandlerContext) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ "hello": "world" }),
  };
};

export { handler };
