"use client"

import usePlayer from "@/hooks/usePlayer";
import useGetSongById from "@/hooks/useGetSongById";

const Player = () => {
    const player = usePlayer();
    const { song } = useGetSongById(player.activeId);



    return (
        <div>
            player
        </div>
    );
};

export default Player;