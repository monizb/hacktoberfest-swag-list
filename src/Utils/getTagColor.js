const LIGHT_ROSE = "#E94560";
const BERLY_GREEN = "#F73D93";
const CLAY_ASH = "#3D2C8D";
const GAINSBORO = "#219897";
const LIGHT_SALMON = "#301B3F";
const MERCURY = "#150485";
const PARCHMENT = "#1E5F74";
const MISTY_ROSE = "#363062";

const TAG_COLORS = {
    Tshirt: LIGHT_ROSE,
    Stickers: BERLY_GREEN,
    Bottle: CLAY_ASH,
    Socks: GAINSBORO,
    Hoodie: LIGHT_SALMON,
    Cap: PARCHMENT,
    Swags: MISTY_ROSE,
    Swag: MISTY_ROSE,
};

const DEFAULT_TAG_COLOR = MERCURY;

export const getTagColor = (tag) =>
    TAG_COLORS[tag] ? TAG_COLORS[tag] : DEFAULT_TAG_COLOR;
