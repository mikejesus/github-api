export interface IResponse {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    owner: IOwner;
    description: string;
    stargazers_count: number;
}

export interface IOwner {
    login: string;
    type: string;
}
