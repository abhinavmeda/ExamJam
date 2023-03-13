import { BaseResponse } from '../base.controller';
import { ICommentModel } from '../../models/comments/comments.model';
import * as yup from 'yup';

/**
 * POST /api/comments/
 */

export const validCreateCommentSchema = yup.object().shape({
    content: yup.string().min(1).required()
});

export interface CreateCommentBody {
    content: string;
    postId: string;
    parentId?: string | null;
}

export interface CreateCommentResponse extends BaseResponse {
    data: ICommentModel | null;
}
