export interface IDataBlog {
    _id:          string;
    title:        string;
    description:  string;
    community_id: ICommunityID;
    user_id:      IUserID;
}

export interface ICommunityID {
    _id:   string;
    title: string;
}

export interface IUserID {
    _id:      string;
    username: string;
}

export interface IRequestCreateBlog {
    title:        string;
    description:  string;
    community_id: string;
}

export interface IRequestEditBlog extends IRequestCreateBlog {
    _id:          string;
}

export interface IResCreateBlog {
    title:        string;
    description:  string;
    community_id: string;
    user_id:      string;
    _id:          string;
    createdAt:    Date;
    updatedAt:    Date;
    __v:          number;
}

export interface IDataCommunity {
    title: string;
    _id:   string;
}