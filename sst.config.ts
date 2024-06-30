import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "idream-webapp",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        environment: {
          NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL as string,
          AUTH0_SECRET: process.env.AUTH0_SECRET as string,
          AUTH0_BASE_URL: process.env.AUTH0_BASE_URL as string,
          AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL as string,
          AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID as string,
          AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET as string,
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
