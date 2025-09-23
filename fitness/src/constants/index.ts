export const USER_PROGRAMS = [
  {
    id: 1,
    first_name: "Shrijay",
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
    fitness_goal: "Cutting / Fat Loss",
    height: "5'9\"",
    weight: "80.25 kg",
    age: 20,
    workout_days: 6,
    injuries: "None",
    fitness_level: "Advance",
    equipment_access: "Gym",
    dietary_restrictions: "None",
    workout_plan: {
      title: "6-Day Cutting Program",
      weekly_schedule: [
        { day: "Monday", focus: "Chest & Triceps", duration: "60 min" },
        { day: "Tuesday", focus: "Back & Biceps", duration: "60 min" },
        { day: "Wednesday", focus: "Legs & Core", duration: "60 min" },
        { day: "Thursday", focus: "Shoulders & Abs", duration: "60 min" },
        { day: "Friday", focus: "Full Body Strength", duration: "60 min" },
        { day: "Saturday", focus: "Cardio & Core", duration: "60 min" },
      ],
      description:
        "This program focuses on cutting fat while maintaining muscle mass. It includes strength training and cardio sessions for overall fitness, with balanced progression and proper rest.",
    },
    diet_plan: {
      title: "Balanced Cutting Nutrition Plan",
      daily_calories: "2,200 calories",
      macros: { protein: "35%", carbs: "40%", fats: "25%" },
      meal_examples: [
        {
          meal: "Breakfast",
          example: "Oats with protein powder, banana, and almond milk",
        },
        {
          meal: "Lunch",
          example: "Grilled chicken breast, brown rice, steamed vegetables",
        },
        { meal: "Dinner", example: "Baked fish, quinoa, mixed salad" },
        { meal: "Snacks", example: "Greek yogurt, almonds, protein shake" },
      ],
      description:
        "This meal plan supports fat loss while preserving muscle. High protein and moderate carbs fuel your workouts, while healthy fats aid recovery.",
    },
  },
  {
    id: 2,
    first_name: "Ananya",
    profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
    fitness_goal: "Toning & Flexibility",
    height: "5'5\"",
    weight: "60 kg",
    age: 23,
    workout_days: 5,
    injuries: "None",
    fitness_level: "Beginner",
    equipment_access: "Home gym / Dumbbells",
    dietary_restrictions: "Vegetarian",
    workout_plan: {
      title: "5-Day Toning & Flexibility Program",
      weekly_schedule: [
        { day: "Monday", focus: "Yoga & Core", duration: "40 min" },
        { day: "Tuesday", focus: "Lower Body Toning", duration: "45 min" },
        {
          day: "Wednesday",
          focus: "Active Recovery & Stretching",
          duration: "30 min",
        },
        { day: "Thursday", focus: "Upper Body Toning", duration: "45 min" },
        { day: "Friday", focus: "Full Body Cardio & Core", duration: "50 min" },
      ],
      description:
        "This program focuses on toning muscles, improving flexibility, and enhancing overall body posture. Combines yoga, bodyweight exercises, and light resistance training.",
    },
    diet_plan: {
      title: "Balanced Vegetarian Nutrition for Toning",
      daily_calories: "1,800 calories",
      macros: { protein: "30%", carbs: "45%", fats: "25%" },
      meal_examples: [
        { meal: "Breakfast", example: "Poha with vegetables and peanuts" },
        { meal: "Lunch", example: "Paneer stir-fry with brown rice and salad" },
        { meal: "Dinner", example: "Mixed vegetable curry with chapati" },
        {
          meal: "Snacks",
          example: "Fruits, roasted chickpeas, protein smoothie",
        },
      ],
      description:
        "This meal plan emphasizes plant-based protein, complex carbs, and healthy fats to support muscle toning, recovery, and energy for workouts.",
    },
  },
  {
    id: 3,
    first_name: "Rohan",
    profilePic: "https://randomuser.me/api/portraits/men/41.jpg",
    fitness_goal: "Strength & Endurance",
    height: "5'11\"",
    weight: "75 kg",
    age: 25,
    workout_days: 6,
    injuries: "Shoulder strain (mild)",
    fitness_level: "Intermediate",
    equipment_access: "Full gym",
    dietary_restrictions: "None",
    workout_plan: {
      title: "Strength & Endurance Program",
      weekly_schedule: [
        { day: "Monday", focus: "Chest & Triceps", duration: "60 min" },
        { day: "Tuesday", focus: "Back & Biceps", duration: "60 min" },
        { day: "Wednesday", focus: "Cardio & Core", duration: "50 min" },
        { day: "Thursday", focus: "Legs & Abs", duration: "60 min" },
        { day: "Friday", focus: "Shoulders & Arms", duration: "60 min" },
        { day: "Saturday", focus: "Full Body Circuit", duration: "60 min" },
      ],
      description:
        "This program improves overall strength, muscular endurance, and cardiovascular fitness. Focus on progressive overload while preventing injury.",
    },
    diet_plan: {
      title: "High Protein Indian Nutrition Plan",
      daily_calories: "2,600 calories",
      macros: { protein: "35%", carbs: "45%", fats: "20%" },
      meal_examples: [
        { meal: "Breakfast", example: "Egg bhurji with multigrain toast" },
        {
          meal: "Lunch",
          example: "Grilled chicken with quinoa and stir-fried vegetables",
        },
        { meal: "Dinner", example: "Paneer tikka with chapati and salad" },
        { meal: "Snacks", example: "Boiled eggs, nuts, whey protein shake" },
      ],
      description:
        "This plan emphasizes high protein and balanced macros for strength and endurance. Includes Indian meals adapted for muscle recovery and energy.",
    },
  },
];
