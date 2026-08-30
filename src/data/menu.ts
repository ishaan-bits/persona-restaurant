export interface MenuItem {
  name: string;
  description: string;
  price: string;
  veg: boolean;
}

export interface MenuCategory {
  title: string;
  subtitle?: string;
  sections: MenuSection[];
}

export interface MenuSection {
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    title: "Indian",
    subtitle: "Starters",
    sections: [
      {
        name: "Veg",
        items: [
          { name: "Multani Paneer", description: "Creamy Stuffed Cottage Cheese With Filling Of Cheese", price: "430", veg: true },
          { name: "Bherwa Kumbh", description: "Creamy Cheese Stuffed Mushroom With Filling Of Cheese", price: "380", veg: true },
          { name: "Malai Paneer Tikka", description: "Creamy Cottage Cheese Marinated With Cream & Spices", price: "420", veg: true },
          { name: "Paneer Tikka", description: "Cottage Cheese Marinated And Cooked With Indian Spices", price: "410", veg: true },
          { name: "Basil Paneer Tikka", description: "Cottage Cheese With Aroma Of Leafy & Spinach", price: "430", veg: true },
          { name: "Dahi Ke Sholay", description: "Curd And Paneer Kebab Made From Yoghurt", price: "370", veg: true },
          { name: "Hare Muttar Ka Kebab", description: "Kebab Made From Vegetables And Peas", price: "390", veg: true },
          { name: "Zaafraani Paneer Tikka", description: "Saffron Flavoured Cottage Cheese", price: "420", veg: true },
          { name: "Tandoori Phwarha Allu", description: "Stuffed Potato With The Fillings Of Dry Fruits", price: "350", veg: true },
          { name: "Dahi Ke Kebab", description: "Soft Shallow Fried Kebab Made From Yoghurt", price: "360", veg: true },
          { name: "Rajma Galouti", description: "Kebab made from Rajma", price: "380", veg: true },
          { name: "Veg Kebab Platter", description: "Assorted Kebab Platter", price: "780", veg: true },
        ],
      },
      {
        name: "Non-Veg",
        items: [
          { name: "Tandoori Murgh", description: "Whole Chicken Marinated With Indian Spices And Tendered In Tandoor", price: "650", veg: false },
          { name: "Murgh Tikka", description: "Chicken Boneless Marinated With Indian Spices And Tendered In Tandoor", price: "360", veg: false },
          { name: "Murgh Malai Tikka", description: "Chicken Boneless Marinated With The Blend Of Cheese And Cashnut With Smokey Flavour", price: "620", veg: false },
          { name: "Murgh Haryali Tikka", description: "Green flavoured Chicken Chunks Tendered In Tandoor", price: "630", veg: false },
          { name: "Murgh Gulafi Seekh Kebab", description: "Chicken Chunks Marinated And Cooked With The Masterpiece Of Chef Marinated With Jaggery Powder", price: "590", veg: false },
          { name: "Tandoori Jhinga", description: "Sea Food Marinated With Indian Spices And Yoghurt And Tended In Tandoor", price: "950", veg: false },
          { name: "Tandoori Pompfret", description: "Fish Marinated With Indian Spices And Yoghurt And Tended In Tandoor", price: "650", veg: false },
          { name: "Afghani Kebab", description: "Tandoori Chicken Marination Of Cream & Cashew", price: "620", veg: false },
          { name: "Lashkari Kebab", description: "Spiced Flavoured Chicken Chunks Tendered In Tandoor", price: "630", veg: false },
          { name: "Murgh Kali Mirch Tikka", description: "Chicken Chunks Marinated And Cooked With The Flavour Of Cream, Cashew & Black pepper", price: "590", veg: false },
          { name: "Dohara Kebab", description: "Mince Chicken And Mutton Cooked In Charcoal", price: "590", veg: false },
        ],
      },
    ],
  },
  {
    title: "Indian",
    subtitle: "Dal",
    sections: [
      {
        name: "Veg",
        items: [
          { name: "Lasuni Dal Tadka", description: "Lentils Cooked With Dal Tadka Tempered Cumin & Garlic In Clarified Butter", price: "330", veg: true },
          { name: "Dal Panchratan", description: "Mixed Lentils With Cumin & Garlic Flavour In Calified Butter", price: "350", veg: true },
          { name: "Dal Makhani", description: "Old Traditional Style Indian Lentils Cooked In Butter To Which Cream Gives Their Presence By The Aroma", price: "410", veg: true },
          { name: "Dal Double Tadka", description: "Lentils Cooked With Tadka Of Onion Tomato And Garlic Serving Tempering Done With Clarified Butter", price: "360", veg: true },
          { name: "Jain Dal", description: "Dal without onion and garlic", price: "270", veg: true },
        ],
      },
    ],
  },
  {
    title: "Indian",
    subtitle: "Curry",
    sections: [
      {
        name: "Veg",
        items: [
          { name: "Kadhai Paneer", description: "Spicy Cottage Cheese Tossed With Peppers And Shallots And Cooked In Traditional Kadhai Style", price: "410", veg: true },
          { name: "Paneer Do Pyaza", description: "Cottage Cheese And Shallots Cooked In Sauce", price: "410", veg: true },
          { name: "Paneer Butter Masala", description: "North Indian Favourite Cottage Cheese Cooked In Butter And Sweet Tomato Sauce", price: "510", veg: true },
          { name: "Paneer Tikka Masala", description: "Spiced Flavoured Cottage Cheese From Tandoor Cooked In Tomato Sauce", price: "525", veg: true },
          { name: "Paneer Lababdar", description: "Cottage Cheese With The Flavours Of Peppers In Thick Gravy", price: "490", veg: true },
          { name: "Palak Paneer", description: "Old Style Traditional Cottage Cheese Cooked With Flavours Of Garlic & Clarified Butter", price: "410", veg: true },
          { name: "Allu Gobhi Adraki", description: "Winters Favourite Potato & Cauliflower With Peppery Flavour", price: "320", veg: true },
          { name: "Mushroom Masala", description: "Mushroom Cooked In Typical Indian Style Tomato Gravy", price: "450", veg: true },
          { name: "Mushroom Do Payaza", description: "Mushroom And Shallots Cooked In Sauce", price: "460", veg: true },
          { name: "Veg Halezrez", description: "Sweet & Tangy Mix Vegetable Curry", price: "370", veg: true },
          { name: "Subz Navrattan Korma", description: "Mix Vegetables, Nuts and Fruits Cooked In Onion, Yoghurt and Cashew Nut Gravy", price: "430", veg: true },
          { name: "Subz Saagwala", description: "Mix Vegetables Cooked in Spinach Pulp with Garlic Flavor", price: "380", veg: true },
          { name: "Dum Aloo Banarsi", description: "Stuffed Potato Cooked in Curry", price: "430", veg: true },
          { name: "Jodhpuri Gatta Curry", description: "Bengalgram Flour Dumplings Cooked In Spiced Yoghurt", price: "380", veg: true },
          { name: "Malai Kofta", description: "Cottage Cheese Ball Cooked in Rich Gravy", price: "430", veg: true },
          { name: "Subz Rizala Kofta", description: "Indian Curry With Vegetables Balls In Rich Gravy", price: "390", veg: true },
          { name: "Deshi Aloo Vilyati Gosht", description: "Combination of Potato Along With Brocoli", price: "420", veg: true },
          { name: "Tava Seasonal", description: "Seasonal veggies cooked on traditional Tava", price: "430", veg: true },
          { name: "Persona Special Curry", description: "Exotic Vegetables Cooked in Makhani Gravy", price: "450", veg: true },
        ],
      },
      {
        name: "Non-Veg",
        items: [
          { name: "Mutton Rogan Josh", description: "Mutton Curry From Kashmir", price: "640", veg: false },
          { name: "Bhutti Mutton", description: "Traditional Bihari Style Mutton Curry", price: "630", veg: false },
          { name: "Sarso Diye Maacher Jhol", description: "Mustard Style Fish Curry From Bengali Cuisine", price: "510", veg: false },
          { name: "Murgh Saagwala", description: "Chicken Cooked With Spinach With The Flavour Of Garlic & Clarified Butter", price: "540", veg: false },
          { name: "Mutton Saagwala", description: "Mutton Cooked With Spinach With The Flavour Of Garlic & Clarified Butter", price: "660", veg: false },
          { name: "Methi Murgh", description: "Chicken Cooked with fenugreek With The Flavour Of Garlic & Clarified Butter", price: "570", veg: false },
          { name: "Murgh Tikka Masala", description: "Smoky Flavour Chicken Chunks Tended In Tandoor Cooked In Tomato Sauce", price: "590", veg: false },
          { name: "Murgh Kali Mirchi", description: "Chicken Chunks Cooked in Rich Gravy With The Flavors of Crushed Peppers", price: "590", veg: false },
          { name: "Murgh Do Pyaza", description: "Chicken And Shallots Cooked in Sauce", price: "360", veg: false },
          { name: "Dehati Murgh", description: "Traditional Bihari Style Chicken Curry", price: "580", veg: false },
          { name: "Murgh Korma", description: "Boneless Chicken Cooked in Rich Gravy", price: "650", veg: false },
          { name: "Anda Curry", description: "Boiled Egg Cooked in Gravy", price: "310", veg: false },
          { name: "Murgh Makhan Wala", description: "North Indian Favourite Tandoori Chicken Chunks Cooked In Butter And Sweet Tomato Sauce", price: "590", veg: false },
          { name: "Kadhai Murgh", description: "Chicken Cooked in Typical Indian Style Gravy", price: "590", veg: false },
          { name: "Lal Maas", description: "Mutton With Flavour Of Rajasthan", price: "650", veg: false },
          { name: "Chicken Chettinaand", description: "Chicken With The Flavour Southern Cuisine", price: "580", veg: false },
          { name: "Achari Murgh", description: "Chicken with Pickling Flavour", price: "580", veg: false },
          { name: "Murgh Mussallam", description: "Old Fashioned Style Chicken Tendered In Clay Pot And Served In Hot Gravy", price: "910", veg: false },
          { name: "Goan Prawns Curry", description: "Prawns Curry The Flavours Of Goan Cuisine", price: "980", veg: false },
          { name: "Goa Fish Curry", description: "Combination of Fish & Prawns in Gravy", price: "900", veg: false },
          { name: "Rara Chicken/Mutton", description: "Rara style curry", price: "590/620", veg: false },
        ],
      },
    ],
  },
  {
    title: "Indian",
    subtitle: "Rice",
    sections: [
      {
        name: "Veg",
        items: [
          { name: "Subz Dum Biryani", description: "Rice Cooked In Delicated Way In Which Vegetables Is Cooked At The Same Time", price: "380", veg: true },
          { name: "Jeera Rice", description: "Cummin Flavored Rice", price: "270", veg: true },
          { name: "Kashmiri Pulao", description: "Pualo With Dry Fruits & Fruits In It", price: "370", veg: true },
          { name: "Sada Chawal", description: "Steam Rice", price: "230", veg: true },
        ],
      },
      {
        name: "Non-Veg",
        items: [
          { name: "Murgh Dum Briyani", description: "Rice Cooked In A Delicated Way In Which Chicken Is Cooked At The Same Time", price: "450", veg: false },
          { name: "Gosht Dum Briyani", description: "Rice Cooked In a Delicated Way In Which Mutton Cooked At The Same Time", price: "480", veg: false },
        ],
      },
    ],
  },
  {
    title: "Indian",
    subtitle: "Bread",
    sections: [
      {
        name: "Veg",
        items: [
          { name: "Tandoori Roti", description: "Flattened Wheat Bread Cooked In Tandoor", price: "70", veg: true },
          { name: "Tandoori Butter Roti", description: "Flattened Wheat Bread Cooked In Tandoor With Butter On It", price: "80", veg: true },
          { name: "Naan", description: "Flattened Refine Flour Cooked In Tandoor", price: "80", veg: true },
          { name: "Butter Naan", description: "Flattened Refine Flour Cooked In Tandoor With Butter On It", price: "85", veg: true },
          { name: "Garlic Naan", description: "Flattened Refine Flour Cooked In Tandoor With Garlic As A Topping & Butter On It", price: "95", veg: true },
          { name: "Paneer Kulcha", description: "Bread With The Stuffing Of Cottage Cheese", price: "95", veg: true },
          { name: "Kashmiri Naan", description: "Bread With The Stuffing Of Dry Fruit & Khoya", price: "150", veg: true },
          { name: "Missi Roti", description: "Bread Made From Bengalgramflour", price: "80", veg: true },
          { name: "Lachha Paratha", description: "Breads With Layers", price: "80", veg: true },
        ],
      },
    ],
  },
  {
    title: "Chinese",
    subtitle: "Starters",
    sections: [
      {
        name: "Veg",
        items: [
          { name: "Veg Spring Roll", description: "Exotic vegetables wrapped in sheet and deep fried", price: "310", veg: true },
          { name: "Paneer Chilly", description: "Cottage cheese tossed with peppers and shallot", price: "390", veg: true },
          { name: "Golden Fried Babycorn Chilly", description: "Crispy fried baby corn with Chinese seasoning", price: "410", veg: true },
          { name: "Paneer 65", description: "Cottage cheese tossed with curry leaves", price: "390", veg: true },
          { name: "Corn Salt & Pepper", description: "American corn battered and deep fried tossed with peppers", price: "430", veg: true },
          { name: "Mushroom Chilly", description: "Mushroom Tossed With Peppers And Shallot", price: "450", veg: true },
        ],
      },
      {
        name: "Non-Veg",
        items: [
          { name: "Chilly Chicken", description: "Chicken Chunks Tossed With Peppers And Shallot", price: "490", veg: false },
          { name: "Chicken 65", description: "Chicken Chunks Tossed With Curry Leaves Originated From Chennai", price: "510", veg: false },
          { name: "Chicken Manchurian", description: "Chicken Chunks Cooked In Chinese Style", price: "520", veg: false },
          { name: "Prawns Chilly", description: "Prawns Tossed With Peppers And Shallots", price: "520", veg: false },
          { name: "Fish Chilly", description: "Fillet Fish Tossed With Peppers And Shallots", price: "590", veg: false },
          { name: "Chicken Salt & Pepper", description: "Chicken Chunks Fried With Seasoning & Crushed Black Pepper", price: "490", veg: false },
          { name: "Chicken In Sezwaan Sauce", description: "Crispy Chicken Fried And Tossed With Hot Spicy Sezwaan Sauce", price: "475", veg: false },
          { name: "Crispy Chicken", description: "Crispy Fried Chicken From Cantonese Cuisine", price: "475", veg: false },
          { name: "Drums of Heaven", description: "Chicken Lollypop Tossed In Sweet Spicy Sauce", price: "495", veg: false },
          { name: "Lemon Chicken", description: "Chicken tossed with lemon", price: "495", veg: false },
        ],
      },
    ],
  },
  {
    title: "Chinese",
    subtitle: "Rice & Noodles",
    sections: [
      {
        name: "Veg",
        items: [
          { name: "Fried Rice", description: "Rice tossed with fresh vegetables in chinese style", price: "310", veg: true },
          { name: "Hakka Noodles", description: "Sezwaan Sanghai Singaporei Mix Noodles", price: "330", veg: true },
          { name: "American Choupesy", description: "Pasta Accompanied By Worcestershire Sauce", price: "380", veg: true },
          { name: "Pan Fried Noodles", description: "Popular As Chow Mein Is Made Up Of A Curincher Noodles", price: "360", veg: true },
          { name: "Schezwan Noodles", description: "Schezwan style noodles", price: "360", veg: true },
          { name: "Schezwan Rice", description: "Schezwan style rice", price: "380", veg: true },
        ],
      },
      {
        name: "Non-Veg",
        items: [
          { name: "Chicken Fried Rice", description: "Super Common Food Of Chinese", price: "380", veg: false },
        ],
      },
    ],
  },
  {
    title: "Continental",
    subtitle: "Pasta",
    sections: [
      {
        name: "Veg",
        items: [
          { name: "Agli E Olio", description: "Traditional Spaghetti in olive oil, Sun dried tomato, Black Olives and grated parmesan", price: "470", veg: true },
          { name: "Romagna Villagio Farfalle Pesto", description: "Buttered Pasta with fresh basil leaves, nuts, olives and parmesan in veg", price: "550", veg: true },
          { name: "Rich Macaroni and Cheese", description: "American inspired classic mac 'n' cheese", price: "470", veg: true },
          { name: "Spaghetti E Polpette", description: "Spaghetti meatballs topped with homemade tomato sauce", price: "470", veg: true },
          { name: "Penne Sugo All Arrabbiata", description: "Penne pasta in rich tomato gravy topped with parmesan", price: "470", veg: true },
          { name: "Pasta In Bechamel Sauce", description: "Choose from penne or fusilli", price: "470", veg: true },
        ],
      },
      {
        name: "Non-Veg",
        items: [
          { name: "Spaghetti E Polpette Non-Veg", description: "Spaghetti meatballs topped with homemade tomato sauce", price: "510/590", veg: false },
          { name: "Penne Sugo All Arrabbiata Non-Veg", description: "Penne pasta in rich tomato gravy topped with parmesan", price: "510/590", veg: false },
          { name: "Pasta In Bechamel Sauce Non-Veg", description: "Choose from penne or fusilli", price: "510/590", veg: false },
        ],
      },
    ],
  },
  {
    title: "Continental",
    subtitle: "Pizza",
    sections: [
      {
        name: "Veg",
        items: [
          { name: "3 Secret Pizzas", description: "Three Varieties of secret cheese topped on our homemade pizza base", price: "480", veg: true },
          { name: "The 1989 Classic Margherita", description: "The good old 18th century classic hand kneaded pizza dough baked and topped with tomatoes and cheese", price: "460", veg: true },
          { name: "The Cream Cheese Pizza", description: "Cream cheese pizza topped with veggies or your choice of meat", price: "550", veg: true },
          { name: "Tandoori Mushroom & Jalapeno Naanizza", description: "Chef grilled tandoori mushroom & jalapenos baked on a naan base", price: "520", veg: true },
        ],
      },
      {
        name: "Non-Veg",
        items: [
          { name: "B.B.Q Chicken Pizza", description: "A classic recipe stolen from the kitchen", price: "550", veg: false },
          { name: "Persona Desi Kheema Masala Pizza", description: "Desi kheema masala pizza", price: "520", veg: false },
        ],
      },
    ],
  },
  {
    title: "Continental",
    subtitle: "Burger",
    sections: [
      {
        name: "Veg",
        items: [
          { name: "The Garden Burger", description: "Crumb Fried Burger Patty with fresh vegetables chopped with potatoes", price: "350", veg: true },
          { name: "Mexicana Burger", description: "Grated cheddar cheese and jalapeno crumb fried patty burger topped with onion rings and cheese blend", price: "370", veg: true },
          { name: "The Cheese Trucker Burger", description: "Duo patty of veg patty served together under a bun topped with cheese sauce", price: "370", veg: true },
        ],
      },
      {
        name: "Non-Veg",
        items: [
          { name: "Fisherman's Cove", description: "Malt Battered fish burger", price: "410", veg: false },
          { name: "The Topless Burger", description: "A stuffed lamb Burger topped With Cheese and Chicken Salami Served", price: "450", veg: false },
          { name: "Texas Steakhouse Burger", description: "Chicken Steak slices. Texas style under a bun", price: "560", veg: false },
          { name: "Murgh Haryali Tikka Burger", description: "Chicken Cheese Burst Patty Under A bun", price: "550", veg: false },
          { name: "Road House Chicken Burger", description: "Grilled chicken patty topped with crispy golden fried onion rings and tartare mayo", price: "550", veg: false },
          { name: "Persona Special Burger", description: "Crispy chicken with lettuce, cheese topped with french fries and inhouse spice sauce", price: "570", veg: false },
        ],
      },
    ],
  },
  {
    title: "Specials",
    subtitle: "Sizzler Specialities",
    sections: [
      {
        name: "Mixed",
        items: [
          { name: "Vegetable Steak", description: "Vegetable steak sizzler", price: "520", veg: true },
          { name: "Vegetable Mixed Grill", description: "Vegetable mixed grill sizzler", price: "520", veg: true },
          { name: "House Special", description: "Chicken Steak served with Sausages and Liver", price: "670", veg: false },
          { name: "Tandoori Mixed Grill", description: "Tandoori mixed grill platter", price: "690", veg: false },
          { name: "Mutton Hamburger Steak", description: "Mutton hamburger steak", price: "880", veg: false },
          { name: "Persona Veg Non-Veg Assorted Plate", description: "Assorted sizzler plate", price: "990", veg: false },
        ],
      },
    ],
  },
  {
    title: "Specials",
    subtitle: "Steaks",
    sections: [
      {
        name: "Mixed",
        items: [
          { name: "Grilled Chicken Steak", description: "Summertime open grill style steak fillet marinated and cooked in olive oil", price: "760", veg: false },
          { name: "Tandoori Chicken Steak", description: "Hot & spicy grilled tandoori chicken steak accompanied with jeera rice & kachumber salad", price: "790", veg: false },
          { name: "Chicken Shawarma Steak", description: "Grilled chicken shawarma steak accompanied with pita two types of Lebanese salad", price: "820", veg: false },
          { name: "Smoked Cottage Cheese Steak", description: "Spicy marinated cottage cheese steak served with herb rice fries & cheese sauce", price: "550", veg: true },
        ],
      },
    ],
  },
  {
    title: "Appetizers",
    subtitle: "Soups",
    sections: [
      {
        name: "Veg",
        items: [
          { name: "Roasted Tomato Basil and Pepper Soup", description: "Classic roasted tomato soup with basil", price: "290", veg: true },
          { name: "Brocolli Walnut Soup", description: "Creamy broccoli soup with walnut", price: "350", veg: true },
          { name: "Wonton Soup", description: "Traditional wonton soup", price: "280", veg: true },
          { name: "Cream Of Soup", description: "Available in Veg / Chicken / Prawn", price: "190/260/310", veg: true },
          { name: "Thai Red Soup", description: "Available in Veg / Chicken / Prawn", price: "310/350/390", veg: true },
          { name: "Lemon Basil Soup", description: "Available in Veg / Chicken / Sea Food", price: "310/280/320", veg: true },
          { name: "Veg Manchow", description: "Available in Veg / Chicken / Prawn", price: "210/260/310", veg: true },
          { name: "Sweet Corn", description: "Available in Veg / Chicken / Sea Food", price: "210/260/310", veg: true },
        ],
      },
    ],
  },
  {
    title: "Appetizers",
    subtitle: "Salad",
    sections: [
      {
        name: "Veg",
        items: [
          { name: "Salata Horiatika", description: "Balsamic Glazed Watermelon feta salad. Greek style", price: "590", veg: true },
          { name: "Creamy Fruit Salad", description: "Freshly cut fruits topped with delicious cream", price: "320", veg: true },
          { name: "Caprese Insalata", description: "Easy Italian Salad made with sliced fresh mozzarella, tomatoes and basil seasoned with olive oil, Garden Brocoli Apple salad topped with chicken ham", price: "410", veg: true },
          { name: "Julius Caesar", description: "Available in Veg / Chicken / Sea Food", price: "380/350/380", veg: true },
          { name: "Green Salad / Tossed Salad", description: "Fresh green salad", price: "190", veg: true },
        ],
      },
    ],
  },
  {
    title: "Dessert",
    sections: [
      {
        name: "Desserts",
        items: [
          { name: "Persona Tres Leches", description: "Homemade butter cake soaked in three kinds of milk from Mexico", price: "450", veg: true },
          { name: "Chocolate Orange Truffle Cake with Ice Cream", description: "Chocolate orange truffle cake", price: "310", veg: true },
          { name: "Homemade French Vanilla Brownie Sizzler", description: "Served hot Vanilla Brownie served with Ice Cream", price: "370", veg: true },
          { name: "Mousse De Chocolate De Tres", description: "Tri chocolate mousse with layered milk, dark and white chocolate", price: "280", veg: true },
          { name: "New York Baked Cheesecake with Blueberry", description: "New York style cheesecake", price: "350", veg: true },
          { name: "Birthday Funfetti Cake", description: "Tri chocolate mousse with layered milk, dark and white chocolate", price: "250", veg: true },
          { name: "Southern Red Velvet Cake", description: "Classic Red Velvet cake with homemade fresh cream cheese frosting and 2 scoops of Ice Cream", price: "270", veg: true },
          { name: "Gulab Jamun Rabri Parfait", description: "Gulab jamun layered with rabri", price: "280", veg: true },
          { name: "Double Ka Meetha", description: "Traditional Hyderabadi bread pudding", price: "270", veg: true },
          { name: "Khubani Ka Meetha", description: "Apricot dessert", price: "350", veg: true },
          { name: "Tiramisu", description: "Classic Italian tiramisu", price: "350", veg: true },
          { name: "Double Sundae", description: "Double scoop ice cream sundae", price: "260", veg: true },
          { name: "Triple Sundae", description: "Triple scoop ice cream sundae", price: "310", veg: true },
        ],
      },
    ],
  },
  {
    title: "Mocktails & Shakes",
    sections: [
      {
        name: "Mocktails",
        items: [
          { name: "Thai Tea Orange", description: "Thai tea with orange flavour", price: "240", veg: true },
          { name: "Americano Honey", description: "Americano with honey", price: "190", veg: true },
          { name: "Pink Guava Strawberry Soda", description: "Pink guava and strawberry soda", price: "230", veg: true },
          { name: "Black Peach", description: "Black peach mocktail", price: "250", veg: true },
          { name: "Iced Cappuccino", description: "Iced cappuccino coffee", price: "310", veg: true },
          { name: "Honey Lemon Berry Tea", description: "Honey lemon berry tea", price: "290", veg: true },
          { name: "Butterfly Honey Coffee", description: "Butterfly honey coffee", price: "310", veg: true },
          { name: "Sweet Sunrise", description: "Sweet sunrise mocktail", price: "210", veg: true },
          { name: "Serley Temple", description: "Serley temple mocktail", price: "210", veg: true },
          { name: "Orange Soda Thai", description: "Orange soda thai style", price: "190", veg: true },
          { name: "Virgin Pina Colada", description: "Virgin pina colada", price: "320", veg: true },
          { name: "Virgin Mojito", description: "Classic virgin mojito", price: "210", veg: true },
          { name: "Soda Lime", description: "Soda lime refreshment", price: "150", veg: true },
          { name: "Cucumber Virgin Mojito", description: "Cucumber virgin mojito", price: "190", veg: true },
        ],
      },
      {
        name: "Shakes",
        items: [
          { name: "Oreo Blast", description: "Oreo milkshake", price: "280", veg: true },
          { name: "Kit Kat Milk Shake", description: "Kit Kat milkshake", price: "290", veg: true },
          { name: "Iced Mocha", description: "Iced mocha shake", price: "250", veg: true },
          { name: "Little Sweet Pink Milk", description: "Sweet pink milkshake", price: "310", veg: true },
          { name: "Halloween Soda", description: "Halloween special soda", price: "210", veg: true },
          { name: "Strawberry Milk Blast", description: "Strawberry milkshake", price: "250", veg: true },
          { name: "Mocha Mint", description: "Mocha mint shake", price: "320", veg: true },
          { name: "Vanilla Milk Shake", description: "Classic vanilla milkshake", price: "215", veg: true },
          { name: "Butter Scotch Milk Shake", description: "Butterscotch milkshake", price: "260", veg: true },
          { name: "Kesar Pista Milk Shake", description: "Kesar pista milkshake", price: "280", veg: true },
          { name: "Persona Special Shake", description: "Our signature milkshake", price: "330", veg: true },
        ],
      },
    ],
  },
];

export const menuCategories = [
  "All",
  "Indian",
  "Chinese",
  "Continental",
  "Specials",
  "Appetizers",
  "Dessert",
  "Mocktails & Shakes",
];
