'use client';

import { useEffect } from "react";

export default function InstagramEmbed() {
  useEffect(() => {
    if (window?.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="flex justify-center m-10">
        <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/DH1oioezoDj/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
        style={{
            background: "#FFF",
            border: 0,
            borderRadius: "3px",
            boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px",
            maxWidth: "540px",
            minWidth: "326px",
            padding: 0,
            width: "calc(100% - 2px)"
        }}
        >
            <a
            href="https://www.instagram.com/reel/DH1oioezoDj/?utm_source=ig_embed&amp;utm_campaign=loading"
            target="_blank"
            rel="noopener noreferrer"
            >
            View this post on Instagram
            </a>
        </blockquote>
    </div>
  );
}
