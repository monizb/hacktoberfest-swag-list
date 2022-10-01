const TAG_EMOJI = {
  Tshirt: "👕",
  Stickers: "🏷️",
  Bottle: "🍾",
  Socks: "🧦",
  Hoodie: "🧥",
  Cap: "🧢",
  Mug: "🍺",
  Voucher: "🎟",
  Jacket: "🧥",
  Backpack: "🎒",
  Bag: "🎒",
  Swags: "🛍️",
  Swag: "🛍️",
  Notebook: "📔",
  Pen: "🖊️",
  Laptop: "💻",
  Cash: "💵",
  Hat: "🎓",
};

const DEFAULT_TAG_EMOJI = "💜";

export const getTagEmoji = (tag) =>
  TAG_EMOJI[tag] ? TAG_EMOJI[tag] : DEFAULT_TAG_EMOJI;
