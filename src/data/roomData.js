/* ==========================================================================
   RoomRevive AI — Studio Data & Architectural Presets
   Carefully curated for Indian & Global renters, students, and PG dwellers
   ========================================================================== */

export const ROOM_PRESETS = [
  {
    id: "student-hostel",
    name: "Student Hostel & PG Room",
    subtitle: "Single bed, tiled floor, harsh 6500K tube light, scuffed study desk",
    dimensions: "3.2m × 2.8m (9.0 m² / ~96 sq.ft)",
    beforeImage: "/images/student_room_before_1791721144093.jpg",
    beforeNotes: "Common issues: stark overhead tube lighting casting harsh shadows, cold linoleum/tile, exposed wire clutter under desk, flat poly-blend bedding.",
    styles: {
      japandi: {
        id: "japandi",
        name: "Warm Minimalist & Japandi",
        tagline: "Pale birch, rice-paper glow, and tactile linen layers",
        paletteName: "Birch • Rice Paper • Flax Linen",
        accentColor: "#DDD2BF",
        swatches: ["flax-linen", "natural-jute"],
        afterImage: "/images/student_room_japandi_after_1791721184670.jpg",
        description: "Replaces clinical white glare with 2700K warm paper lighting. A natural jute runner warms the cold tile, while layered flax-linen bedding adds tactile softness without repainting walls.",
        keyChanges: [
          "Swap overhead tube light for a warm 2700K plug-in rice paper lantern",
          "Layer a 120×180cm woven jute runner over the tiled floor",
          "Introduce a low birch riser for desk stationery and books",
          "Fold textured linen throw over the foot of the bed"
        ],
        annotations: [
          {
            id: 1,
            x: 28,
            y: 35,
            title: "2700K Ambient Lighting",
            detail: "Rice paper globe pendant softens harsh shadow lines and warms off-white walls."
          },
          {
            id: 2,
            x: 68,
            y: 42,
            title: "Zero-Drill Floating Shelf",
            detail: "Heavy-duty 5kg Command strip picture ledge for paperbacks and ceramic bud vase."
          },
          {
            id: 3,
            x: 48,
            y: 78,
            title: "Braided Jute Floor Zone",
            detail: "Natural woven texture masks clinical hospital-grade floor tiles with acoustic warmth."
          },
          {
            id: 4,
            x: 75,
            y: 65,
            title: "Desk Cable Tucking",
            detail: "Hidden under-desk velcro raceway keeps charging cords invisible from the doorway."
          }
        ]
      },
      terracotta: {
        id: "terracotta",
        name: "Earthy Terracotta & Clay",
        tagline: "Warm sunbaked tones, woven fibers, and grounded comfort",
        paletteName: "Raw Clay • Burnt Umber • Sand",
        accentColor: "#C8664B",
        swatches: ["terracotta-clay", "natural-jute"],
        afterImage: "/images/student_room_terracotta_after_1791721285356.jpg",
        description: "Infuses the room with sunbaked warmth through rust-orange textile accents, unglazed terracotta pottery, and amber-tinted ambient lamplight. Perfect for rooms lacking natural sun.",
        keyChanges: [
          "Rust-orange washed cotton pillow covers and bed runner",
          "Unglazed terracotta desktop planter with snake plant",
          "Amber Edison filament bulb in a brass clip-on lamp",
          "Woven cane storage basket for laundry and extra blankets"
        ],
        annotations: [
          {
            id: 1,
            x: 32,
            y: 30,
            title: "Amber Task Lamp",
            detail: "Warm 2200K brass desk clamp brings cozy late-night study atmosphere."
          },
          {
            id: 2,
            x: 55,
            y: 62,
            title: "Terracotta Bed Runner",
            detail: "Provides rich earth tone focal point against standard landlord-white sheets."
          },
          {
            id: 3,
            x: 82,
            y: 45,
            title: "Clay Planter & Snake Plant",
            detail: "Low-maintenance greenery in breathable terracotta pot purifies stale hostel air."
          }
        ]
      },
      sage: {
        id: "sage",
        name: "Muted Sage & Botanical",
        tagline: "Calming botanical hues, olive cotton, and light rattan",
        paletteName: "Muted Sage • Olive • Light Rattan",
        accentColor: "#6B7F6D",
        swatches: ["sage-canvas", "flax-linen"],
        afterImage: "/images/student_room_sage_after_1791721320405.jpg",
        description: "A restorative retreat from hectic campus life. Soft eucalyptus and sage textiles paired with light cane accents lower visual stress and bring natural elements indoors.",
        keyChanges: [
          "Olive-green washed canvas cushion covers",
          "Rattan desk organizer tray for daily essentials",
          "Tension rod botanical curtain panel that leaves zero wall marks",
          "Small pothos ivy trailing over a bookshelf corner"
        ],
        annotations: [
          {
            id: 1,
            x: 30,
            y: 40,
            title: "Tension Rod Curtain",
            detail: "Spring-loaded rod hangs textured linen sheer without a single drilled screw."
          },
          {
            id: 2,
            x: 60,
            y: 58,
            title: "Sage Duck Canvas Throw",
            detail: "Durable, washable accent layer that resists accidental tea or coffee spills."
          },
          {
            id: 3,
            x: 78,
            y: 36,
            title: "Trailing Pothos Vine",
            detail: "Zero-damage suction hook allows healthy indoor vine to drape along the window sill."
          }
        ]
      }
    }
  },
  {
    id: "rental-studio",
    name: "Small Rental Studio / 1RK",
    subtitle: "Multipurpose living-sleeping space, rental beige walls, mismatched furniture",
    dimensions: "4.1m × 3.6m (14.8 m² / ~159 sq.ft)",
    beforeImage: "/images/renter_studio_before_1791721346719.jpg",
    beforeNotes: "Common issues: awkward sightline where the bed is immediately visible from entrance, bare off-white walls, harsh overhead light, general furniture sprawl.",
    styles: {
      japandi: {
        id: "japandi",
        name: "Warm Minimalist & Japandi",
        tagline: "Zoned visual partitions, neutral textured textiles, and soft corners",
        paletteName: "Oatmeal • Pale Oak • Warm Stone",
        accentColor: "#DDD2BF",
        swatches: ["flax-linen", "natural-jute"],
        afterImage: "/images/renter_studio_after_1791721374592.jpg",
        description: "Creates intentional visual zones without building walls. Uses a low open shelf as a room divider, a cozy textured floor rug to anchor the seating corner, and warm floor lamps.",
        keyChanges: [
          "Low open bookshelf functioning as an airy, non-blocking room divider",
          "Large textured flatweave rug anchoring the resting zone",
          "Floor-standing paper lantern providing soft evening illumination",
          "Neutral waffle throw to harmonize mismatched rental sofa/futon"
        ],
        annotations: [
          {
            id: 1,
            x: 24,
            y: 48,
            title: "Open Divider Shelf",
            detail: "Defines entry hallway from sleeping area without cutting off daylight or airflow."
          },
          {
            id: 2,
            x: 65,
            y: 32,
            title: "Warm Diffuse Paper Lantern",
            detail: "Floor lantern with 2700K 9W LED bulb completely eliminates clinical ceiling glare."
          },
          {
            id: 3,
            x: 52,
            y: 74,
            title: "Zone Defining Rug",
            detail: "Visually unifies the seating space and cushions footsteps for acoustic dampening."
          }
        ]
      },
      terracotta: {
        id: "terracotta",
        name: "Earthy Terracotta & Clay",
        tagline: "Warm sunset palette, textured cushions, and ceramic accents",
        paletteName: "Rust • Terracotta • Natural Wood",
        accentColor: "#C8664B",
        swatches: ["terracotta-clay", "natural-jute"],
        afterImage: "/images/student_room_terracotta_after_1791721285356.jpg",
        description: "Brings depth to open studio spaces through warm earthy textiles, clay vessels, and ambient lighting.",
        keyChanges: [
          "Terracotta throw cushions and oversized textured floor cushion",
          "Warm brass plug-in sconce mounted on adhesive strips",
          "Woven storage baskets for shoes and gym equipment"
        ],
        annotations: [
          {
            id: 1,
            x: 35,
            y: 45,
            title: "Terracotta Accent Layer",
            detail: "Breaks up cold rental walls with inviting natural warmth."
          }
        ]
      },
      sage: {
        id: "sage",
        name: "Muted Sage & Botanical",
        tagline: "Airy greens, linen drapes, and organic comfort",
        paletteName: "Sage • Washed Canvas • Natural Linen",
        accentColor: "#6B7F6D",
        swatches: ["sage-canvas", "flax-linen"],
        afterImage: "/images/student_room_sage_after_1791721320405.jpg",
        description: "Transforms a generic city studio into a peaceful botanical sanctuary using easy-care plants and calming tones.",
        keyChanges: [
          "Sage cotton throw and botanical framed line-art",
          "Floor plant in lightweight woven basket",
          "Warm glow bedside reading light"
        ],
        annotations: [
          {
            id: 1,
            x: 42,
            y: 50,
            title: "Botanical Rest Zone",
            detail: "Quiet visual rhythm through balanced green tones and natural wood."
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
    title: "Tuck snake wiring into binder clips",
    description: "Clamp binder clips to the rear edge of your desk and run charger cables through the metal loops. Eliminates 70% of visual desk clutter.",
    cost: 0,
    time: "10 mins",
    difficulty: "Effortless",
    zeroDamage: true
  },
  {
    id: "free-2",
    category: "free",
    title: "Bed alignment to natural light angle",
    description: "Shift your bed 30–40cm away from the dark corner toward window light. Opens up doorway sightlines and makes small rooms breathe.",
    cost: 0,
    time: "15 mins",
    difficulty: "Medium",
    zeroDamage: true
  },
  {
    id: "free-3",
    category: "free",
    title: "Hospital-corners bedding tuck",
    description: "Tuck bedsheet corners at neat 45° angles. Instantly converts messy hostel bedding into a tailored, boutique hotel look.",
    cost: 0,
    time: "5 mins",
    difficulty: "Easy",
    zeroDamage: true
  },
  {
    id: "free-4",
    category: "free",
    title: "Tray grouping rule for loose items",
    description: "Place perfume, keys, and watches onto a single ceramic plate or shallow lid. 15 scattered objects look messy; 15 objects in one tray look curated.",
    cost: 0,
    time: "5 mins",
    difficulty: "Effortless",
    zeroDamage: true
  },

  /* Low-Cost DIY Hacks (< ₹600) */
  {
    id: "diy-1",
    category: "diy",
    title: "Rice-paper diffuser shade over bulb",
    description: "Inexpensive 30cm paper lantern sphere hung over harsh bare bulbs. Diffuses sharp glare into soft, flattering 360° warmth.",
    cost: 320,
    time: "10 mins",
    difficulty: "Easy",
    zeroDamage: true
  },
  {
    id: "diy-2",
    category: "diy",
    title: "Peel-and-stick woodgrain desk cover",
    description: "Removable vinyl contact paper over a scratched hostel plywood desktop. Zero residue when peeled off with a hair dryer.",
    cost: 420,
    time: "25 mins",
    difficulty: "Medium",
    zeroDamage: true
  },
  {
    id: "diy-3",
    category: "diy",
    title: "Washi tape postcard & photo grid",
    description: "Japanese washi paper tape holds postcards, exhibition prints, or photos securely without lifting rental wall paint upon removal.",
    cost: 160,
    time: "20 mins",
    difficulty: "Fun",
    zeroDamage: true
  },
  {
    id: "diy-4",
    category: "diy",
    title: "Jute twine hanging plant cradle",
    description: "Simple DIY macrame knotting with natural jute string to suspend a lightweight ivy from a curtain rod bracket.",
    cost: 110,
    time: "15 mins",
    difficulty: "Easy",
    zeroDamage: true
  },

  /* Renter-Safe Purchases */
  {
    id: "buy-1",
    category: "buy",
    title: "Heavy-duty Command picture hanging strips (4-pack)",
    description: "Interlocking dual-lock adhesive strips rated for up to 7.2kg. Holds frames flat to the wall and pulls off cleanly without plaster damage.",
    cost: 380,
    time: "5 mins",
    difficulty: "Effortless",
    zeroDamage: true
  },
  {
    id: "buy-2",
    category: "buy",
    title: "2700K Warm LED clamp task lamp (frosted globe)",
    description: "Clamps to bedhead, shelf, or desk edge. Provides localized golden amber light so you never need to turn on the harsh ceiling tube.",
    cost: 590,
    time: "2 mins",
    difficulty: "Instant",
    zeroDamage: true
  },
  {
    id: "buy-3",
    category: "buy",
    title: "Braided natural jute floor runner (60×120cm)",
    description: "Covers the cold path between bed and desk. Naturally durable, hides scuffs, and gives tactile grounding underfoot.",
    cost: 750,
    time: "1 min",
    difficulty: "Instant",
    zeroDamage: true
  },
  {
    id: "buy-4",
    category: "buy",
    title: "Washed waffle-weave cotton bed runner (180×50cm)",
    description: "Adds rich textural contrast across the foot of the bed without having to buy expensive new complete sheet sets.",
    cost: 650,
    time: "1 min",
    difficulty: "Instant",
    zeroDamage: true
  },
  {
    id: "buy-5",
    category: "buy",
    title: "Spring-tension shower/window curtain rod",
    description: "Installs in 30 seconds by expanding between two doorframes or window jambs. No drilling, holds up to 10kg of lightweight fabric.",
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
    body: "Harsh 6500K fluorescent tubes flatten rooms and cast unflattering institutional shadows. Turn off the ceiling fixture and introduce 2 to 3 low-wattage 2700K warm lamps at varying heights: one on your desk, one beside your bed, one bouncing off an ivory wall.",
    quote: "Warmth comes from pools of light, not an overhead spotlight."
  },
  {
    number: "02",
    title: "Texture replaces paint when landlords forbid color",
    body: "If your landlord strictly bans painting walls, don't despair with beige. Bring depth through tactile contrast: rough woven jute underfoot, crinkled washed linen on the mattress, smooth unglazed clay on the desk, and ribbed glass for water carafes.",
    quote: "Monochrome looks rich when the materials have touchable grain."
  },
  {
    number: "03",
    title: "Height is your secret square footage",
    body: "When floor space is tiny, eyes naturally feel boxed in. Draw gaze upward with vertical tension rods, zero-damage Command picture ledges placed at 160cm eye level, and trailing foliage that cascades from the top shelf.",
    quote: "Small footprints feel double their size when the vertical axis is active."
  },
  {
    number: "04",
    title: "The 11-Month Rule",
    body: "If you cannot pack it into an Uber trunk or carry it down three flights of stairs when your lease renews in 11 months, don't buy it. Invest in lightweight textiles, collapsible paper lamps, and versatile organizers that adapt to your next apartment.",
    quote: "True renter elegance is nomadic and damage-free."
  }
];
