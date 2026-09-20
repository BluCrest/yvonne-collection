export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  styleTip: string;
  category: "graphic-tees" | "dresses" | "tops-blouses";
  gender: "unisex" | "women" | "men";
  tags: string[];
  image: string;
  price?: string;
  featured?: boolean;
  soldOut?: boolean;
  isNew?: boolean;
}

export const products: Product[] = [
  // ──────────────────────────────────────────────
  // GRAPHIC TEES (Unisex)
  // ──────────────────────────────────────────────
  {
    id: "zipper-lips-tee",
    soldOut: true,
    name: "Zipper Lips Tee",
    tagline: "Silence is golden. Lips are red.",
    description:
      "A black unisex crew neck tee featuring a bold 3D-effect red lips graphic with a gold zipper running through the center. The rolled cuffs and relaxed fit give it an effortless, laid-back feel.",
    details: [
      "Crew neckline",
      "Short sleeves with rolled cuffs",
      "Relaxed unisex fit",
      "Soft cotton-blend fabric (exact composition confirmed in chat before payment)",
      "3D zipper lips graphic print",
      "Color: Black",
    ],
    styleTip:
      "Pair with high-waisted jeans and white sneakers for a casual look, or tuck into a leather skirt for nights out. Works just as well on guys with joggers.",
    category: "graphic-tees",
    gender: "unisex",
    tags: ["graphic", "black", "lips", "unisex"],
    image: "/images/products/product-01.jpg",
    featured: true,
  },
  {
    id: "galaxy-walker-tee",
    soldOut: true,
    name: "Galaxy Walker Tee",
    tagline: "She carries worlds. So can you.",
    description:
      "A white unisex crew neck tee with a whimsical illustration of a tiny astronaut balancing a towering stack of colorful planets. Cute, cosmic, and a reminder that you can hold it all together.",
    details: [
      "Crew neckline",
      "Short sleeves",
      "Relaxed unisex fit",
      "Soft cotton-blend fabric (exact composition confirmed in chat before payment)",
      "Astronaut and planets graphic print",
      "Color: White",
    ],
    styleTip:
      "Perfect with mom jeans and chunky sneakers. Guys, pair with khaki shorts and clean kicks for an easy weekend fit.",
    category: "graphic-tees",
    gender: "unisex",
    tags: ["graphic", "white", "astronaut", "unisex"],
    image: "/images/products/product-03.jpg",
    featured: true,
  },
  // LEGAL HOLD: Disabled until licensed — Fleetwood Mac "Rumours" artwork is trademarked/copyrighted.
  // To re-enable, replace image /images/products/product-04.jpg with a licensed or original design
  // and update name/description to avoid trademark. Keeping entry commented avoids infringement.
  // {
  //   id: "rumours-band-tee",
  //   name: "Rumours Band Tee",
  //   tagline: "Legends never go out of style.",
  //   description: "A black unisex crew neck tee featuring the iconic Fleetwood Mac Rumours album artwork...",
  //   details: ["Crew neckline","Short sleeves","Relaxed unisex fit","100% cotton","Fleetwood Mac Rumours album art print","Color: Black"],
  //   styleTip: "High-waisted jeans, leather jacket, ankle boots, instant cool-girl energy.",
  //   category: "graphic-tees",
  //   gender: "unisex",
  //   tags: ["graphic","black","band","unisex"],
  //   image: "/images/products/product-04.jpg",
  // },
  // LEGAL HOLD: Withheld from sale 2026-09-20 — artwork license unconfirmed.
  // To re-list, confirm original or licensed artwork, then uncomment.
  // {
  //   id: "vintage-vinyl-tee",
  //   name: "Vintage Vinyl Tee",
  //   tagline: "For the love of classics.",
  //   description:
  //     "A black unisex crew neck tee featuring a retro-inspired vinyl record graphic with vintage typography. List only with an original, licensed design.",
  //   details: [
  //     "Crew neckline",
  //     "Short sleeves",
  //     "Relaxed unisex fit",
  //     "Soft cotton-blend fabric (exact composition confirmed in chat before payment)",
  //     "Original retro vinyl graphic — artwork license confirmed",
  //     "Color: Black",
  //   ],
  //   styleTip:
  //     "High-waisted jeans, leather jacket, ankle boots, instant cool-girl energy. Guys: slim black jeans and a denim jacket.",
  //   category: "graphic-tees",
  //   gender: "unisex",
  //   tags: ["graphic", "black", "vintage", "unisex"],
  //   image: "/images/products/product-04.jpg",
  // },
  {
    id: "triple-heart-tee",
    soldOut: true,
    name: "Triple Heart Tee",
    tagline: "Heart on your sleeve. Literally.",
    description:
      "A light blue women's crew neck tee featuring three overlapping hearts in contrasting prints: leopard, black-and-white gingham, and red buffalo plaid. A playful mix of patterns that says you contain multitudes.",
    details: [
      "Crew neckline",
      "Short sleeves",
      "Relaxed fit",
      "Soft cotton-blend fabric (exact composition confirmed in chat before payment)",
      "Three overlapping hearts: leopard, gingham, buffalo plaid",
      "Color: Light Blue",
    ],
    styleTip:
      "Denim shorts and sandals for summer. Layer under a blazer for unexpected edge.",
    category: "graphic-tees",
    gender: "women",
    tags: ["graphic", "blue", "hearts", "leopard"],
    image: "/images/products/product-02.jpg",
  },
  {
    id: "adventure-heart-tee",
    name: "Adventure Heart Tee",
    tagline: "The great outdoors, wrapped in love.",
    description:
      "A light blue women's crew neck tee with a hand-drawn heart outline filled with tiny camping and outdoor icons: tent, pine trees, mountains, crescent moon, campfire, and little hikers. For the woman who loves adventure.",
    details: [
      "Crew neckline",
      "Short sleeves",
      "Relaxed fit",
      "Soft cotton-blend fabric (exact composition confirmed in chat before payment)",
      "Heart with camping icons graphic print",
      "Color: Light Blue",
    ],
    styleTip:
      "Perfect for camping trips, hikes, or weekend farmers markets. Pair with denim shorts and hiking boots.",
    category: "graphic-tees",
    gender: "women",
    tags: ["graphic", "blue", "camping", "outdoor"],
    image: "/images/products/product-05.jpg",
  },
  {
    id: "resting-face-tee",
    soldOut: true,
    name: "Resting Face Tee",
    tagline: "My face has its own personality.",
    description:
      "A dusty rose women's crew neck tee with multi-font typography reading: \"I'm NOT responsible FOR WHAT MY FACE DOES WHEN YOU talk.\" Honest, relatable, and unapologetically savage.",
    details: [
      "Crew neckline",
      "Short sleeves",
      "Relaxed fit",
      "Soft cotton-blend fabric (exact composition confirmed in chat before payment)",
      "Multi-font text graphic print",
      "Color: Dusty Rose",
    ],
    styleTip:
      "White jeans and gold hoops for maximum attitude. Or black leather pants when you really mean it.",
    category: "graphic-tees",
    gender: "women",
    tags: ["graphic", "pink", "text", "sassy"],
    image: "/images/products/product-06.jpg",
  },
  {
    id: "grudge-keeper-tee",
    soldOut: true,
    name: "Grudge Keeper Tee",
    tagline: "Faith doesn't mean forgetting.",
    description:
      "A black women's crew neck tee with a retro sunset rainbow, melting smiley face, and daisies. The text reads: \"I Believe In Holding Grudges, I'll Heal In Hell.\" Spiritual but not a pushover.",
    details: [
      "Crew neckline",
      "Short sleeves",
      "Relaxed fit",
      "Soft cotton-blend fabric (exact composition confirmed in chat before payment)",
      "Retro rainbow, melting smiley, and daisies print",
      "Color: Black",
    ],
    styleTip:
      "Ripped jeans and combat boots for full energy. Or throw a blazer over it for ironic sophistication.",
    category: "graphic-tees",
    gender: "women",
    tags: ["graphic", "black", "retro", "rainbow"],
    image: "/images/products/product-07.jpg",
  },
  {
    id: "butterfly-garden-tee",
    soldOut: true,
    name: "Butterfly Garden Tee",
    tagline: "She bloomed anyway.",
    description:
      "A sunshine yellow women's crew neck tee with a striking split-design graphic: a black butterfly wing on the left half, bursting with white daisies and wildflowers on the right. A wearable reminder that beauty grows from change.",
    details: [
      "Crew neckline",
      "Short sleeves",
      "Relaxed fit",
      "Soft cotton-blend fabric (exact composition confirmed in chat before payment)",
      "Butterfly and daisy split design print",
      "Color: Sunshine Yellow",
    ],
    styleTip:
      "White linen pants and espadrilles for summer. Or denim cutoffs and sandals for a festival-ready look.",
    category: "graphic-tees",
    gender: "women",
    tags: ["graphic", "yellow", "butterfly", "floral"],
    image: "/images/products/product-08.jpg",
  },
  {
    id: "smile-script-tee",
    soldOut: true,
    name: "Smile Script Tee",
    tagline: "Your smile is your superpower.",
    description:
      "A sunshine yellow women's crew neck tee with \"Smile\" written in a flowing handwritten script. The dot above the 'i' is replaced by a cute smiley face. Simple, sweet, and impossible not to smile at.",
    details: [
      "Crew neckline",
      "Short sleeves",
      "Relaxed fit",
      "Soft cotton-blend fabric (exact composition confirmed in chat before payment)",
      "Handwritten script with smiley face print",
      "Color: Sunshine Yellow",
    ],
    styleTip:
      "Denim shorts and white trainers. Tie a knot at the side for a cropped look. The simplest outfits often make the biggest impact.",
    category: "graphic-tees",
    gender: "women",
    tags: ["graphic", "yellow", "smile", "script"],
    image: "/images/products/product-09.jpg",
  },
  {
    id: "merry-bright-tee",
    soldOut: true,
    name: "Merry & Bright Tee",
    tagline: "Be the brightness.",
    description:
      "A forest green women's crew neck holiday tee with \"MERRY and BRIGHT\" in playful red, white, and sage lettering. Festive without being kitschy, perfect for the holiday season and beyond.",
    details: [
      "Crew neckline",
      "Short sleeves",
      "Relaxed fit",
      "Soft cotton-blend fabric (exact composition confirmed in chat before payment)",
      "Multi-color holiday text print",
      "Color: Forest Green",
    ],
    styleTip:
      "Layer under a cozy cardigan with your favorite jeans. Or pair with a plaid skirt and boots for full holiday mode.",
    category: "graphic-tees",
    gender: "women",
    tags: ["graphic", "green", "holiday", "christmas"],
    image: "/images/products/product-10.jpg",
  },
  {
    id: "but-first-coffee-tee",
    soldOut: true,
    name: "But First Coffee Tee",
    tagline: "Coffee. Then everything else.",
    description:
      "A soft pink women's crew neck tee with four illustrated coffee drinks: a to-go cup with heart, a steaming mug, a boba tea, and an iced latte, lined up above the script \"but first coffee.\" For the woman who runs on caffeine.",
    details: [
      "Crew neckline",
      "Short sleeves",
      "Relaxed fit",
      "Soft cotton-blend fabric (exact composition confirmed in chat before payment)",
      "Illustrated coffee cups with script text print",
      "Color: Soft Pink",
    ],
    styleTip:
      "High-waisted joggers and slides for a coffee run. Or tuck into a blazer for 'I woke up like this' energy.",
    category: "graphic-tees",
    gender: "women",
    tags: ["graphic", "pink", "coffee"],
    image: "/images/products/product-11.jpg",
  },
  {
    id: "meow-cat-tee",
    soldOut: true,
    name: "Meow Cat Tee",
    tagline: "Cute with claws.",
    description:
      "A hot pink girls'/women's crew neck tee with an adorable cat face featuring big round eyes, whiskers, rosy cheeks, and an oversized leopard-print bow on top. The word \"meow\" sits below in white script. Playful, feminine, and a little bit wild.",
    details: [
      "Crew neckline",
      "Short sleeves",
      "Relaxed fit",
      "Soft cotton-blend fabric (exact composition confirmed in chat before payment)",
      "Cat face with leopard-print bow and 'meow' text print",
      "Color: Hot Pink",
    ],
    styleTip:
      "White denim skirt and platform sneakers. Or pair with a leather jacket for edgy-cute.",
    category: "graphic-tees",
    gender: "women",
    tags: ["graphic", "pink", "cat", "cute"],
    image: "/images/products/product-12.jpg",
  },
  {
    id: "love-block-tee",
    soldOut: true,
    name: "Love Block Tee",
    tagline: "Love wins. Always.",
    description:
      "A pink women's crew neck tee with \"LOVE\" in bold black-outlined block letters spanning the chest. Simple, loud, and impossible to miss. Sometimes the shortest messages hit the hardest.",
    details: [
      "Crew neckline",
      "Short sleeves",
      "Relaxed fit",
      "Soft cotton-blend fabric (exact composition confirmed in chat before payment)",
      "Bold block letter text print",
      "Color: Pink",
    ],
    styleTip:
      "Tuck into a high-waisted skirt or wear loose with boyfriend jeans. Versatility is the name of the game.",
    category: "graphic-tees",
    gender: "women",
    tags: ["graphic", "pink", "love", "text"],
    image: "/images/products/product-13.jpg",
  },

  // ──────────────────────────────────────────────
  // DRESSES (Women's)
  // ──────────────────────────────────────────────
  {
    id: "side-knot-maxi-dress",
    soldOut: true,
    name: "Side-Knot Jersey Maxi Dress",
    tagline: "Effortless from morning to midnight.",
    description:
      "A black women's maxi dress in soft jersey fabric with a flattering side-knot detail at the waist that creates elegant ruching. Short sleeves, crew neckline, and a floor-length hem that flows with every step. The kind of dress you throw on and look incredible in.",
    details: [
      "Crew neckline",
      "Short sleeves",
      "Side tie/knot waist detail",
      "Floor-length hem",
      "Soft jersey knit fabric",
      "Color: Black",
    ],
    styleTip:
      "Gold hoops and strappy heeled sandals for evening. Dress down with white sneakers and a denim jacket for brunch. Add a belt for extra waist definition.",
    category: "dresses",
    gender: "women",
    tags: ["dress", "maxi", "black", "jersey"],
    image: "/images/products/product-14.jpg",
    featured: true,
  },
  {
    id: "leopard-shirt-dress",
    name: "Leopard Print Shirt Dress",
    tagline: "Bold never whispered.",
    description:
      "A long-sleeve leopard print shirt dress by AWARE with a high neck, button-front closure, and a ruffled hem that adds movement. The lightweight fabric and relaxed silhouette make it a statement piece that's still comfortable all day.",
    details: [
      "High neckline",
      "Long sleeves with button cuffs",
      "Button-front closure",
      "Ruffled hemline",
      "Relaxed midi length",
      "Lightweight woven fabric",
      "Brand: AWARE",
      "Print: Classic leopard",
    ],
    styleTip:
      "Let the print do the talking. Keep accessories minimal with gold studs and nude heels. Roll the sleeves and add white trainers for a casual twist.",
    category: "dresses",
    gender: "women",
    tags: ["dress", "shirt-dress", "leopard", "midi"],
    image: "/images/products/product-15.jpg",
    featured: true,
  },
  {
    id: "zebra-halter-midi",
    name: "Zebra Halter Midi Dress",
    tagline: "Walk in like you own the room.",
    description:
      "A black-and-white zebra-striped halter-neck midi dress with a self-tie neck strap and matching waist belt. The vertical stripes elongate the silhouette while the halter cut shows off the shoulders. Bold without trying too hard.",
    details: [
      "Halter neckline with self-tie strap",
      "Sleeveless",
      "Matching waist belt",
      "Midi length",
      "Satin-finish woven fabric",
      "Print: Black & white zebra stripe",
    ],
    styleTip:
      "This IS the statement. Keep shoes simple: black strappy sandals or pointed-toe pumps. Minimal jewelry. Let the dress speak.",
    category: "dresses",
    gender: "women",
    tags: ["dress", "halter", "midi", "zebra", "striped"],
    image: "/images/products/product-18.jpg",
  },

  // ──────────────────────────────────────────────
  // TOPS & BLOUSES (Women's)
  // ──────────────────────────────────────────────
  {
    id: "sleeveless-peplum-top",
    soldOut: true,
    name: "Sleeveless Peplum Top",
    tagline: "Structure meets softness.",
    description:
      "A cream/ivory women's sleeveless peplum top with a crew neckline and five self-covered buttons running down the front. The structured fabric holds its shape while the flared peplum hem creates a flattering waistline. Minimalist, polished, and endlessly versatile.",
    details: [
      "Crew neckline",
      "Sleeveless",
      "Button-front with 5 self-covered buttons",
      "Peplum hemline",
      "Structured woven fabric",
      "Color: Cream/Ivory",
    ],
    styleTip:
      "Tuck into high-waisted tailored trousers for a power look. Or pair with a pencil skirt and gold jewelry for date night.",
    category: "tops-blouses",
    gender: "women",
    tags: ["top", "peplum", "ivory", "sleeveless"],
    image: "/images/products/product-16.jpg",
  },
  {
    id: "toile-tie-neck-blouse",
    name: "Blue Toile Tie-Neck Blouse",
    tagline: "Some things never go out of style.",
    description:
      "A white women's long-sleeve blouse with an all-over blue toile floral print. Features a self-tie pussy-bow neckline and elasticated ruffled cuffs. The lightweight fabric drapes beautifully. Classic European elegance that works for office or evening.",
    details: [
      "Tie-neck / pussy-bow neckline",
      "Long sleeves with elasticated ruffled cuffs",
      "Relaxed fit",
      "Lightweight woven fabric",
      "Print: Blue toile floral on white",
    ],
    styleTip:
      "Let the tie hang loose for effortless elegance, or bow it up for a polished office look. Tuck into tailored trousers or a high-waisted pencil skirt.",
    category: "tops-blouses",
    gender: "women",
    tags: ["blouse", "toile", "floral", "tie-neck"],
    image: "/images/products/product-17.jpg",
  },

  // ──────────────────────────────────────────────
  // NEW ADDITIONS
  // ──────────────────────────────────────────────

  // Men's Graphic Tees
  {
    id: "save-oversized-tee",
    soldOut: true,
    name: "Save Oversized Tee",
    tagline: "Less words. More impact.",
    description:
      "A red men's oversized crew neck tee with \"save\" in bold outlined block letters across the chest. Relaxed drop-shoulder fit, soft cotton-blend fabric, and a statement that speaks volumes without shouting.",
    details: [
      "Crew neckline",
      "Oversized drop-shoulder fit",
      "Short sleeves",
      "Soft cotton-blend fabric (exact composition confirmed in chat before payment)",
      "Block letter text print",
      "Color: Red",
    ],
    styleTip:
      "Pair with black joggers and white sneakers for a clean streetwear look. Or layer under an open flannel shirt.",
    category: "graphic-tees",
    gender: "men",
    tags: ["graphic", "red", "oversized", "men"],
    image: "/images/products/product-20.jpg",
  },
  {
    id: "bitcoin-long-sleeve",
    soldOut: true,
    name: "Bitcoin Long-Sleeve Tee",
    tagline: "Stack sats. Stay warm.",
    description:
      "A beige men's long-sleeve crew neck tee with a small embroidered Bitcoin logo on the left chest. Minimal, clean, and effortlessly cool. The kind of piece that starts conversations without trying.",
    details: [
      "Crew neckline",
      "Long sleeves",
      "Regular fit",
      "Soft cotton-blend fabric (exact composition confirmed in chat before payment)",
      "Embroidered Bitcoin logo on left chest",
      "Color: Beige",
    ],
    styleTip:
      "Layer over a white tee with dark jeans. Or wear solo with chinos for a minimal everyday look.",
    category: "graphic-tees",
    gender: "men",
    tags: ["graphic", "beige", "bitcoin", "long-sleeve", "men"],
    image: "/images/products/product-21.jpg",
  },
  {
    id: "self-control-tee",
    soldOut: true,
    name: "Self Control Tee",
    tagline: "The man factor behind success.",
    description:
      "A white men's crew neck graphic tee with bold \"Self Control\" text, an illustrated hand wearing rings and a chain, and purple accent details. The text reads \"The Man Factor Behind Success\" and \"1980.\" Statement streetwear with meaning.",
    details: [
      "Crew neckline",
      "Short sleeves",
      "Relaxed fit",
      "Soft cotton-blend fabric (exact composition confirmed in chat before payment)",
      "Multi-element graphic print",
      "Color: White",
    ],
    styleTip:
      "Black skinny jeans and white sneakers for a clean fit. Or pair with cargo pants and boots for a bolder look.",
    category: "graphic-tees",
    gender: "men",
    tags: ["graphic", "white", "streetwear", "men"],
    image: "/images/products/product-26.jpg",
  },

  // Women's Dresses
  {
    id: "one-shoulder-cutout-dress",
    soldOut: true,
    name: "One-Shoulder Cutout Dress",
    tagline: "One shoulder. All confidence.",
    description:
      "A black women's one-shoulder bodycon midi dress with a daring side cutout and ruched detailing through the waist. The asymmetric neckline and gathered fabric create a silhouette that's both elegant and bold.",
    details: [
      "One-shoulder neckline",
      "Sleeveless",
      "Side cutout detail",
      "Ruched waist",
      "Midi length",
      "Stretch bodycon fabric",
      "Color: Black",
    ],
    styleTip:
      "Gold hoop earrings and strappy heels for a night out. Add a clutch and you're ready for anything.",
    category: "dresses",
    gender: "women",
    tags: ["dress", "black", "cutout", "bodycon", "midi"],
    image: "/images/products/product-19.jpg",
    featured: true,
  },
  {
    id: "red-fit-flare-dress",
    soldOut: true,
    name: "Red Fit-and-Flare Dress",
    tagline: "Red never goes out of style.",
    description:
      "A red women's fit-and-flare dress with a boat neckline, three-quarter length sleeves, and a pleated skirt that flares from the waist. Classic, feminine, and impossible to ignore. The kind of red that stops rooms.",
    details: [
      "Boat neckline",
      "Three-quarter length sleeves",
      "Fitted bodice",
      "Pleated flared skirt",
      "Above-knee length",
      "Structured woven fabric",
      "Color: Red",
    ],
    styleTip:
      "Nude heels and gold jewelry for a classic look. Pair with black tights and ankle boots for cooler weather.",
    category: "dresses",
    gender: "women",
    tags: ["dress", "red", "fit-and-flare", "classic"],
    image: "/images/products/product-24.jpg",
    featured: true,
  },
  {
    id: "corset-bodycon-dress",
    name: "Corset Bodycon Midi Dress",
    tagline: "Structure that flatters.",
    description:
      "A taupe women's long-sleeve bodycon midi dress with a built-in corset boning detail at the waist. The crew neckline and slim fit keep it sleek, while the corset structure cinches and defines. Elegant restraint at its finest.",
    details: [
      "Crew neckline",
      "Long sleeves",
      "Corset boning at waist",
      "Bodycon fit",
      "Midi length",
      "Stretch jersey fabric",
      "Color: Taupe",
    ],
    styleTip:
      "Minimal gold jewelry and pointed-toe heels. Let the dress do the talking. Perfect for date night or cocktail events.",
    category: "dresses",
    gender: "women",
    tags: ["dress", "taupe", "corset", "bodycon", "midi"],
    image: "/images/products/product-25.jpg",
  },

  // Women's Tops
  {
    id: "floral-daisy-peplum-cami",
    name: "Floral Daisy Peplum Cami",
    tagline: "Light as a petal.",
    description:
      "A cream women's spaghetti strap cami with a delicate daisy and botanical print, a V-neckline, and a flounced peplum hem. Sweet, feminine, and perfect for warm days. The kind of top that makes you feel pretty just putting it on.",
    details: [
      "Spaghetti straps",
      "V-neckline",
      "Relaxed peplum hem",
      "Lightweight woven fabric",
      "Daisy and botanical print",
      "Color: Cream",
    ],
    styleTip:
      "White high-waisted shorts and sandals for summer. Or tuck into a midi skirt for a garden party look.",
    category: "tops-blouses",
    gender: "women",
    tags: ["top", "cami", "floral", "peplum", "cream"],
    image: "/images/products/product-22.jpg",
  },
  {
    id: "white-strapless-bustier",
    name: "White Strapless Bustier Top",
    tagline: "Structured to impress.",
    description:
      "A white women's strapless bustier top with a folded collar neckline, button-front closure with contrasting black buttons, and a structured peplum hem. The boning detail and tailored fit create a sharp, polished silhouette.",
    details: [
      "Strapless / folded collar neckline",
      "Button-front with black contrast buttons",
      "Structured boning",
      "Peplum hem",
      "Cotton-blend fabric",
      "Color: White",
    ],
    styleTip:
      "High-waisted tailored trousers and pointed-toe heels for a power look. Or pair with a leather skirt for edge.",
    category: "tops-blouses",
    gender: "women",
    tags: ["top", "bustier", "white", "strapless", "structured"],
    image: "/images/products/product-23.jpg",
  },

  // ──────────────────────────────────────────────
  // NEW ADDITIONS (September 2026)
  // Names verified against standard industry listings.
  // ──────────────────────────────────────────────
  {
    id: "crimson-boho-peasant-blouse",
    name: "Crimson Boho Peasant Blouse",
    tagline: "Free spirit, full bloom.",
    description:
      "A crimson women's peasant blouse with an allover floral border print in blue, pink and ivory. The V-neckline fastens with a tassel tie, and the three-quarter bishop sleeves finish with patterned border cuffs. Flowing, feminine and full of color.",
    details: [
      "V-neckline with tassel tie closure",
      "Three-quarter bishop sleeves",
      "Relaxed peasant fit",
      "Lightweight woven fabric (exact composition confirmed in chat before payment)",
      "Allover floral border print",
      "Color: Crimson Red",
    ],
    styleTip:
      "White jeans and tan sandals for daytime ease. Layer gold necklaces and tuck into a denim skirt for festival polish.",
    category: "tops-blouses",
    gender: "women",
    tags: ["blouse", "floral", "boho", "red", "peasant"],
    image: "/images/products/product-27.jpg",
    isNew: true,
  },
  {
    id: "striped-caged-back-top",
    name: "Striped Caged-Back Sleeveless Top",
    tagline: "Stripes with a wild side.",
    description:
      "A sleeveless women's top in vertical jewel-tone stripes of purple, green, gold and black, with a lattice caged strappy detail framing the neckline. Relaxed through the body with a statement finish that turns a simple silhouette into evening energy.",
    details: [
      "Sleeveless",
      "Lattice caged strappy detail",
      "Relaxed fit",
      "Lightweight knit fabric (exact composition confirmed in chat before payment)",
      "Vertical multicolor stripe",
      "Colors: Purple, Green, Gold, Black",
    ],
    styleTip:
      "Dark skinny jeans and heeled sandals for a night out. Or layer under a blazer with the straps peeking through.",
    category: "tops-blouses",
    gender: "women",
    tags: ["top", "striped", "sleeveless", "lattice"],
    image: "/images/products/product-28.jpg",
    isNew: true,
  },
  {
    id: "pink-snake-keyhole-blouse",
    name: "Pink Snake Keyhole Blouse",
    tagline: "A wild, polished touch.",
    description:
      "A women's blouse in pink and black snake print with a rounded neckline and a back keyhole fastened with a single button. Three-quarter sleeves and a relaxed drape keep the bold print wearable from office to evening.",
    details: [
      "Rounded neckline",
      "Back keyhole with button closure",
      "Three-quarter sleeves",
      "Relaxed fit",
      "Lightweight woven fabric (exact composition confirmed in chat before payment)",
      "Print: Pink and black snake",
    ],
    styleTip:
      "Black tailored trousers and pointed flats for a sharp office look. Add a clutch and heels for dinner.",
    category: "tops-blouses",
    gender: "women",
    tags: ["blouse", "snake", "pink", "keyhole"],
    image: "/images/products/product-29.jpg",
    isNew: true,
  },
  {
    id: "emerald-ruched-mini-dress",
    name: "Emerald Ruched Mini Dress",
    tagline: "Snatched and graceful.",
    description:
      "A deep green women's sleeveless bodycon mini dress with ruched side detailing and an asymmetric wrap hem. The round neckline keeps it clean while the gathering through the waist sculpts a confident silhouette.",
    details: [
      "Round neckline",
      "Sleeveless",
      "Ruched side detailing",
      "Asymmetric wrap hem",
      "Mini length",
      "Stretch jersey fabric (exact composition confirmed in chat before payment)",
      "Color: Emerald Green",
    ],
    styleTip:
      "Gold heels and a matching clutch for evenings out. A denim jacket cools it down for daytime.",
    category: "dresses",
    gender: "women",
    tags: ["dress", "green", "ruched", "bodycon", "mini"],
    image: "/images/products/product-30.jpg",
    isNew: true,
  },
  {
    id: "tricolor-tee-midi-dress",
    name: "Tricolor Tee Midi Dress",
    tagline: "Easy color, all day.",
    description:
      "A relaxed women's t-shirt midi dress in three bands: a black bodice, a pink middle panel and a white hem with fine black pinstripes. Round neckline and short sleeves keep it effortless, while the colorblocking does all the talking.",
    details: [
      "Round neckline",
      "Short sleeves",
      "Relaxed fit",
      "Midi length",
      "Soft jersey knit fabric (exact composition confirmed in chat before payment)",
      "Colors: Black, Pink, White pinstripe",
    ],
    styleTip:
      "White sneakers and a straw bag for daytime. Dress it up with block heels and gold hoops.",
    category: "dresses",
    gender: "women",
    tags: ["dress", "colorblock", "midi", "pink", "black"],
    image: "/images/products/product-31.jpg",
    isNew: true,
  },
];

export const categories = [
  {
    id: "graphic-tees",
    name: "Graphic Tees",
    description: "Say it loud. Wear it proud.",
    gender: "unisex" as const,
  },
  {
    id: "dresses",
    name: "Dresses",
    description: "For the moments that demand presence",
    gender: "women" as const,
  },
  {
    id: "tops-blouses",
    name: "Tops & Blouses",
    description: "Effortless pieces for the woman on the move",
    gender: "women" as const,
  },
] as const;

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
