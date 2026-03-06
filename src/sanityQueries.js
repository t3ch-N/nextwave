import { client } from './sanity';

export const getEvents = async () => {
  return await client.fetch(`*[_type == "event"] | order(publishedAt desc)`);
};

export const getEventBySlug = async (slug) => {
  return await client.fetch(`*[_type == "event" && slug.current == $slug][0]`, { slug });
};

export const getPosts = async () => {
  return await client.fetch(`*[_type == "post"] | order(publishedAt desc)`);
};

export const getPostBySlug = async (slug) => {
  return await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
    ...,
    author->
  }`, { slug });
};

export const getTeamMembers = async () => {
  return await client.fetch(`*[_type == "teamMember"]`);
};

export const getServices = async () => {
  return await client.fetch(`*[_type == "service"]`);
};
