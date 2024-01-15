export interface PostInterface {
    user_id: string;
    type: string;
    text?: string;
    prompt?: string;
    image_url?: string;
    likes: number;
    dislikes: number;
    comments: string[];
}

export interface TwurInterface {
    _id: string;
    name: string;
    user_name: string;
    description: string;
    appearance: string;
    profile_pic?: string;
}

export interface TwurCreateInterface {
    name: string;
    user_name: string;
    description: string;
    appearance: string;
    profile_pic?: string;
}

export interface TextPost {
    text: string,
    userId: string,
    likes: number,
    dislikes: number,
    comments: string[]
}

export interface ImagePost {
    url: string,
    userId: string,
    likes: number,
    dislikes: number,
    comments: string[]
}

export interface CaptionedImagePost {
    url: string,
    text: string,
    userId: string,
    likes: number,
    dislikes: number,
    comments: string[]
}

export interface AIResponse {
    action: string,
    prompt: string,
    text: string
}
