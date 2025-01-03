import { mongoose } from "../configs/dbConnection";

export interface PersonalInfo {
    fullname: string;
    email: string;
    password?: string;
    username?: string;
    bio?: string;
    profile_img?: string;
}

export interface SocialLinks {
    youtube?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
    github?: string;
    website?: string;
}

export interface AccountInfo {
    total_posts: number;
    total_reads: number;
}

export interface User extends mongoose.Document {
    _id: string;
    personal_info: PersonalInfo;
    social_links: SocialLinks;
    account_info: AccountInfo;
    OAuth: boolean;
    blogs: mongoose.Types.ObjectId[];
}