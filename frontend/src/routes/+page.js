import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "v641yy2f",
  dataset: "production",
  apiVersion: "2023-01-30",
  useCdn: false
});

export async function load({ params }) {
  const data = await client.fetch(`*[_type == "about"]`);

  if (data) {
    return {
      about: data
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
}