import * as yup from "yup";

export const organizationSchema = yup.object({
  query: yup.object({
    page: yup.number(),
    perPage: yup.number(),
  }),
  params: yup.object({
    organization: yup.string().required(),
  }),
});

export const organizationRepoSchema = yup.object({
  params: yup.object({
    organization: yup.string().required(),
    repoName: yup.string().required(),
  }),
});
