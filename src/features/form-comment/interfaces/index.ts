export interface IRequsetComment {
    blog_id: string;
    content: string;
}

export interface IResponseComment {
    content:   string;
    user_id:   string;
    blog_id:   string;
    _id:       string;
    createdAt: Date;
    updatedAt: Date;
    __v:       number;
}

export interface IResGetComment {
    _id:       string;
    content:   string;
    user_id:   IUserID;
    blog_id:   string;
    createdAt: Date;
    updatedAt: Date;
    __v:       number;
}

export interface IUserID {
    _id:      string;
    username: string;
}

    