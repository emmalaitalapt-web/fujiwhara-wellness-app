// Topic data for the Library section.
// Each entry is a placeholder card to be filled in later with real
// content drawn from the relevant source PDF (noted in the comments).
const TOPICS = [
  {
    title: "Glucose & Insulin Resistance Basics",
    summary: "Blood sugar swings get harder to manage during perimenopause as hormonal changes affect insulin sensitivity. Steadier glucose means more stable energy, fewer cravings, and better results from your training and nutrition.",
    items: [
      {
        title: "1. Why It Matters in Perimenopause",
        text: "As oestrogen declines, insulin sensitivity tends to drop, meaning the same meal can cause a bigger blood sugar spike than it used to. Bigger spikes mean bigger crashes: more cravings, more energy dips, more fat storage, and a harder time losing fat even when you are training hard and eating well. Steadying your glucose is one of the most powerful things you can do to feel better day to day and support body composition through this stage of life."
      },
      {
        title: "2. Eat in the Right Order",
        text: "The order you eat food in a meal changes how much your blood sugar rises. Eat vegetables or salad first to slow glucose absorption, then protein and healthy fats to improve fullness and reduce spikes, and save carbs (rice, bread, pasta, potato) for last. This order alone, with no other changes to what you eat, significantly flattens your glucose response."
      },
      {
        title: "3. Never Eat Carbs Alone",
        text: "'Naked' carbs (eaten on their own) cause the sharpest spikes. Always dress your carbs with protein or fat: apple with peanut butter, rice with chicken and olive oil, crackers with cheese, toast with eggs or avocado, fruit with yoghurt or nuts. Fat and protein blunt the glucose spike from the carbs."
      },
      {
        title: "4. Start the Day Savoury",
        text: "A sweet breakfast (cereal, toast and jam, smoothies) sets off an early glucose spike that can affect your energy and cravings for the rest of the day. Swap to eggs and veggies, Greek yoghurt and nuts, or leftover dinner. A savoury start stabilises energy from the get-go."
      },
      {
        title: "5. Add Fibre Wherever You Can",
        text: "Fibre slows glucose release throughout a meal. Add chia seeds to yoghurt, include vegetables in every meal, and add legumes like beans or lentils where you can. Small additions across the day add up."
      }
    ],
    note: "Small swaps at every meal, in the right order, make the biggest difference over time."
    // Source: Fujiwhara_Glucose_Guide_FIXED_v3.pdf, glucose_goddess_fujiwhara.pdf
  },
  {
    title: "After-Meal Habits to Minimise Glucose Spikes",
    summary: "What you do in the 10 to 20 minutes around a meal has a big impact on how high your blood sugar rises and how quickly it settles back down.",
    items: [
      {
        title: "1. Walk After Meals",
        text: "A 10-minute walk after eating gets your muscles using glucose for fuel, which lowers blood sugar quickly. Even light movement counts: walking the block, pottering around the house, or doing light chores."
      },
      {
        title: "2. Try Vinegar Before Meals",
        text: "Mix 1 tablespoon of apple cider vinegar into a glass of water and drink it 10 to 20 minutes before a carb-containing meal, or use a vinegar-based dressing on your salad. It improves insulin sensitivity, leading to a smaller glucose spike."
      },
      {
        title: "3. Save Dessert for After a Meal",
        text: "If you are having something sweet, have it after a full meal rather than as a standalone snack. The slower digestion from the meal already in your system means a much smaller spike from the dessert."
      },
      {
        title: "4. Ditch Sugary Drinks",
        text: "Liquid sugar spikes glucose faster than almost any other source. Swap juice for whole fruit, soft drink for sparkling water, and flavoured drinks for water with lemon or lime."
      },
      {
        title: "5. If You Only Do 3 Things",
        text: "Feeling overwhelmed? Start with these: walk after meals, never eat carbs on their own, and switch to a savoury breakfast. These three habits have the highest impact and make everything else easier to layer on top."
      }
    ],
    note: "Your blood sugar responds fast. A few consistent after-meal habits add up to steadier energy all day."
    // Source: Fujiwhara_Glucose_Guide_FIXED_v3.pdf, glucose_goddess_fujiwhara.pdf
  },
  {
    title: "Sleep",
    summary: "Hormonal changes during perimenopause and menopause can make sleep more difficult. A few consistent habits make a real difference.",
    items: [
      {
        title: "1. Limit Screens Before Bed",
        text: "Avoid phones, tablets, and computers for at least 1 hour before bedtime. Blue light suppresses melatonin, the hormone that helps regulate sleep."
      },
      {
        title: "2. Create a Calming Bedtime Routine",
        text: "Give your brain a signal that the day is ending. Spend the last 30 to 60 minutes before bed doing relaxing things: reading, stretching, breathing, journaling."
      },
      {
        title: "3. Take a Warm Shower or Bath",
        text: "A warm shower or bath 1 to 2 hours before bed helps. The drop in body temperature afterwards signals to your brain that it is time to sleep."
      },
      {
        title: "4. Magnesium in the Evening",
        text: "Magnesium may help relax the nervous system and muscles. Many women find around 300 to 500mg in the evening supports better sleep. Check with your GP if unsure."
      },
      {
        title: "5. Make Your Bedroom Sleep Friendly",
        text: "Cool, dark, and quiet. Blackout curtains or an eye mask, white noise if needed, and a bedroom temperature around 18 to 20 degrees Celsius."
      },
      {
        title: "6. Get Morning Sunlight",
        text: "Aim for 15 to 30 minutes of natural light within 30 minutes of waking. This sets your circadian rhythm and improves nighttime sleep dramatically."
      },
      {
        title: "7. Move Your Body Daily",
        text: "Regular movement improves sleep quality and reduces stress. Strength training, walking, and general activity all support deeper, more restorative sleep."
      },
      {
        title: "8. Keep a Consistent Sleep Schedule",
        text: "Same wake time every day, including weekends. A consistent rhythm is more powerful than any single bedtime habit you can adopt."
      },
      {
        title: "9. Stop Eating 3 Hours Before Bed",
        text: "When you eat close to bedtime, your body stays busy digesting instead of doing its most important overnight work: repairing tissue, balancing hormones, and burning fat for fuel. Finishing your last meal at least 3 hours before sleep gives your body the clear signal to shift into fat-burning mode. It also keeps blood sugar stable overnight, reducing the cortisol spikes that disrupt deep sleep and make fat loss harder. Think of the overnight fast as your body's nightly reset. The earlier you close the kitchen, the more time you give it to do the job."
      }
    ],
    note: "Good sleep is not about perfection. It is about small daily habits that support your body over time."
    // Source: Fujiwhara_9_Ways_To_Improve_Sleep.pdf
  },
  {
    title: "Gut Health",
    summary: "Your gut microbiome is a vast ecosystem of bacteria that shapes your energy, immunity, mood, inflammation, and hormones. Food is the most powerful lever you have to build a healthier, more diverse gut.",
    items: [
      {
        title: "1. Why Your Gut Microbiome Matters",
        text: "Around 70 percent of your immune system lives in your gut. Your microbiome regulates how you extract energy from food and store fat, produces serotonin precursors and talks to your brain via the vagus nerve, makes short-chain fatty acids that reduce inflammation, and influences hunger hormones like leptin and ghrelin. Diversity is the goal: a microbiome with many different species is a resilient one, and food is the most powerful lever you have to build it."
      },
      {
        title: "2. Aim for 30 Plants a Week",
        text: "Gut health researcher Prof Tim Spector found that people eating 30+ different plants a week have significantly more diverse gut microbiomes than those eating 10 or fewer, linked to lower inflammation, better metabolic health, and stronger immunity. Every variety of vegetable, fruit, whole grain, legume, nut, seed, herb, spice, and even coffee and dark chocolate (70%+) counts separately. A mixed seed blend on breakfast is 4 plants in one bowl, a mixed nuts bag for snacking gives 5 to 6, and cooking with 3 to 4 vegetables instead of 1 to 2 adds up fast."
      },
      {
        title: "3. Fermented Foods: Your Gut's Best Friend",
        text: "While plants feed the good bacteria you already have, fermented foods add new beneficial bacteria directly. A 10-week Stanford study found daily fermented food intake increased microbiome diversity and decreased 19 inflammatory markers. Best options: Greek yoghurt with live cultures (your best protein-rich probiotic, ~15g protein per serve), kefir, kimchi and sauerkraut, kombucha, and miso or tempeh. Look for 'live cultures', 'naturally fermented', or 'unpasteurised' on the label, pasteurised versions have the bacteria killed off and do not give the same benefit."
      },
      {
        title: "4. The Veggie Starter Hack",
        text: "Eat a small plate of vegetables before your main meal as a deliberate first course. The fibre arrives in your gut first, feeding good bacteria before carbs follow, and creates a protective layer that slows glucose absorption and reduces post-meal spikes and cravings. Keep it simple: cucumber, carrot sticks, cherry tomatoes, celery, or leftover roasted veg, with olive oil and salt if you like. You have up to 90 minutes of benefit, and varying the vegetables also counts toward your 30 plants."
      },
      {
        title: "5. A Gut-Friendly Breakfast Bowl",
        text: "Combine chia seeds, flaxseeds, live Greek yoghurt, mixed berries, sunflower seeds, and pumpkin seeds. This one bowl contributes 4 to 6 plants to your weekly count, delivers 28-32g of protein, and gives you live probiotic cultures to set your energy and appetite for the day. Short on time? Greek yoghurt plus mixed seeds plus a handful of berries plus overnight chia pudding, prepped the night before and grabbed from the fridge."
      },
      {
        title: "6. Progress, Not Perfection",
        text: "You will not hit 30 plants every week, and that is fine, even 20 is a meaningful improvement. One meal will not make or break your microbiome; consistency over weeks and months drives real change. Ultra-processed food is the real enemy, it is about crowding it out rather than being perfect with vegetables. Stress and poor sleep also harm your gut, so do not underestimate rest and recovery. If you have recently needed antibiotics, rebuilding with fermented foods and plants is especially worthwhile."
      },
      {
        title: "7. Your Quick-Win Action Plan",
        text: "Start small and build: add live-culture yoghurt daily, add a mixed seed blend to breakfast, and eat vegetables before one meal a day, these are the highest-impact habits. Then aim for 3+ different veg in main meals, swap one snack for mixed nuts or fruit, and add kefir or kimchi 2-3 times a week. Your microbiome responds within days, you'll notice better digestion and steadier energy before any lab test would show it. Start with one or two habits, let them become automatic, then layer in more."
      }
    ],
    note: "The goal is progress, not perfection. A few consistent habits add up to a genuinely healthier gut over time."
    // Source: Feed_Your_Gut_Fujiwhara.pdf
  }
];
