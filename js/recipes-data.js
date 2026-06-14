// Recipe data for the Recipes section.
// "breakfast" entries are adapted from the Fujiwhara Savoury Breakfast
// Recipes PDF. "lunch" and "dinner" are placeholders to be expanded
// later in the same style.
const RECIPES = {
  breakfast: [
    {
      title: "Emma's High-Protein Breakfast Bowl",
      description: "My go-to bowl — high protein, loads of fibre, healthy fats, and the creatine is non-negotiable for muscle preservation and brain function.",
      tags: ["Protein", "Omega-3", "Magnesium"],
      meta: "Makes 1 portion | Prep 5 mins (plus overnight)",
      ingredients: [
        "2 tbsp chia seeds",
        "125ml (½ cup) unsweetened almond milk",
        "Generous pinch cinnamon",
        "3 heaped tbsp full-fat Greek yoghurt (lowest sugar available)",
        "1 tbsp sunflower seeds",
        "1 tbsp pumpkin seeds",
        "1 heaped tsp ground flaxseed",
        "6g creatine monohydrate powder",
        "Generous handful blackberries, raspberries, sliced peach, nectarine, or kiwi"
      ],
      method: [
        "The night before: combine the chia seeds with the almond milk in a jar, stir in the cinnamon, cover and refrigerate overnight.",
        "In the morning, spoon the Greek yoghurt into the chia pudding and mix to combine.",
        "Stir in the sunflower seeds, pumpkin seeds, ground flaxseed and creatine powder.",
        "Top with your choice of fruit and serve."
      ]
    },
    {
      title: "The Perfect 7-Min Eggs",
      description: "The only skill required is knowing how to fill a pot with water — cook in advance and take to work wrapped in foil.",
      tags: ["Protein", "Vitamin D"],
      meta: "Makes 4 eggs | Cook 7 mins",
      ingredients: [
        "4 eggs, ideally free-range",
        "Salt and pepper"
      ],
      method: [
        "Bring a small saucepan of water to the boil, gently lower in the eggs and cook for exactly 7 minutes.",
        "Drain and run under cold water until cool enough to handle.",
        "Peel, cut in half, sprinkle with salt and pepper, and serve."
      ]
    },
    {
      title: "Savoury Jam on Toast",
      description: "A classic with a twist — this savoury jam keeps your glucose steady and the leftovers keep in the fridge for up to 2 weeks.",
      tags: ["Calcium", "Fibre"],
      meta: "Makes 1 x 450g jar (about 3 slices) | Prep 6-8 mins | Cook 10 mins",
      ingredients: [
        "1 x 300g jar roasted red capsicums, drained and finely chopped",
        "200g feta, crumbled",
        "2 tsp dried oregano",
        "Sourdough or rye bread, toasted",
        "1-2 tbsp olive oil"
      ],
      method: [
        "Preheat oven to 200°C/180°C fan. Mix the capsicums, feta, oregano and olive oil in a baking dish.",
        "Bake for 10 minutes until the feta has melted and the capsicums are heated through.",
        "Stir, then spread one-third of the mixture onto the toasted bread.",
        "Transfer the rest to a jar and refrigerate for up to 2 weeks."
      ]
    },
    {
      title: "No-spike Granola",
      description: "Typical granola is a glucose spike in a bowl — this version gets its sweetness from whole fruit and packs in protein via Greek yoghurt.",
      tags: ["Magnesium", "Fibre", "Calcium"],
      meta: "Makes 4 portions | Prep 4 mins | Cook 7 mins",
      ingredients: [
        "1 tsp coconut oil",
        "1½ tsp ground cinnamon",
        "Pinch salt",
        "100g pumpkin seeds",
        "50g pecans",
        "50g unblanched almonds or hazelnuts",
        "Full-fat Greek yoghurt, to serve",
        "Small handful fresh or frozen berries, to serve"
      ],
      method: [
        "Preheat oven to 200°C/180°C fan. Melt the coconut oil, then stir in the cinnamon and salt.",
        "Add the pumpkin seeds, pecans and almonds or hazelnuts and toss to coat.",
        "Spread on a lined baking tray and toast for 7 minutes, then cool completely.",
        "Store in an airtight container for up to 2 weeks.",
        "Serve over Greek yoghurt with a handful of berries."
      ]
    },
    {
      title: "My Two-Egg Omelette",
      description: "Thin like a crepe and bursting with flavour — add more eggs until it keeps you full for four hours.",
      tags: ["Protein", "Calcium"],
      meta: "Makes 1 portion | Prep 3 mins | Cook 2 mins",
      ingredients: [
        "Knob of butter",
        "2 eggs, beaten",
        "Handful feta, crumbled",
        "Handful cherry tomatoes, halved",
        "Salt and pepper"
      ],
      method: [
        "Melt the butter in a non-stick frying pan on low heat.",
        "Season the beaten eggs with salt and pepper.",
        "Pour the eggs into the bubbling butter and swirl to spread thinly. Scatter over the feta and tomatoes and cook for 1½ minutes until set.",
        "Fold in half and transfer to a plate."
      ]
    },
    {
      title: "Happy Halloumi",
      description: "Full of all the savoury breakfast necessities — protein, fat and fibre — to ride into your day with steady energy and no cravings.",
      tags: ["Protein", "Iron", "Calcium"],
      meta: "Makes 1 portion | Prep 4 mins | Cook 4 mins",
      ingredients: [
        "70g halloumi, cut into equal slices",
        "1 clove garlic, peeled and roughly chopped",
        "2.5cm piece fresh ginger, peeled and roughly chopped",
        "1 tsp garam masala or curry powder",
        "¼ tsp chilli powder (optional)",
        "Large handful spinach leaves",
        "Splash olive oil"
      ],
      method: [
        "Fry the halloumi slices in olive oil for 1 minute on each side until golden. Push to one side.",
        "Add the garlic and ginger to the empty side and fry for 30 seconds until starting to crisp.",
        "Stir in the garam masala or curry powder (and chilli powder if using).",
        "Add the spinach and cook for 30 seconds until just wilted.",
        "Plate the spinach and top with the halloumi."
      ]
    },
    {
      title: "Cosy Quiche",
      description: "Delightfully cosy and comforting — make this on a slow morning for four generous portions that last three days in the fridge.",
      tags: ["Protein", "Calcium", "Fibre"],
      meta: "Makes 4 portions | Prep 15 mins | Cook 43 mins",
      ingredients: [
        "Butter, for greasing",
        "1 sheet (320g) ready-made shortcrust pastry",
        "150g full-fat Greek yoghurt",
        "2 whole eggs + 2 yolks",
        "60g frozen peas",
        "60g goat's cheese log, 6 slices",
        "1 tbsp chopped chives",
        "Salt and pepper"
      ],
      method: [
        "Preheat oven to 200°C/180°C fan. Grease a 20cm loose-bottomed cake tin and line with the pastry.",
        "Blind-bake with baking paper and dried beans for 15 minutes, then remove and bake for a further 5 minutes.",
        "Whisk the yoghurt, whole eggs and egg yolks with salt and pepper, then stir in the peas.",
        "Pour into the pastry case, top with the goat's cheese and chives, and bake for 25 minutes until golden and set."
      ]
    },
    {
      title: "California Quesadilla",
      description: "Crisp tortilla, cool cream cheese, flaky salmon and a punch of heat — it satisfies your glucose and your beach-vacation cravings.",
      tags: ["Omega-3", "Protein", "Vitamin D"],
      meta: "Makes 1 portion | Prep 5 mins | Cook 6 mins",
      ingredients: [
        "Knob of butter",
        "1 small (120g) skinless boneless salmon fillet, roughly chopped",
        "1 flour or corn tortilla",
        "1 tbsp full-fat cream cheese",
        "½ avocado, stoned and thinly sliced",
        "Drizzle hot sauce (such as sriracha)",
        "Salt and pepper"
      ],
      method: [
        "Melt the butter in a non-stick frying pan and cook the salmon for about 3 minutes, stirring occasionally.",
        "Spread cream cheese over one half of the tortilla, scatter over the avocado, then top with the cooked salmon.",
        "Drizzle with hot sauce and season with salt and pepper.",
        "Fold the tortilla in half and cook for 3 minutes until golden and crisp. Cut in half to serve."
      ]
    },
    {
      title: "Cheeky Chickpea Stew",
      description: "A community favourite that can be whipped up in about 10 minutes — keeps in the fridge for up to four days.",
      tags: ["Fibre", "Iron", "Protein"],
      meta: "Makes 2 portions | Prep 4 mins | Cook 10 mins",
      ingredients: [
        "½ onion, roughly chopped",
        "2 cloves garlic, roughly chopped",
        "3 tomatoes, roughly chopped",
        "1 x 400g tin chickpeas, drained",
        "150ml water",
        "½ tsp hot sweet paprika (or any kind)",
        "Dollop full-fat Greek yoghurt, to serve",
        "Splash olive oil",
        "Salt and pepper"
      ],
      method: [
        "Heat the olive oil and fry the onion for 1½ minutes until softened, then add the garlic for 30 seconds more.",
        "Add the tomatoes, chickpeas, paprika and water. Cover and simmer for 7 minutes until the tomatoes break down.",
        "Season generously and serve with a dollop of Greek yoghurt.",
        "Refrigerate any leftovers in an airtight container for up to 4 days."
      ]
    },
    {
      title: "Rush-hour Egg Cups",
      description: "Make these in advance and take a couple with you as you head out the door — you'll need a six-cup silicone muffin mould.",
      tags: ["Protein", "Calcium", "Fibre"],
      meta: "Makes 6 muffins (about 3 portions) | Prep 8 mins | Cook 22 mins",
      ingredients: [
        "Knob of butter",
        "3 chestnut mushrooms, finely sliced",
        "6 spring onions, finely sliced",
        "1 small red capsicum, deseeded and finely chopped",
        "4 stalks broccolini, finely chopped",
        "6 eggs, whisked smooth",
        "50g feta, crumbled",
        "Vegetable oil, for brushing",
        "Salt and pepper"
      ],
      method: [
        "Preheat oven to 200°C/180°C fan and brush a silicone muffin mould with vegetable oil.",
        "Fry the mushrooms, spring onions, capsicum and broccolini for 4-5 minutes until softened, then cool slightly.",
        "Season the whisked eggs, then stir in the cooled vegetables and feta. Spoon into the muffin cups.",
        "Bake for 15-17 minutes until risen and set. Keeps in the fridge for up to 2 days."
      ]
    },
    {
      title: "Today I'm Fancy Salmon Toast",
      description: "For the days when you can get a little fancy — up the salmon quantity until it keeps you full for four hours.",
      tags: ["Omega-3", "Protein", "Vitamin D"],
      meta: "Makes 1 portion | Prep 5 mins",
      ingredients: [
        "1 slice rye bread",
        "1 heaped tbsp full-fat cream cheese",
        "1 slice smoked salmon, halved",
        "2 tsp capers, drained",
        "1 wedge lemon, for squeezing",
        "Salt and pepper"
      ],
      method: [
        "Toast the rye bread and spread evenly with cream cheese.",
        "Top with the salmon and capers, and serve with the lemon wedge for squeezing over."
      ]
    },
    {
      title: "Spinach & Sausage Sitting in a Tree",
      description: "First comes sausage, then comes garlic and spinach, then come steady glucose levels.",
      tags: ["Protein", "Iron", "Magnesium"],
      meta: "Makes 1 portion | Prep 10 mins | Cook 7 mins",
      ingredients: [
        "2 (about 60g each) good-quality sausages, cut into 1cm pieces",
        "2 cloves garlic, roughly chopped",
        "200g spinach leaves",
        "1 tbsp olive oil"
      ],
      method: [
        "Heat the olive oil and fry the sausage pieces for 5 minutes, turning regularly, until golden. Remove and keep warm.",
        "Add the garlic to the pan and fry for 30 seconds, then stir in the spinach and cook until wilted.",
        "Plate the spinach and top with the sausage pieces."
      ]
    },
    {
      title: "Avocado Toast 2.0",
      description: "The problem with most avocado toasts is they contain no protein — here we sneak some ham between the bread and the avocado.",
      tags: ["Protein", "Fibre"],
      meta: "Makes 1 portion | Prep 7 mins",
      ingredients: [
        "½ avocado, stoned",
        "1 tsp harissa paste",
        "1 slice rye or sourdough bread",
        "2 slices cooked ham",
        "Squeeze lemon juice (optional)",
        "Salt and pepper"
      ],
      method: [
        "Mash the avocado and harissa together with a fork, and season with salt and pepper.",
        "Toast the bread, lay the ham on top, then add the smashed avocado.",
        "Squeeze over a little lemon juice if you like, and serve."
      ]
    },
    {
      title: "Prosciutto. Ricotta. Figs.",
      description: "A meal this decadent and this good for your glucose feels almost illegal — make sure the fig is fresh, not dried.",
      tags: ["Protein", "Calcium", "Fibre"],
      meta: "Makes 1 portion | Prep 5 mins",
      ingredients: [
        "50g ricotta",
        "3 slices prosciutto (smoked, if available)",
        "1 fresh fig, cut into 6 wedges",
        "Salt and pepper",
        "Drizzle olive oil"
      ],
      method: [
        "Beat the ricotta with a fork until smooth, season with salt and pepper, and spoon onto a plate.",
        "Arrange the prosciutto and fig wedges on top, drizzle with olive oil and crack over more pepper."
      ]
    },
    {
      title: "One-Dish Delish",
      description: "Born from the philosophy that savoury breakfasts should be light on dish duty but heavy on flavour.",
      tags: ["Protein", "Fibre", "Iron"],
      meta: "Makes 1 portion | Prep 5 mins | Cook 25 mins",
      ingredients: [
        "10 cherry tomatoes, halved",
        "5 chestnut mushrooms, sliced",
        "¼ tin chickpeas, drained",
        "1 tbsp Worcestershire sauce",
        "1 tbsp olive oil",
        "2 rashers streaky bacon, each cut into 3",
        "1 egg",
        "Crusty bread, to serve",
        "Salt and pepper"
      ],
      method: [
        "Preheat oven to 220°C/200°C fan. Put the tomatoes, mushrooms and chickpeas in a small baking dish with the Worcestershire sauce and olive oil. Bake for 5 minutes.",
        "Arrange the bacon on top and bake for a further 10 minutes until crispy.",
        "Crack in the egg and return to the oven for 6-8 minutes until the white is set and the yolk is still runny.",
        "Serve with crusty bread to mop up the juices."
      ]
    },
    {
      title: "Toast Party",
      description: "Everyone is invited — everyone except naked toast. Dress it up in its best party clothes: protein, fat or fibre.",
      tags: ["Omega-3", "Protein", "Calcium"],
      meta: "Makes 1 portion | Prep 10 mins",
      ingredients: [
        "3 slices dark rye bread",
        "1 slice smoked trout",
        "2 tbsp soft goat's cheese",
        "1 heaped tbsp basil pesto",
        "Salt and pepper"
      ],
      method: [
        "Toast the rye bread and top each slice with one topping: smoked trout, goat's cheese, or pesto.",
        "Cut each slice in half, season with salt and pepper, and serve."
      ]
    },
    {
      title: "An Apple with Some Clothes On",
      description: "Whole fruits are a welcome addition to a savoury breakfast as long as they come with protein and fat — fruit should not go out naked.",
      tags: ["Calcium", "Omega-3", "Fibre"],
      meta: "Makes 1 portion | Prep 5 mins",
      ingredients: [
        "1 (about 90g) apple, sliced into rounds",
        "Juice of ¼ lemon",
        "40g Cheddar, sliced",
        "Small handful walnut halves or pieces"
      ],
      method: [
        "Dress the apple slices with lemon juice to stop them browning.",
        "Arrange on a plate with the Cheddar slices and scatter over the walnuts."
      ]
    },
    {
      title: "Tomato Toast",
      description: "A variation on avocado toast — tasty tomato on toasted sourdough, topped with creamy burrata and tangy pesto.",
      tags: ["Calcium", "Fibre"],
      meta: "Makes 1 portion | Prep 5 mins",
      ingredients: [
        "1 slice sourdough bread",
        "Small handful rocket",
        "½ ball burrata",
        "3 sun-dried tomatoes in oil, drained and halved",
        "1 heaped tsp good-quality basil pesto",
        "½ tbsp olive oil",
        "Salt and pepper"
      ],
      method: [
        "Toast the sourdough and drizzle with olive oil.",
        "Top with the rocket, burrata and sun-dried tomatoes, drizzle over the pesto, season and serve immediately."
      ]
    },
    {
      title: "Savoury Smoothie",
      description: "Not your regular glucose-spiking fruit smoothie — this protein, fat and fibre-packed version passes the savoury test with flying colours.",
      tags: ["Protein", "Omega-3", "Magnesium"],
      meta: "Makes 1 portion | Prep 5 mins",
      ingredients: [
        "2 scoops protein powder (whey or pea protein)",
        "1 tsp flaxseed oil",
        "2 tsp ground flaxseeds",
        "100g frozen fruit (e.g. blueberries)",
        "3 tbsp nut butter, or 30g nuts",
        "100ml water"
      ],
      method: [
        "Place all the ingredients in a blender with the water and blitz until smooth.",
        "Pour into a glass and enjoy."
      ]
    },
    {
      title: "Breakfast Ice Cream",
      description: "Ice cream for breakfast. Is any explanation really needed?",
      tags: ["Protein", "Calcium", "Fibre"],
      meta: "Makes 1 portion | Prep 5 mins",
      ingredients: [
        "4 heaped tbsp (100g) full-fat Greek yoghurt",
        "1 tbsp nut butter",
        "50g frozen mixed berries"
      ],
      method: [
        "Mix the yoghurt and nut butter together until smooth.",
        "Stir in the frozen berries and leave for 2-3 minutes — they'll semi-freeze the yoghurt."
      ]
    },
    {
      title: "A Peach with Some Clothes On",
      description: "Peaches called — they were jealous apples got some clothes. So we went shopping for protein and fat and peaches joined our savoury breakfast line-up.",
      tags: ["Protein", "Calcium"],
      meta: "Makes 1 portion | Prep 5 mins",
      ingredients: [
        "3 heaped tbsp full-fat Greek yoghurt",
        "1 ripe peach, stoned and cut into wedges",
        "2 tbsp good-quality light tahini (liquid)",
        "Pinch sea salt"
      ],
      method: [
        "Place the yoghurt and peach wedges in a bowl.",
        "Drizzle over the tahini, sprinkle with sea salt and serve."
      ]
    },
    {
      title: "Avocado Accident",
      description: "Putting together random ingredients from the fridge turned into a classic — a happy accident that's become a community favourite.",
      tags: ["Omega-3", "Protein", "Fibre"],
      meta: "Makes 1 portion | Prep 5 mins",
      ingredients: [
        "½ avocado, stoned and sliced",
        "Juice of ¼ lemon",
        "3 tbsp hummus",
        "½ x 110g tin tuna in olive oil, drained",
        "1 tbsp seeds (pumpkin or sunflower) and/or nuts",
        "1 tbsp olive oil",
        "Salt and pepper"
      ],
      method: [
        "Dress the avocado with lemon juice to stop it browning.",
        "Spoon the hummus onto a plate and arrange the avocado on top.",
        "Top with the tuna and seeds/nuts, drizzle with olive oil and season with salt and pepper."
      ]
    },
    {
      title: "Breakfast Salad",
      description: "This easy, throw-it-together breakfast tastes like summertime in a bowl — sweet watermelon, biting mint and creamy feta.",
      tags: ["Calcium", "Magnesium"],
      meta: "Makes 1 portion | Prep 5 mins",
      ingredients: [
        "125g watermelon, peeled and roughly cubed",
        "8 radishes, trimmed and sliced",
        "60g feta, crumbled",
        "3-4 sprigs mint, leaves picked and chopped",
        "2 tbsp pumpkin seeds",
        "Squeeze lime juice",
        "1 tbsp olive oil"
      ],
      method: [
        "Arrange the watermelon, radishes, feta and mint in a bowl.",
        "Sprinkle over the pumpkin seeds and drizzle with lime juice and olive oil."
      ]
    },
    {
      title: "Chilli Sardines",
      description: "Adding sardines and chilli oil takes avocado from 'been there, done that' to 'where has this been all my life?'",
      tags: ["Omega-3", "Calcium", "Protein"],
      meta: "Makes 1 portion | Prep 5 mins",
      ingredients: [
        "½ avocado, stoned and sliced",
        "Juice of ¼ lemon",
        "1 x small (90g) tin sardines in olive oil, drained",
        "Small handful rocket",
        "1 tbsp chilli oil (or 1 tbsp olive oil + pinch chilli flakes)",
        "Salt and pepper"
      ],
      method: [
        "Dress the avocado with lemon juice to stop it browning.",
        "Arrange the sardines with the rocket on a plate.",
        "Drizzle with chilli oil and season with salt and pepper before serving."
      ]
    },
    {
      title: "Fibre-first Garden Plate",
      description: "If you want to be extra helpful to your glucose, eat the rocket first — vegetables at the start of a meal reduce the potential spike.",
      tags: ["Fibre", "Calcium"],
      meta: "Makes 1 portion | Prep 5 mins",
      ingredients: [
        "½ ball burrata",
        "1 small peach, stoned and cut into chunks",
        "Small handful rocket",
        "2 tbsp pecans",
        "1 tbsp olive oil",
        "Salt and pepper"
      ],
      method: [
        "Arrange the burrata, peach, rocket and pecans in a bowl.",
        "Drizzle with olive oil, season with salt and pepper, and serve."
      ]
    }
  ],
  lunch: [
    {
      title: "Placeholder: Salmon & Lentil Salad",
      description: "A bright, satisfying midday plate — to be refined later.",
      tags: ["Omega-3", "Iron", "Fibre"],
      ingredients: [
        "1 fillet salmon, cooked",
        "1/2 cup cooked lentils",
        "Mixed leafy greens",
        "Lemon & olive oil dressing"
      ],
      method: [
        "Placeholder method step one.",
        "Placeholder method step two.",
        "Placeholder method step three."
      ]
    },
    {
      title: "Placeholder: Tofu & Quinoa Bowl",
      description: "A plant-powered lunch with staying power — to be refined later.",
      tags: ["Protein", "Calcium"],
      ingredients: [
        "1/2 block tofu",
        "1/2 cup cooked quinoa",
        "Steamed broccoli",
        "Tahini dressing"
      ],
      method: [
        "Placeholder method step one.",
        "Placeholder method step two."
      ]
    },
    {
      title: "Placeholder: Chicken & Spinach Wrap",
      description: "An easy, portable midday option — to be refined later.",
      tags: ["Protein", "Iron"],
      ingredients: [
        "Wholegrain wrap",
        "Sliced grilled chicken",
        "Handful of spinach",
        "Hummus"
      ],
      method: [
        "Placeholder method step one.",
        "Placeholder method step two."
      ]
    },
    {
      title: "Placeholder: Sardine & Bean Salad",
      description: "Tinned-pantry simplicity with a nutrient punch — to be refined later.",
      tags: ["Omega-3", "Calcium", "Fibre"],
      ingredients: [
        "1 tin sardines",
        "1 cup mixed beans",
        "Cherry tomatoes",
        "Olive oil & lemon"
      ],
      method: [
        "Placeholder method step one.",
        "Placeholder method step two."
      ]
    }
  ],
  dinner: [
    {
      title: "Placeholder: Baked Salmon & Greens",
      description: "A simple weeknight dinner — to be refined later.",
      tags: ["Omega-3", "Vitamin D"],
      ingredients: [
        "1 fillet salmon",
        "2 cups mixed greens",
        "1 tbsp olive oil",
        "Lemon wedge"
      ],
      method: [
        "Placeholder method step one.",
        "Placeholder method step two.",
        "Placeholder method step three."
      ]
    },
    {
      title: "Placeholder: Lean Beef Stir-fry",
      description: "Quick, filling, and iron-rich — to be refined later.",
      tags: ["Protein", "Iron"],
      ingredients: [
        "200g lean beef strips",
        "Mixed stir-fry vegetables",
        "1 tbsp soy sauce",
        "1/2 cup brown rice"
      ],
      method: [
        "Placeholder method step one.",
        "Placeholder method step two."
      ]
    },
    {
      title: "Placeholder: Lentil & Vegetable Curry",
      description: "A cosy, fibre-rich plant-based dinner — to be refined later.",
      tags: ["Fibre", "Iron", "Magnesium"],
      ingredients: [
        "1 cup red lentils",
        "Mixed vegetables",
        "Coconut milk",
        "Curry spices"
      ],
      method: [
        "Placeholder method step one.",
        "Placeholder method step two.",
        "Placeholder method step three."
      ]
    },
    {
      title: "Placeholder: Tofu & Broccoli Bake",
      description: "A simple bake for busy evenings — to be refined later.",
      tags: ["Calcium", "Protein"],
      ingredients: [
        "1 block tofu",
        "2 cups broccoli",
        "1 tbsp tahini",
        "Sesame seeds"
      ],
      method: [
        "Placeholder method step one.",
        "Placeholder method step two."
      ]
    }
  ]
};
