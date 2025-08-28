import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { McpResponse } from "./types.js";

// List available resources
export async function listResources(
  client: Client,
  timeout?: number,
): Promise<McpResponse> {
  try {
    const response = await client.listResources(
      timeout ? { timeout } : undefined,
    );
    return response;
  } catch (error) {
    throw new Error(
      `Failed to list resources: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

// Read a resource
export async function readResource(
  client: Client,
  uri: string,
  timeout?: number,
): Promise<McpResponse> {
  try {
    const response = await client.readResource(
      { uri },
      timeout ? { timeout } : undefined,
    );
    return response;
  } catch (error) {
    throw new Error(
      `Failed to read resource ${uri}: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

// List resource templates
export async function listResourceTemplates(
  client: Client,
  timeout?: number,
): Promise<McpResponse> {
  try {
    const response = await client.listResourceTemplates(
      timeout ? { timeout } : undefined,
    );
    return response;
  } catch (error) {
    throw new Error(
      `Failed to list resource templates: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}
