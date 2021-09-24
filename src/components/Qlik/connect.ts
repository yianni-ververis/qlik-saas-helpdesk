import enigma from "enigma.js";
import schema from "enigma.js/schemas/12.170.2.json";

interface connectProp {
  webIntegrationId: string;
  url: string;
  appId?: string;
}

interface appProp {
  host: string;
  appId: string;
  headers: {
    "qlik-web-integration-id": string;
    "qlik-csrf-token": string;
  };
}

async function getQCSHeaders({ webIntegrationId, url }: connectProp) {
  const response = await fetch(`${url}/api/v1/csrf-token`, {
    credentials: "include",
    headers: { "qlik-web-integration-id": webIntegrationId },
  });
  if (response.status === 401) {
    const loginUrl = new URL(`${url}/login`);
    loginUrl.searchParams.append("returnto", window.location.href);
    loginUrl.searchParams.append("qlik-web-integration-id", webIntegrationId);
    window.location.href = loginUrl;
    return undefined;
  }
  const csrfToken = new Map(response.headers).get("qlik-csrf-token");
  return {
    "qlik-web-integration-id": webIntegrationId,
    "qlik-csrf-token": csrfToken,
  };
}

async function getEnigmaApp({ host, appId, headers }: appProp) {
  const params = Object.keys(headers)
    .map((key) => `${key}=${headers[key]}`)
    .join("&");

  const enigmaGlobal = await enigma
    .create({
      schema,
      url: `wss://${host}/app/${appId}?${params}`,
    })
    .open();

  return enigmaGlobal.openDoc(appId);
}

async function connect({ url, webIntegrationId, appId }: connectProp) {
  const host = url.replace(/^https?:\/\//, "").replace(/\/?/, "");
  const headers = await getQCSHeaders({ url, webIntegrationId });
  return getEnigmaApp({ host, headers, appId });
}

export default connect;
