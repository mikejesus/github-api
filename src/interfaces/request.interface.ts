export interface IRequest {
    organization: string;
    repoName: string;
  }
  
  export interface IQuery {
    page?: number;
    perPage?: number;
    sort?: string;
  }
  