// Hearts and Plates Restaurant Menu - Complete Data from Images
const MENU_DATA = {
    appetizers: {
        title: "Starters",
        icon: "fas fa-leaf",
        description: "Start your culinary journey with our handcrafted appetizers",
        items: [
            // Vegetarian Starters
            {
                name: "Paneer Tikka",
                price: 240,
                description: "Grilled cottage cheese marinated in yogurt and spices",
                image: "assets/images/menu/appetizers/paneer-tikka.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: true
            },
            // Cauliflower Delights
            {
                name: "Gobi 65",
                price: 180,
                description: "Crispy cauliflower florets tossed in spicy South Indian spices",
                image: "assets/images/menu/appetizers/gobi-65.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Gobi Manchurian",
                price: 180,
                description: "Indo-Chinese style cauliflower in tangy sauce",
                image: "assets/images/menu/appetizers/gobi-manchurian.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Chilli Gobi",
                price: 180,
                description: "Spicy cauliflower stir-fried with bell peppers and onions",
                image: "assets/images/menu/appetizers/chilli-gobi.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            // Paneer Specialties
            {
                name: "Paneer 65",
                price: 200,
                description: "Crispy cottage cheese cubes with aromatic spices",
                image: "assets/images/menu/appetizers/paneer-65.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Paneer Manchurian",
                price: 180,
                description: "Indo-Chinese style paneer in savory sauce",
                image: "assets/images/menu/appetizers/paneer-manchurian.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Chilli Paneer",
                price: 180,
                description: "Spicy paneer stir-fried with capsicum and onions",
                image: "assets/images/menu/appetizers/chilli-paneer.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Paneer Fingers",
                price: 200,
                description: "Crispy paneer fingers with special coating (6 pieces)",
                image: "assets/images/menu/appetizers/paneer-fingers.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Paneer Fries",
                price: 150,
                description: "Crispy paneer fries with seasoning (10 pieces)",
                image: "assets/images/menu/appetizers/paneer-fries.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            // Mushroom & More
            {
                name: "Mushroom 65",
                price: 200,
                description: "Spicy mushroom preparation with South Indian flavors",
                image: "assets/images/menu/appetizers/mushroom-65.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Mushroom Manchurian",
                price: 180,
                description: "Indo-Chinese style mushroom in flavorful sauce",
                image: "assets/images/menu/appetizers/mushroom-manchurian.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Chilli Mushroom",
                price: 180,
                description: "Spicy mushroom stir-fry with peppers",
                image: "assets/images/menu/appetizers/chilli-mushroom.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "French Fries",
                price: 150,
                description: "Crispy golden french fries",
                image: "assets/images/menu/appetizers/french-fries.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Peri Peri French Fries",
                price: 160,
                description: "Spicy peri peri seasoned french fries",
                image: "assets/images/menu/appetizers/peri-peri-fries.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Golden Crispy Corn",
                price: 120,
                description: "Sweet corn kernels with crispy coating",
                image: "assets/images/menu/appetizers/crispy-corn.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            // Non-Vegetarian Starters
            // Chicken Specialties
            {
                name: "Chicken 65",
                price: 220,
                description: "Spicy deep-fried chicken marinated in aromatic spices",
                image: "assets/images/menu/appetizers/chicken-65.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: true
            },
            {
                name: "Chilli Chicken",
                price: 230,
                description: "Indo-Chinese style chicken with peppers and onions",
                image: "assets/images/menu/appetizers/chilli-chicken.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Chicken Manchurian",
                price: 230,
                description: "Chicken in savory Indo-Chinese sauce",
                image: "assets/images/menu/appetizers/chicken-manchurian.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Chicken Lollipop",
                price: 240,
                description: "Drumstick chicken prepared lollipop style",
                image: "assets/images/menu/appetizers/chicken-lollipop.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Pepper Chicken Dry",
                price: 250,
                description: "Dry chicken preparation with black pepper and spices",
                image: "assets/images/menu/appetizers/pepper-chicken.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Honey Garlic Chicken",
                price: 250,
                description: "Sweet and savory chicken with honey garlic glaze",
                image: "assets/images/menu/appetizers/honey-garlic-chicken.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Andhra Chicken Fry",
                price: 270,
                description: "Spicy Andhra style chicken fry with traditional spices",
                image: "assets/images/menu/appetizers/andhra-chicken.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Tender Chicken Platter",
                price: 350,
                description: "Assorted chicken preparations platter",
                image: "assets/images/menu/appetizers/chicken-platter.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Pallipalayam Chicken",
                price: 280,
                description: "Traditional Tamil Nadu style spicy chicken",
                image: "assets/images/menu/appetizers/pallipalayam-chicken.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Uppu Kari Chicken",
                price: 280,
                description: "Salt and pepper chicken with South Indian spices",
                image: "assets/images/menu/appetizers/uppu-kari-chicken.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Chinthamani Chicken",
                price: 280,
                description: "Specialty chicken preparation from Chinthamani style",
                image: "assets/images/menu/appetizers/chinthamani-chicken.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Nattukozhi Pepper Fry",
                price: 350,
                description: "Country chicken pepper fry with traditional spices",
                image: "assets/images/menu/appetizers/nattukozhi-pepper.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            // Mutton & Seafood
            {
                name: "Kaadai 65",
                price: 220,
                description: "Spicy quail preparation in South Indian style",
                image: "assets/images/menu/appetizers/kaadai-65.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Kaadai Pepper Fry",
                price: 250,
                description: "Quail with black pepper and spices",
                image: "assets/images/menu/appetizers/kaadai-pepper.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Mutton Choukka",
                price: 360,
                description: "Dry mutton preparation with traditional spices",
                image: "assets/images/menu/appetizers/mutton-choukka.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Mutton Pepper Fry",
                price: 340,
                description: "Mutton with black pepper and aromatic spices",
                image: "assets/images/menu/appetizers/mutton-pepper.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Pallipalayam Mutton",
                price: 399,
                description: "Traditional Tamil Nadu style mutton preparation",
                image: "assets/images/menu/appetizers/pallipalayam-mutton.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Uppu Kari Mutton",
                price: 399,
                description: "Salt and pepper mutton with South Indian spices",
                image: "assets/images/menu/appetizers/uppu-kari-mutton.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Chinthamani Mutton",
                price: 399,
                description: "Specialty mutton preparation from Chinthamani region",
                image: "assets/images/menu/appetizers/chinthamani-mutton.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            // Prawns
            {
                name: "Prawn 65",
                price: 290,
                description: "Crispy prawns with South Indian spices (8 pieces)",
                image: "assets/images/menu/appetizers/prawn-65.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Golden Fried Prawn",
                price: 290,
                description: "Golden fried prawns with special coating",
                image: "assets/images/menu/appetizers/golden-prawn.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Prawn Thokku",
                price: 300,
                description: "Dry prawn preparation with traditional spices",
                image: "assets/images/menu/appetizers/prawn-thokku.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Ghee Roasted Prawn",
                price: 320,
                description: "Prawns roasted in pure ghee with spices",
                image: "assets/images/menu/appetizers/ghee-prawn.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Prawn Pepper Fry",
                price: 300,
                description: "Prawns with black pepper and aromatic spices",
                image: "assets/images/menu/appetizers/prawn-pepper.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            }
        ]
    },
    
    soups: {
        title: "Soups",
        icon: "fas fa-bowl-hot",
        description: "Warm & Comforting",
        items: [
            // Vegetarian Soups
            {
                name: "Veg Clear Soup",
                price: 100,
                description: "Light and refreshing vegetable clear soup",
                image: "assets/images/menu/soups/veg-clear.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Manchow Soup",
                price: 120,
                description: "Indo-Chinese style vegetable soup with crispy noodles",
                image: "assets/images/menu/soups/manchow.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Hot & Sour Soup",
                price: 120,
                description: "Tangy and spicy vegetable soup",
                image: "assets/images/menu/soups/hot-sour.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Mushroom Soup",
                price: 120,
                description: "Creamy mushroom soup with herbs",
                image: "assets/images/menu/soups/mushroom.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Sweet Corn Soup",
                price: 120,
                description: "Sweet corn kernels in flavorful broth",
                image: "assets/images/menu/soups/sweet-corn.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            // Non-Vegetarian Soups
            {
                name: "Chicken Clear Soup",
                price: 120,
                description: "Light chicken broth with vegetables",
                image: "assets/images/menu/soups/chicken-clear.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Chicken Manchow Soup",
                price: 130,
                description: "Chicken soup with Indo-Chinese flavors",
                image: "assets/images/menu/soups/chicken-manchow.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Hot & Sour Chicken Soup",
                price: 130,
                description: "Tangy and spicy chicken soup",
                image: "assets/images/menu/soups/chicken-hot-sour.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Chicken Pepper Soup",
                price: 130,
                description: "Chicken soup with black pepper and spices",
                image: "assets/images/menu/soups/chicken-pepper.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Mutton Soup",
                price: 130,
                description: "Rich mutton broth with traditional spices",
                image: "assets/images/menu/soups/mutton.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            }
        ]
    },
    
    mainCourse: {
        title: "Main Course",
        icon: "fas fa-bowl-rice",
        description: "Traditional Curries & Gravies",
        items: [
            // Vegetarian Main Course
            {
                name: "Dal Tadka",
                price: 200,
                description: "Yellow lentils tempered with spices",
                image: "assets/images/menu/main-course/dal-tadka.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Paneer Butter Masala",
                price: 230,
                description: "Cottage cheese in rich, creamy tomato gravy",
                image: "assets/images/menu/main-course/paneer-butter-masala.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Kadai Paneer",
                price: 220,
                description: "Paneer cooked in kadai with bell peppers and spices",
                image: "assets/images/menu/main-course/kadai-paneer.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Mixed Veg Curry",
                price: 180,
                description: "Assorted vegetables in spiced gravy",
                image: "assets/images/menu/main-course/mixed-veg.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Kadai Vegetable",
                price: 180,
                description: "Mixed vegetables cooked in kadai style",
                image: "assets/images/menu/main-course/kadai-veg.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Palak Paneer Curry",
                price: 240,
                description: "Cottage cheese in spinach gravy",
                image: "assets/images/menu/main-course/palak-paneer.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Mushroom Masala",
                price: 230,
                description: "Mushrooms in rich spiced gravy",
                image: "assets/images/menu/main-course/mushroom-masala.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            // Non-Vegetarian Main Course
            {
                name: "Chicken Tikka Masala",
                price: 290,
                description: "Grilled chicken in creamy tomato-based curry",
                image: "assets/images/menu/main-course/chicken-tikka-masala.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Butter Chicken",
                price: 280,
                description: "Creamy tomato-based curry with tender chicken pieces",
                image: "assets/images/menu/main-course/butter-chicken.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Chettinad Chicken",
                price: 320,
                description: "Spicy South Indian chicken curry with traditional spices",
                image: "assets/images/menu/main-course/chettinad-chicken.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Pepper Chicken Masala",
                price: 320,
                description: "Chicken curry with black pepper and aromatic spices",
                image: "assets/images/menu/main-course/pepper-chicken-masala.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Hyderabadi Chicken Masala",
                price: 280,
                description: "Hyderabad style chicken curry with rich flavors",
                image: "assets/images/menu/main-course/hyderabadi-chicken.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Andhra Chicken Curry",
                price: 300,
                description: "Spicy Andhra style chicken curry",
                image: "assets/images/menu/main-course/andhra-chicken-curry.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Chettinad Mutton",
                price: 380,
                description: "Traditional Chettinad style mutton curry",
                image: "assets/images/menu/main-course/chettinad-mutton.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Mutton Pepper Masala",
                price: 399,
                description: "Mutton curry with black pepper and spices",
                image: "assets/images/menu/main-course/mutton-pepper-masala.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Hyderabad Mutton Curry",
                price: 399,
                description: "Rich Hyderabadi style mutton curry",
                image: "assets/images/menu/main-course/hyderabad-mutton.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Prawn Masala",
                price: 300,
                description: "Juicy prawns in spicy onion-tomato gravy",
                image: "assets/images/menu/main-course/prawn-masala.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: true
            },
            {
                name: "Prawn Chettinad Pepper Masala",
                price: 300,
                description: "Prawns in Chettinad style pepper curry",
                image: "assets/images/menu/main-course/prawn-chettinad.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Egg Masala",
                price: 250,
                description: "Boiled eggs in spiced curry gravy",
                image: "assets/images/menu/main-course/egg-masala.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            }
        ]
    },
    
    riceAndBiryani: {
        title: "Rice & Biryani",
        icon: "fas fa-bowl-rice",
        description: "Aromatic Rice Dishes",
        items: [
            // Plain Rice & Pulao
            {
                name: "Ghee Rice",
                price: 110,
                description: "Fragrant basmati rice cooked in pure ghee",
                image: "assets/images/menu/rice/ghee-rice.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Jeera Rice",
                price: 100,
                description: "Basmati rice with cumin seeds and spices",
                image: "assets/images/menu/rice/jeera-rice.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Steamed Rice",
                price: 90,
                description: "Plain steamed basmati rice",
                image: "assets/images/menu/rice/steamed-rice.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Veg Pulao",
                price: 190,
                description: "Fragrant rice with mixed vegetables and spices",
                image: "assets/images/menu/rice/veg-pulao.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            // Vegetarian Biryani
            {
                name: "Veg Biryani",
                price: 190,
                description: "Aromatic basmati rice with mixed vegetables",
                image: "assets/images/menu/rice/veg-biryani.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Paneer Veg Biryani",
                price: 190,
                description: "Biryani with cottage cheese and vegetables",
                image: "assets/images/menu/rice/paneer-biryani.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Mushroom Veg Biryani",
                price: 190,
                description: "Aromatic biryani with mushrooms and vegetables",
                image: "assets/images/menu/rice/mushroom-biryani.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            // Chicken Biryani
            {
                name: "Plain Biryani",
                price: 220,
                description: "Simple chicken biryani with aromatic spices",
                image: "assets/images/menu/rice/plain-biryani.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Chicken Dum Biryani",
                price: 280,
                description: "Traditional dum-cooked chicken biryani",
                image: "assets/images/menu/rice/chicken-dum-biryani.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Chicken 65 Biryani",
                price: 280,
                description: "Biryani with spicy Chicken 65 pieces",
                image: "assets/images/menu/rice/chicken-65-biryani.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: true
            },
            {
                name: "Chicken Thokku Biryani",
                price: 300,
                description: "Biryani with dry chicken thokku preparation",
                image: "assets/images/menu/rice/chicken-thokku-biryani.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Chicken Lollipop Biryani",
                price: 280,
                description: "Biryani with chicken lollipops",
                image: "assets/images/menu/rice/chicken-lollipop-biryani.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            // Mutton & Seafood Biryani
            {
                name: "Mutton Dum Biryani",
                price: 360,
                description: "Premium dum-cooked mutton biryani with saffron",
                image: "assets/images/menu/rice/mutton-dum-biryani.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Mutton Thokku Biryani",
                price: 380,
                description: "Biryani with dry mutton thokku pieces",
                image: "assets/images/menu/rice/mutton-thokku-biryani.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Prawn 65 Biryani",
                price: 300,
                description: "Biryani with spicy Prawn 65",
                image: "assets/images/menu/rice/prawn-65-biryani.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Prawn Thokku Biryani",
                price: 320,
                description: "Biryani with dry prawn thokku preparation",
                image: "assets/images/menu/rice/prawn-thokku-biryani.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Kaadai 65 Biryani",
                price: 280,
                description: "Biryani with spicy quail 65",
                image: "assets/images/menu/rice/kaadai-biryani.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Kaadai Thokku Biryani",
                price: 320,
                description: "Biryani with dry quail thokku",
                image: "assets/images/menu/rice/kaadai-thokku-biryani.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Egg Biryani",
                price: 250,
                description: "Aromatic biryani with boiled eggs",
                image: "assets/images/menu/rice/egg-biryani.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            }
        ]
    },
    
    chineseRiceNoodles: {
        title: "Chinese Rice & Noodles",
        icon: "fas fa-bowl-food",
        description: "Indo-Chinese Fusion",
        items: [
            // Vegetarian Options
            {
                name: "Veg Fried Rice",
                price: 160,
                description: "Stir-fried rice with mixed vegetables",
                image: "assets/images/menu/chinese/veg-fried-rice.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Veg Schezwan Rice",
                price: 190,
                description: "Spicy Schezwan style vegetable fried rice",
                image: "assets/images/menu/chinese/veg-schezwan-rice.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Garlic Rice",
                price: 185,
                description: "Aromatic rice with garlic and vegetables",
                image: "assets/images/menu/chinese/garlic-rice.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Garlic Schezwan Rice",
                price: 210,
                description: "Garlic rice with spicy Schezwan sauce",
                image: "assets/images/menu/chinese/garlic-schezwan-rice.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Paneer Rice",
                price: 190,
                description: "Fried rice with cottage cheese and vegetables",
                image: "assets/images/menu/chinese/paneer-rice.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Paneer Schezwan Rice",
                price: 210,
                description: "Paneer fried rice with Schezwan sauce",
                image: "assets/images/menu/chinese/paneer-schezwan-rice.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Mushroom Rice",
                price: 190,
                description: "Fried rice with fresh mushrooms",
                image: "assets/images/menu/chinese/mushroom-rice.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Mushroom Schezwan Rice",
                price: 210,
                description: "Mushroom rice with spicy Schezwan flavors",
                image: "assets/images/menu/chinese/mushroom-schezwan-rice.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Veg Noodles",
                price: 160,
                description: "Stir-fried noodles with mixed vegetables",
                image: "assets/images/menu/chinese/veg-noodles.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Veg Schezwan Noodles",
                price: 190,
                description: "Spicy Schezwan style vegetable noodles",
                image: "assets/images/menu/chinese/veg-schezwan-noodles.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Garlic Noodles",
                price: 185,
                description: "Aromatic noodles with garlic and vegetables",
                image: "assets/images/menu/chinese/garlic-noodles.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Garlic Schezwan Noodles",
                price: 210,
                description: "Garlic noodles with spicy Schezwan sauce",
                image: "assets/images/menu/chinese/garlic-schezwan-noodles.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Paneer Noodles",
                price: 190,
                description: "Noodles with cottage cheese and vegetables",
                image: "assets/images/menu/chinese/paneer-noodles.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Paneer Schezwan Noodles",
                price: 210,
                description: "Paneer noodles with Schezwan sauce",
                image: "assets/images/menu/chinese/paneer-schezwan-noodles.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Mushroom Noodles",
                price: 190,
                description: "Noodles with fresh mushrooms",
                image: "assets/images/menu/chinese/mushroom-noodles.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Mushroom Schezwan Noodles",
                price: 210,
                description: "Mushroom noodles with spicy Schezwan flavors",
                image: "assets/images/menu/chinese/mushroom-schezwan-noodles.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            // Egg & Chicken
            {
                name: "Egg Rice",
                price: 180,
                description: "Fried rice with scrambled eggs",
                image: "assets/images/menu/chinese/egg-rice.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Egg Schezwan Rice",
                price: 200,
                description: "Egg fried rice with Schezwan sauce",
                image: "assets/images/menu/chinese/egg-schezwan-rice.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Egg Noodles",
                price: 180,
                description: "Noodles with scrambled eggs",
                image: "assets/images/menu/chinese/egg-noodles.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Egg Schezwan Noodles",
                price: 200,
                description: "Egg noodles with Schezwan sauce",
                image: "assets/images/menu/chinese/egg-schezwan-noodles.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Chicken Rice",
                price: 190,
                description: "Fried rice with chicken pieces",
                image: "assets/images/menu/chinese/chicken-rice.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Chicken Schezwan Rice",
                price: 210,
                description: "Chicken fried rice with Schezwan sauce",
                image: "assets/images/menu/chinese/chicken-schezwan-rice.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Chicken Noodles",
                price: 190,
                description: "Noodles with chicken pieces",
                image: "assets/images/menu/chinese/chicken-noodles.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Chicken Schezwan Noodles",
                price: 210,
                description: "Chicken noodles with Schezwan sauce",
                image: "assets/images/menu/chinese/chicken-schezwan-noodles.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Thai Chicken Rice",
                price: 240,
                description: "Thai style chicken fried rice",
                image: "assets/images/menu/chinese/thai-chicken-rice.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Thai Chicken Schezwan Rice",
                price: 260,
                description: "Thai chicken rice with Schezwan flavors",
                image: "assets/images/menu/chinese/thai-chicken-schezwan-rice.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Thai Chicken Noodles",
                price: 240,
                description: "Thai style chicken noodles",
                image: "assets/images/menu/chinese/thai-chicken-noodles.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Thai Chicken Schezwan Noodles",
                price: 260,
                description: "Thai chicken noodles with Schezwan sauce",
                image: "assets/images/menu/chinese/thai-chicken-schezwan-noodles.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            // Seafood & Mixed
            {
                name: "Prawn Rice",
                price: 240,
                description: "Fried rice with prawns",
                image: "assets/images/menu/chinese/prawn-rice.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Prawn Schezwan Rice",
                price: 260,
                description: "Prawn fried rice with Schezwan sauce",
                image: "assets/images/menu/chinese/prawn-schezwan-rice.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Prawn Noodles",
                price: 240,
                description: "Noodles with prawns",
                image: "assets/images/menu/chinese/prawn-noodles.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Prawn Schezwan Noodles",
                price: 260,
                description: "Prawn noodles with Schezwan sauce",
                image: "assets/images/menu/chinese/prawn-schezwan-noodles.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Crab Rice",
                price: 250,
                description: "Fried rice with crab meat",
                image: "assets/images/menu/chinese/crab-rice.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Crab Schezwan Rice",
                price: 270,
                description: "Crab fried rice with Schezwan sauce",
                image: "assets/images/menu/chinese/crab-schezwan-rice.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Crab Noodles",
                price: 250,
                description: "Noodles with crab meat",
                image: "assets/images/menu/chinese/crab-noodles.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Crab Schezwan Noodles",
                price: 270,
                description: "Crab noodles with Schezwan sauce",
                image: "assets/images/menu/chinese/crab-schezwan-noodles.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Mixed Non-Veg Rice",
                price: 250,
                description: "Fried rice with chicken, prawns and eggs",
                image: "assets/images/menu/chinese/mixed-nonveg-rice.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Mixed Non-Veg Schezwan Rice",
                price: 270,
                description: "Mixed non-veg rice with Schezwan sauce",
                image: "assets/images/menu/chinese/mixed-nonveg-schezwan-rice.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Mixed Non-Veg Noodles",
                price: 250,
                description: "Noodles with chicken, prawns and eggs",
                image: "assets/images/menu/chinese/mixed-nonveg-noodles.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Mixed Non-Veg Schezwan Noodles",
                price: 270,
                description: "Mixed non-veg noodles with Schezwan sauce",
                image: "assets/images/menu/chinese/mixed-nonveg-schezwan-noodles.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            }
        ]
    },
    
    tandooriKebabs: {
        title: "Tandoori & Kebabs",
        icon: "fas fa-fire",
        description: "Grilled to Perfection",
        items: [
            // Vegetarian Kebabs
            {
                name: "Paneer Tikka",
                price: 260,
                description: "Grilled cottage cheese marinated in yogurt and spices",
                image: "assets/images/menu/tandoori/paneer-tikka.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Mushroom Tikka",
                price: 260,
                description: "Grilled mushrooms with aromatic spices",
                image: "assets/images/menu/tandoori/mushroom-tikka.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Veg Seekh Kebab",
                price: 220,
                description: "Spiced vegetable seekh kebabs grilled to perfection",
                image: "assets/images/menu/tandoori/veg-seekh.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            // Chicken Specialties
            {
                name: "Tandoori Chicken Full",
                price: 550,
                description: "Full chicken marinated in tandoori spices and grilled",
                image: "assets/images/menu/tandoori/tandoori-chicken-full.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: true
            },
            {
                name: "Tandoori Chicken Half",
                price: 320,
                description: "Half chicken marinated in tandoori spices",
                image: "assets/images/menu/tandoori/tandoori-chicken-half.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: true
            },
            {
                name: "Chicken Tikka",
                price: 290,
                description: "Boneless chicken pieces grilled in tandoor",
                image: "assets/images/menu/tandoori/chicken-tikka.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Hariyali Chicken Kebab",
                price: 220,
                description: "Green herb marinated chicken kebabs",
                image: "assets/images/menu/tandoori/hariyali-chicken.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Chicken Thalai Kebab",
                price: 320,
                description: "Special chicken kebab with unique marination",
                image: "assets/images/menu/tandoori/chicken-thalai.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Tangdi Kebab",
                price: 330,
                description: "Chicken drumsticks marinated and grilled",
                image: "assets/images/menu/tandoori/tangdi-kebab.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Pepper Tandoori Chicken Full",
                price: 550,
                description: "Full chicken with black pepper and tandoori spices",
                image: "assets/images/menu/tandoori/pepper-tandoori-full.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Pepper Tandoori Chicken Half",
                price: 320,
                description: "Half chicken with black pepper marinade",
                image: "assets/images/menu/tandoori/pepper-tandoori-half.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Chicken Seekh Kebab",
                price: 320,
                description: "Minced chicken seekh kebabs with spices",
                image: "assets/images/menu/tandoori/chicken-seekh.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Reshmi Chicken Kebab",
                price: 320,
                description: "Silky smooth chicken kebabs with cream marinade",
                image: "assets/images/menu/tandoori/reshmi-chicken.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Badami Chicken Kebab",
                price: 340,
                description: "Almond-marinated chicken kebabs",
                image: "assets/images/menu/tandoori/badami-chicken.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            // Seafood Delights
            {
                name: "Prawn Tikka",
                price: 350,
                description: "Grilled prawns with tandoori spices",
                image: "assets/images/menu/tandoori/prawn-tikka.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: true
            },
            {
                name: "Prawn Hariyali Kebab",
                price: 350,
                description: "Green herb marinated prawn kebabs",
                image: "assets/images/menu/tandoori/prawn-hariyali.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            }
        ]
    },
    
    breadsAndSouthIndian: {
        title: "Breads & South Indian",
        icon: "fas fa-bread-slice",
        description: "Traditional Accompaniments",
        items: [
            // Indian Breads
            {
                name: "Naan Plain",
                price: 40,
                description: "Soft leavened bread baked in tandoor",
                image: "assets/images/menu/breads/naan-plain.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Roti Plain",
                price: 45,
                description: "Traditional whole wheat flatbread",
                image: "assets/images/menu/breads/roti-plain.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Butter Naan",
                price: 50,
                description: "Naan brushed with butter",
                image: "assets/images/menu/breads/butter-naan.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Butter Roti",
                price: 55,
                description: "Roti brushed with butter",
                image: "assets/images/menu/breads/butter-roti.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Garlic Naan",
                price: 80,
                description: "Naan topped with garlic and herbs",
                image: "assets/images/menu/breads/garlic-naan.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Kulcha Plain",
                price: 55,
                description: "Leavened bread with refined flour",
                image: "assets/images/menu/breads/kulcha-plain.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Kulcha Masala",
                price: 80,
                description: "Kulcha with spiced filling",
                image: "assets/images/menu/breads/kulcha-masala.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Phulka",
                price: 40,
                description: "Thin puffed Indian bread (2 pieces)",
                image: "assets/images/menu/breads/phulka.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            // Dosa & Uthappam
            {
                name: "Plain Dosa",
                price: 90,
                description: "Crispy South Indian crepe",
                image: "assets/images/menu/south-indian/plain-dosa.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Onion Dosa",
                price: 90,
                description: "Dosa topped with onions",
                image: "assets/images/menu/south-indian/onion-dosa.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Podi Dosa",
                price: 90,
                description: "Dosa with spiced lentil powder",
                image: "assets/images/menu/south-indian/podi-dosa.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Garlic Podi Dosa",
                price: 100,
                description: "Dosa with garlic and spiced powder",
                image: "assets/images/menu/south-indian/garlic-podi-dosa.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Ghee Dosa",
                price: 100,
                description: "Dosa made with pure ghee",
                image: "assets/images/menu/south-indian/ghee-dosa.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Plain Uthappam",
                price: 80,
                description: "Thick South Indian pancake",
                image: "assets/images/menu/south-indian/plain-uthappam.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Onion Uthappam",
                price: 90,
                description: "Uthappam topped with onions",
                image: "assets/images/menu/south-indian/onion-uthappam.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Podi Uthappam",
                price: 100,
                description: "Uthappam with spiced lentil powder",
                image: "assets/images/menu/south-indian/podi-uthappam.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            },
            {
                name: "Egg Dosa",
                price: 100,
                description: "Dosa topped with beaten egg",
                image: "assets/images/menu/south-indian/egg-dosa.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            }
        ]
    },
    
    beveragesAndAddons: {
        title: "Beverages & Add-ons",
        icon: "fas fa-glass-water",
        description: "Refreshing Drinks & Sides",
        items: [
            // Egg Preparations
            {
                name: "Boiled Egg",
                price: 50,
                description: "Hard boiled eggs (2 pieces)",
                image: "assets/images/menu/beverages/boiled-egg.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Omelette",
                price: 60,
                description: "Fluffy egg omelette (2 eggs)",
                image: "assets/images/menu/beverages/omelette.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Egg Burji",
                price: 120,
                description: "Scrambled eggs with spices and onions",
                image: "assets/images/menu/beverages/egg-burji.jpg",
                isVeg: false,
                isSpicy: true,
                isPopular: false
            },
            // Fresh Juices
            {
                name: "Lemon Juice",
                price: 50,
                description: "Fresh lime juice with water",
                image: "assets/images/menu/beverages/lemon-juice.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Lemon Soda",
                price: 70,
                description: "Refreshing lime soda with mint",
                image: "assets/images/menu/beverages/lemon-soda.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Seasonal Fresh Juice",
                price: 0, // Market Price
                description: "Fresh seasonal fruit juices - Market Price",
                image: "assets/images/menu/beverages/seasonal-juice.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            // Lassi Specials
            {
                name: "Lassi Sweet",
                price: 80,
                description: "Traditional sweet yogurt drink",
                image: "assets/images/menu/beverages/lassi-sweet.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Lassi Salt",
                price: 80,
                description: "Traditional salted yogurt drink",
                image: "assets/images/menu/beverages/lassi-salt.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Mango Lassi",
                price: 90,
                description: "Creamy yogurt drink blended with fresh mango",
                image: "assets/images/menu/beverages/mango-lassi.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: true
            },
            {
                name: "Rose Lassi",
                price: 90,
                description: "Fragrant rose-flavored yogurt drink",
                image: "assets/images/menu/beverages/rose-lassi.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            // Add-ons
            {
                name: "Curd",
                price: 15,
                description: "Fresh yogurt",
                image: "assets/images/menu/addons/curd.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Salad",
                price: 60,
                description: "Fresh onion and cucumber salad",
                image: "assets/images/menu/addons/salad.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Roasted Papad",
                price: 30,
                description: "Crispy roasted papad",
                image: "assets/images/menu/addons/roasted-papad.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Masala Papad",
                price: 60,
                description: "Papad topped with onions, tomatoes and spices",
                image: "assets/images/menu/addons/masala-papad.jpg",
                isVeg: true,
                isSpicy: true,
                isPopular: false
            }
        ]
    },
    
    internationalAndDesserts: {
        title: "International & Desserts",
        icon: "fas fa-ice-cream",
        description: "Global Flavors & Sweet Endings",
        items: [
            // Italian Pasta
            {
                name: "Italian Pasta Red Sauce",
                price: 180,
                description: "Pasta in rich tomato-based red sauce",
                image: "assets/images/menu/international/italian-pasta-red.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            {
                name: "Italian Pasta White Sauce",
                price: 180,
                description: "Pasta in creamy white sauce",
                image: "assets/images/menu/international/italian-pasta-white.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            // American Chopsuey
            {
                name: "American Chicken Chopsuey",
                price: 280,
                description: "Crispy noodles with chicken in sweet and sour sauce",
                image: "assets/images/menu/international/american-chopsuey.jpg",
                isVeg: false,
                isSpicy: false,
                isPopular: false
            },
            // Ice Cream
            {
                name: "Ice Cream",
                price: 140,
                description: "Vanilla ice cream (2 scoops)",
                image: "assets/images/menu/desserts/ice-cream.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: false
            },
            // Brownie Sizzler
            {
                name: "Brownie Sizzling with Ice Cream",
                price: 150,
                description: "Hot chocolate brownie served sizzling with vanilla ice cream",
                image: "assets/images/menu/desserts/brownie-sizzler.jpg",
                isVeg: true,
                isSpicy: false,
                isPopular: true
            }
        ]
    }
};

const MENU_CONFIG = {
    currency: "₹",
    tax: {
        rate: 18,
        included: false,
        message: "Prices are exclusive of applicable taxes"
    },
    serviceCharge: {
        rate: 10,
        applicable: true,
        message: "Service charge of 10% applicable on orders above ₹500"
    },
    offers: [
        {
            title: "Weekend Special",
            description: "20% off on family meals (4+ people)",
            validDays: ["saturday", "sunday"],
            minAmount: 1000
        },
        {
            title: "Birthday Special",
            description: "Complimentary dessert for birthday celebrations",
            code: "BIRTHDAY",
            validAlways: true
        },
        {
            title: "Seafood Thursday",
            description: "15% off on all seafood items",
            validDays: ["thursday"],
            minAmount: 500
        }
    ],
    mealTimings: {
        breakfast: { start: "07:00", end: "11:00" },
        lunch: { start: "12:00", end: "15:30" },
        dinner: { start: "18:00", end: "22:30" }
    },
    dietaryInfo: {
        veg: { icon: "🥬", label: "Vegetarian", color: "#10B981" },
        nonVeg: { icon: "🍖", label: "Non-Vegetarian", color: "#EF4444" },
        spicy: { icon: "🌶️", label: "Spicy", color: "#F59E0B" },
        popular: { icon: "⭐", label: "Popular", color: "#D4AF37" },
        seafood: { icon: "🐟", label: "Seafood", color: "#3B82F6" }
    }
};

const MENU_HELPERS = {
    getAllItems() {
        const allItems = [];
        Object.values(MENU_DATA).forEach(category => {
            category.items.forEach(item => {
                allItems.push({
                    ...item,
                    category: category.title
                });
            });
        });
        return allItems;
    },
    
    getPopularItems() {
        return this.getAllItems().filter(item => item.isPopular);
    },
    
    getVegetarianItems() {
        return this.getAllItems().filter(item => item.isVeg);
    },
    
    getNonVegetarianItems() {
        return this.getAllItems().filter(item => !item.isVeg);
    },
    
    getSeafoodItems() {
        return this.getAllItems().filter(item => 
            item.category === "Seafood Specialties" || 
            item.name.toLowerCase().includes('fish') ||
            item.name.toLowerCase().includes('prawn') ||
            item.name.toLowerCase().includes('crab') ||
            item.name.toLowerCase().includes('squid')
        );
    },
    
    searchItems(query) {
        const searchTerm = query.toLowerCase();
        return this.getAllItems().filter(item => 
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
        );
    },
    
    getItemsByPriceRange(min, max) {
        return this.getAllItems().filter(item => 
            item.price >= min && item.price <= max
        );
    },
    
    formatPrice(price) {
        if (price === 0) return "Market Price";
        return `${MENU_CONFIG.currency}${price}`;
    },
    
    calculateTotalPrice(price) {
        if (price === 0) return 0;
        let total = price;
        
        if (!MENU_CONFIG.tax.included) {
            total += (price * MENU_CONFIG.tax.rate) / 100;
        }
        
        if (MENU_CONFIG.serviceCharge.applicable && price >= 500) {
            total += (price * MENU_CONFIG.serviceCharge.rate) / 100;
        }
        
        return Math.round(total);
    },
    
    getDietaryBadges(item) {
        const badges = [];
        
        if (item.isVeg) {
            badges.push(MENU_CONFIG.dietaryInfo.veg);
        } else {
            badges.push(MENU_CONFIG.dietaryInfo.nonVeg);
        }
        
        if (item.isSpicy) {
            badges.push(MENU_CONFIG.dietaryInfo.spicy);
        }
        
        if (item.isPopular) {
            badges.push(MENU_CONFIG.dietaryInfo.popular);
        }
        
        if (item.category === "Seafood Specialties" || 
            item.name.toLowerCase().includes('fish') ||
            item.name.toLowerCase().includes('prawn') ||
            item.name.toLowerCase().includes('crab') ||
            item.name.toLowerCase().includes('squid')) {
            badges.push(MENU_CONFIG.dietaryInfo.seafood);
        }
        
        return badges;
    },
    
    generateCategoryHTML(categoryKey) {
        const category = MENU_DATA[categoryKey];
        if (!category) return '';
        
        const itemsHTML = category.items.map(item => {
            const badges = this.getDietaryBadges(item);
            const badgesHTML = badges.map(badge => 
                `<span class="badge" style="background: ${badge.color}20; color: ${badge.color};" data-badge="${badge.label.toLowerCase()}">
                    ${badge.icon} ${badge.label}
                </span>`
            ).join('');
            
            return `
                <div class="menu-item" 
                     data-name="${item.name.toLowerCase()}" 
                     data-description="${item.description.toLowerCase()}"
                     data-price="${item.price}"
                     data-category="${categoryKey}">
                    <div class="menu-item-content">
                        <div class="item-image">
                            <img src="${item.image}" 
                                 alt="${item.name}"
                                 loading="lazy"
                                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                            <div class="image-placeholder" style="display: none;">
                                <i class="fas fa-utensils"></i>
                                <p>${item.name}</p>
                            </div>
                            ${item.isPopular ? '<div class="popular-badge"><i class="fas fa-star"></i> Popular</div>' : ''}
                        </div>
                        <div class="item-info">
                            <div class="item-header">
                                <h4 class="item-name">${item.name}</h4>
                                <div class="item-price">${this.formatPrice(item.price)}</div>
                            </div>
                            <p class="item-description">${item.description}</p>
                            <div class="item-badges">${badgesHTML}</div>
                            <div class="item-actions">
                                <button class="btn btn-sm btn-secondary add-to-selection" 
                                        data-item='${JSON.stringify(item).replace(/'/g, "&apos;")}'>
                                    <i class="fas fa-plus"></i> Add to Order
                                </button>
                                <button class="btn btn-sm btn-primary share-item" 
                                        data-item-name="${item.name}"
                                        data-item-price="${item.price}">
                                    <i class="fas fa-share"></i> Share
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        return `
            <div class="menu-category glass" data-category="${categoryKey}">
                <div class="category-header">
                    <i class="category-icon ${category.icon}"></i>
                    <div class="category-info">
                        <h3 class="category-title font-display">${category.title}</h3>
                        <p class="category-description">${category.description}</p>
                        <span class="item-count">${category.items.length} items</span>
                    </div>
                </div>
                <div class="menu-items">
                    ${itemsHTML}
                </div>
            </div>
        `;
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.MENU_DATA = MENU_DATA;
    window.MENU_CONFIG = MENU_CONFIG;
    window.MENU_HELPERS = MENU_HELPERS;
    console.log('✅ Menu data loaded successfully!');
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MENU_DATA, MENU_CONFIG, MENU_HELPERS };
}