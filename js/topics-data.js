// Topic data for the Library section.
// Each entry is a placeholder card to be filled in later with real
// content drawn from the relevant source PDF (noted in the comments).
const TOPICS = [
  {
    title: "Glucose & Insulin Resistance Basics",
    summary: "Why blood sugar balance matters in perimenopause, and the basics of insulin resistance. Full content coming soon.",
    // Source: Fujiwhara_Glucose_Guide_FIXED_v3.pdf, glucose_goddess_fujiwhara.pdf
  },
  {
    title: "After-Meal Habits to Minimise Glucose Spikes",
    summary: "Simple, practical things to do after eating to keep blood sugar steady. Full content coming soon.",
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
