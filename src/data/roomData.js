/* ==========================================================================
   RoomRevive Studio — Data & Architectural Presets
   Carefully curated for Indian & Global renters, students, and PG dwellers
   ========================================================================== */

export const ROOM_PRESETS = [
  {
    id: "student-hostel",
    name: "Student Hostel & PG Room",
    subtitle: "Single bed, cold tile floor, buzzing tube light, and a scuffed study desk",
    dimensions: "3.2m × 2.8m (9.0 m² / ~96 sq.ft)",
    beforeImage: "/images/student_room_before_1791721144093.jpg",
    beforeNotes: "The typical student hostel setup: a blinding overhead tube light that strains your eyes, cold floor tiles, messy wires under the desk, and bedding that never feels cozy.",
    styles: {
      japandi: {
        id: "japandi",
        name: "Warm Minimalist & Japandi",
        tagline: "Warm paper lamps, calm wood accents, and cozy linen layers",
        paletteName: "Birch • Rice Paper • Flax Linen",
        accentColor: "#DDD2BF",
        swatches: ["flax-linen", "natural-jute"],
        afterImage: "/images/student_room_japandi_after_1791721184670.jpg",
        description: "Turns off the blinding tube light and brings in soft 2700K paper lamplight. A natural jute runner keeps your bare feet off cold tiles, and layered linen bedding makes your bed feel like a calm retreat without painting a single wall.",
        keyChanges: [
          "Turn off the tube light and plug in a warm 2700K rice paper globe",
          "Roll out a woven jute runner to warm up the cold tiled floor",
          "Add a simple wooden desk riser to clear clutter and hold books",
          "Layer a soft textured linen throw across the foot of the bed"
        ],
        annotations: [
          {
            id: 1,
            x: 28,
            y: 35,
            title: "2700K Paper Globe Lamp",
            detail: "A soft paper globe softens sharp shadows and gives off-white walls a cozy evening glow."
          },
          {
            id: 2,
            x: 68,
            y: 42,
            title: "Zero-Drill Picture Ledge",
            detail: "Heavy-duty Command strips hold your favorite paperbacks and a small bud vase without drilling."
          },
          {
            id: 3,
            x: 48,
            y: 78,
            title: "Woven Jute Floor Runner",
            detail: "Brings natural warmth to cold hostel tiles so you don't step onto freezing floors in the morning."
          },
          {
            id: 4,
            x: 75,
            y: 65,
            title: "Desk Cable Tucking",
            detail: "Simple binder clips under the desk keep charging cords tucked neatly out of sight."
          }
        ]
      },
      terracotta: {
        id: "terracotta",
        name: "Earthy Terracotta & Clay",
        tagline: "Sunbaked earth tones, clay accents, and cozy amber lighting",
        paletteName: "Raw Clay • Burnt Umber • Sand",
        accentColor: "#C8664B",
        swatches: ["terracotta-clay", "natural-jute"],
        afterImage: "/images/student_room_terracotta_after_1791721285356.jpg",
        description: "Brings cozy, sunbaked warmth into rooms that don't get much natural sunlight. Rust-orange pillow covers, real clay pots, and an amber reading lamp make a plain room feel grounded and lived-in.",
        keyChanges: [
          "Swap plain pillowcases for rust-orange washed cotton covers",
          "Pop a hardy snake plant into an earthy unglazed clay pot",
          "Clip an amber reading lamp to your bedframe or shelf",
          "Keep laundry or extra blankets tidy in a woven cane basket"
        ],
        annotations: [
          {
            id: 1,
            x: 32,
            y: 30,
            title: "Amber Task Lamp",
            detail: "Warm 2200K clamp light creates a cozy late-night study atmosphere without waking roommates."
          },
          {
            id: 2,
            x: 55,
            y: 62,
            title: "Terracotta Bed Runner",
            detail: "Adds a warm pop of rich earth tone across standard landlord-issued white sheets."
          },
          {
            id: 3,
            x: 82,
            y: 45,
            title: "Clay Planter & Snake Plant",
            detail: "Zero-effort greenery in a breathable clay pot that purifies stale hostel air and thrives on neglect."
          }
        ]
      },
      sage: {
        id: "sage",
        name: "Muted Sage & Botanical",
        tagline: "Calming botanical greens, washed cotton, and light rattan",
        paletteName: "Muted Sage • Olive • Light Rattan",
        accentColor: "#6B7F6D",
        swatches: ["sage-canvas", "flax-linen"],
        afterImage: "/images/student_room_sage_after_1791721320405.jpg",
        description: "A quiet haven to unwind after long classes and study sessions. Muted eucalyptus greens and light cane textures bring nature inside and make a small space feel peaceful.",
        keyChanges: [
          "Add olive-green washed canvas cushion covers to your chair",
          "Set out a small rattan tray for your daily keys, pens, and watch",
          "Hang a light sheer curtain on a spring-tension rod (no screws needed)",
          "Let an easy money plant or pothos drape gently over your bookshelf"
        ],
        annotations: [
          {
            id: 1,
            x: 30,
            y: 40,
            title: "Spring-Tension Curtain",
            detail: "Spring rod holds an airy linen sheer across the window without a single drilled hole."
          },
          {
            id: 2,
            x: 60,
            y: 58,
            title: "Sage Canvas Pillow Cover",
            detail: "Durable, washable accent layer that softens hard wooden hostel chairs."
          },
          {
            id: 3,
            x: 78,
            y: 36,
            title: "Trailing Pothos Vine",
            detail: "Thrives in indirect light and brings vibrant life to empty rental corners."
          }
        ]
      }
    }
  },
  {
    id: "rental-studio",
    name: "Small Rental Studio / 1RK",
    subtitle: "All-in-one living and sleeping space, landlord-white walls, and mismatched furniture",
    dimensions: "4.1m × 3.6m (14.8 m² / ~159 sq.ft)",
    beforeImage: "/images/renter_studio_before_1791721346719.jpg",
    beforeNotes: "The common studio struggle: your bed is the first thing anyone sees from the front door, walls feel empty and echoey, and overhead lighting feels sterile.",
    styles: {
      japandi: {
        id: "japandi",
        name: "Warm Minimalist & Japandi",
        tagline: "Cozy visual zones, calm textiles, and soft lighting",
        paletteName: "Oatmeal • Pale Oak • Warm Stone",
        accentColor: "#DDD2BF",
        swatches: ["flax-linen", "natural-jute"],
        afterImage: "/images/renter_studio_after_1791721374592.jpg",
        description: "Creates clear, cozy zones without putting up permanent walls. A low open bookshelf gently shields your bed from the doorway, a textured rug anchors your seating area, and warm floor lamps make evenings feel restful.",
        keyChanges: [
          "Use a low open bookshelf as an airy room divider that lets sunlight through",
          "Roll out a large textured rug to clearly define your relaxation corner",
          "Place a warm paper floor lamp to light the room gently from below eye level",
          "Drape a textured waffle throw over mismatched rental furniture"
        ],
        annotations: [
          {
            id: 1,
            x: 24,
            y: 48,
            title: "Open Divider Shelf",
            detail: "Gently separates your entryway from the bed without blocking precious window daylight."
          },
          {
            id: 2,
            x: 65,
            y: 32,
            title: "Paper Floor Lamp",
            detail: "Warm 2700K light fills the room at eye level, so you never have to turn on harsh ceiling fixtures."
          },
          {
            id: 3,
            x: 52,
            y: 74,
            title: "Seating Zone Rug",
            detail: "Cushions steps, dampens room echoes, and creates a cozy nook to kick back with friends."
          }
        ]
      },
      terracotta: {
        id: "terracotta",
        name: "Earthy Terracotta & Clay",
        tagline: "Warm sunset tones, comfortable cushions, and earthy ceramics",
        paletteName: "Rust • Terracotta • Natural Wood",
        accentColor: "#C8664B",
        swatches: ["terracotta-clay", "natural-jute"],
        afterImage: "/images/student_room_terracotta_after_1791721285356.jpg",
        description: "Gives an open studio warm personality with rich rust cushions, clay accents, and soft warm lighting that makes the space feel like home.",
        keyChanges: [
          "Layer terracotta throw cushions and a comfortable floor pillow for guests",
          "Add a warm clip-on reading lamp to your bedframe or shelf",
          "Tuck shoes and gym gear into woven cane baskets"
        ],
        annotations: [
          {
            id: 1,
            x: 35,
            y: 45,
            title: "Terracotta Accent Layer",
            detail: "Breaks up cold rental walls and gives the space an inviting, grounded warmth."
          }
        ]
      },
      sage: {
        id: "sage",
        name: "Muted Sage & Botanical",
        tagline: "Airy greens, breezy curtains, and calm organic textures",
        paletteName: "Sage • Washed Canvas • Natural Linen",
        accentColor: "#6B7F6D",
        swatches: ["sage-canvas", "flax-linen"],
        afterImage: "/images/student_room_sage_after_1791721320405.jpg",
        description: "Turns a generic rented flat into a peaceful botanical sanctuary with easy-care houseplants, soft sage cottons, and zero wall holes.",
        keyChanges: [
          "Add a sage cotton bed runner and framed botanical prints hung with Command strips",
          "Place a low-maintenance floor plant in a woven basket",
          "Keep warm bedside lamps for relaxing evening reads"
        ],
        annotations: [
          {
            id: 1,
            x: 42,
            y: 50,
            title: "Botanical Rest Corner",
            detail: "Soft green textures and leafy plants lower stress and make tiny flats feel fresh."
          }
        ]
      }
    }
  }
];

export const MATERIAL_SWATCHES = [
  {
    id: "flax-linen",
    name: "Belgian Flax Linen",
    texture: "Breathable Slub Weave",
    image: "/images/swatch_linen_weave_1791721461966.jpg",
    shade: "#E8DEC8",
    bestFor: "Duvet covers, pillow slips, lightweight summer bed runners",
    renterTip: "Naturally textured and meant to look relaxed — no ironing needed, hides rental mattress wear instantly."
  },
  {
    id: "terracotta-clay",
    name: "Matte Terracotta Bisque",
    texture: "Unglazed Porous Clay",
    image: "/images/swatch_terracotta_tile_1791721489065.jpg",
    shade: "#C8664B",
    bestFor: "Desk catch-all trays, succulent pots, bedside coasters",
    renterTip: "Adds earthy weight and grounding color to scuffed laminate desks without any paint."
  },
  {
    id: "natural-jute",
    name: "Braided Golden Jute",
    texture: "Heavyweight Woven Fiber",
    image: "/images/swatch_jute_weave_1791721542569.jpg",
    shade: "#C2A882",
    bestFor: "Floor runners, bedside mats, plant basket sleeves",
    renterTip: "Extremely durable, hides dated or cracked linoleum flooring, and rolls up effortlessly on move-out day."
  },
  {
    id: "sage-canvas",
    name: "Washed Sage Duck Canvas",
    texture: "Heavyweight 12oz Cotton",
    image: "/images/swatch_sage_canvas_1791721581671.jpg",
    shade: "#6B7F6D",
    bestFor: "Cushion covers, hanging pocket organizers, book tote",
    renterTip: "Machine-washable, stain-tolerant, and brings calming botanical energy into rooms with no balcony."
  }
];

export const CHECKLIST_ITEMS = [
  /* Zero-Rupee Free Fixes */
  {
    id: "free-1",
    category: "free",
    title: "Tuck charging cords into desk binder clips",
    description: "Clamp binder clips to the back edge of your desk and feed your charger cords through the metal loops. Stops messy cords from falling on the floor.",
    cost: 0,
    time: "10 mins",
    difficulty: "Effortless",
    zeroDamage: true
  },
  {
    id: "free-2",
    category: "free",
    title: "Shift your bed toward natural window light",
    description: "Move your bed 30–40cm away from the dark corner toward natural window light. It clears your doorway and instantly makes the room feel more spacious.",
    cost: 0,
    time: "15 mins",
    difficulty: "Medium",
    zeroDamage: true
  },
  {
    id: "free-3",
    category: "free",
    title: "Tuck your bedding with neat hospital corners",
    description: "Tuck bedsheet corners in tightly at a 45° angle. Takes two minutes and makes simple bedding look clean and intentional.",
    cost: 0,
    time: "5 mins",
    difficulty: "Easy",
    zeroDamage: true
  },
  {
    id: "free-4",
    category: "free",
    title: "Use a small tray for everyday pocket clutter",
    description: "Put your keys, watch, wallet, and lip balm onto a single small ceramic plate. A group of scattered items looks messy, but on a tray it looks tidy.",
    cost: 0,
    time: "5 mins",
    difficulty: "Effortless",
    zeroDamage: true
  },

  /* Low-Cost DIY Hacks (< ₹600) */
  {
    id: "diy-1",
    category: "diy",
    title: "Soft paper lantern over a bare ceiling bulb",
    description: "Hang an inexpensive 30cm paper globe shade over a harsh bare bulb. It turns sharp glare into soft, flattering 360° warmth.",
    cost: 320,
    time: "10 mins",
    difficulty: "Easy",
    zeroDamage: true
  },
  {
    id: "diy-2",
    category: "diy",
    title: "Peel-and-stick woodgrain film for a worn desk",
    description: "Cover a scratched hostel desk with removable contact paper. When moving out, warm it with a hair dryer and it peels off without sticky residue.",
    cost: 420,
    time: "25 mins",
    difficulty: "Medium",
    zeroDamage: true
  },
  {
    id: "diy-3",
    category: "diy",
    title: "Washi tape photo and postcard wall",
    description: "Use Japanese washi paper tape to hang photos, art prints, and postcards. It holds securely and peels cleanly off rental paint without a tear.",
    cost: 160,
    time: "20 mins",
    difficulty: "Fun",
    zeroDamage: true
  },
  {
    id: "diy-4",
    category: "diy",
    title: "Hanging plant cradle made with jute string",
    description: "Tie a quick macrame loop with natural jute string to suspend a trailing ivy from your curtain rod bracket without drilling.",
    cost: 110,
    time: "15 mins",
    difficulty: "Easy",
    zeroDamage: true
  },

  /* Renter-Safe Purchases */
  {
    id: "buy-1",
    category: "buy",
    title: "Command picture hanging strips (4-pack)",
    description: "Interlocking adhesive strips that hold framed prints flat to the wall and pull off cleanly when moving out. Zero nail holes.",
    cost: 380,
    time: "5 mins",
    difficulty: "Effortless",
    zeroDamage: true
  },
  {
    id: "buy-2",
    category: "buy",
    title: "2700K warm LED clamp lamp",
    description: "Clamps to your bed frame, desk, or bookshelf. Gives you warm golden light for late-night reading without disturbing roommates.",
    cost: 590,
    time: "2 mins",
    difficulty: "Instant",
    zeroDamage: true
  },
  {
    id: "buy-3",
    category: "buy",
    title: "Braided natural jute floor runner (60×120cm)",
    description: "Rolls out right beside your bed. Keeps your bare feet off freezing tile floors and rolls up easily on move-out day.",
    cost: 750,
    time: "1 min",
    difficulty: "Instant",
    zeroDamage: true
  },
  {
    id: "buy-4",
    category: "buy",
    title: "Washed waffle-weave cotton bed runner",
    description: "Drapes across the foot of your bed for an instant texture upgrade without buying an expensive new bedding set.",
    cost: 650,
    time: "1 min",
    difficulty: "Instant",
    zeroDamage: true
  },
  {
    id: "buy-5",
    category: "buy",
    title: "Spring-tension curtain rod",
    description: "Twists into place between window frames or doorways in 30 seconds. No drilling, holds light linen curtains, and leaves zero marks.",
    cost: 480,
    time: "5 mins",
    difficulty: "Easy",
    zeroDamage: true
  }
];

export const RENTER_PRINCIPLES = [
  {
    number: "01",
    title: "Light the corners, not the ceiling",
    body: "Harsh fluorescent tube lights flatten small rooms and give you headaches. Turn off the overhead fixture and place two or three warm 2700K lamps at different heights: one on your desk, one by your bed, and one bouncing softly off an empty wall.",
    quote: "Warmth comes from soft pools of light, not an overhead interrogation beam."
  },
  {
    number: "02",
    title: "When landlords ban paint, rely on texture",
    body: "If your rental agreement says no painting, don't worry about living in a plain white box. Layer tactile textures instead: a woven jute runner underfoot, crinkled washed linen on the bed, matte clay on your desk, and ribbed glassware for water.",
    quote: "Neutral colors feel rich and inviting when the materials have touchable grain."
  },
  {
    number: "03",
    title: "Think vertical when square footage is tight",
    body: "When floor space is limited, clutter piles up quickly. Lift the room's energy upward with spring-tension rods, adhesive picture ledges at eye level, and an easy pothos plant trailing from a top shelf.",
    quote: "Small rooms feel twice as spacious when you draw the eye up."
  },
  {
    number: "04",
    title: "The 11-Month Rule",
    body: "If you can't easily pack it into a cab or carry it down three flights of stairs when your lease ends, think twice before buying it. Focus on lightweight textiles, collapsible paper lamps, and versatile organizers that move with you.",
    quote: "The best rental pieces are lightweight, durable, and easy to pack."
  }
];
