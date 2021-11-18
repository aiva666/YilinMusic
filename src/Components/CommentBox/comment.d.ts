/*
 * @Date: 2021-11-18 13:32:33
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-18 13:32:33
 * @FilePath: \yilin-music\src\Components\CommentBox\comment.d.ts
 */
interface commentListItemType {
    id: string,
    avatar: string,
    name: string,
    date: string,
    content: string,
}

interface LoadMoreListPropsType {
    list: commentListItemType[],
    onRequest?: () => undefined
}