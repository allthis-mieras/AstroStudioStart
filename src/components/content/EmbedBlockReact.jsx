import React, { useState, useEffect } from 'react';
import { Tweet, Vimeo, YouTube } from "astro-embed";

function getTypeFromUrl(url) {
    if (url.includes("twitter.com")) {
        return "twitter";
    } else if (url.includes("youtube.com") || url.includes("youtu.be")) {
        return "youtube";
    } else if (url.includes("vimeo.com")) {
        return "vimeo";
    } else {
        return "unknown";
    }
}

function getSizeClass(size) {
    switch (size) {
        case 'feature':
            return 'embed-feature';
        case 'page':
            return 'embed-page';
        case 'full':
            return 'embed-full';
        default:
            return 'embed-inline';
    }
}

const EmbedBlockReact = ({ url, size = 'inline', ...props }) => {
    const type = getTypeFromUrl(url);
    const embedId = url.split("/").pop();

    const [hasConsent, setHasConsent] = useState(false);
    const [showEmbed, setShowEmbed] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('embedConsent');
        if (consent === 'true') {
            setHasConsent(true);
        }
    }, []);

    const handlePlayClick = () => {
        if (hasConsent) {
            setShowEmbed(true);
        } else {
            alert("Om deze inhoud te bekijken, moet u akkoord gaan met de cookies.");
        }
    };

    return (
        <div className={getSizeClass(size)}>
            {showEmbed ? (
                <>
                    {type === "twitter" && <Tweet id={embedId} {...props} />}
                    {type === "youtube" && <YouTube id={embedId} {...props} />}
                    {type === "vimeo" && <Vimeo id={embedId} {...props} />}
                </>
            ) : (
                <div className="embed-placeholder">
                    <img src={`placeholder-${type}.png`} alt="Placeholder" />
                    <button className="play-button" onClick={handlePlayClick}>Play</button>
                </div>
            )}
        </div>
    );
};

export default EmbedBlockReact;