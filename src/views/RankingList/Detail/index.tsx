/*
 * @Date: 2021-10-13 15:03:43
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-21 12:06:54
 * @FilePath: \yilin-music\src\views\RankingList\Detail\index.tsx
 */
import React, { FC } from "react";
import { useParams } from "react-router-dom";
import SongListDetail from "@/Components/SongListDetail";

interface TParams {
    id:string
}

const RankDetail: FC = (props: any) => {
    const { id } = useParams<TParams>();
    return (
        <div className="rankDetail">
            <SongListDetail id={id} />
        </div>
    );
};

export default RankDetail;
