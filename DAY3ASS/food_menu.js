const data=[
    {
        image : "samosa.jpeg",
        title : "Samosa",
        rating: "4.1 rated by (5.3k)",
        description: "This delicious option is a food that even those new to Indian cooking may have tried. As a fried dough pocket filled with delectable ingredients such as potato, onion, spices, and peas, samosas are often eaten as snacks in India. They are especially delicious when topped with sauces or chutneys.",
    },
    {
        image : "tandoorichicken.jpeg",
        title : "Tandoori Chicken",
        rating: "4.7 rated by (8.9k)",
        description: "The only dish that’s probably more popular than this one would be chicken tikka, but even then it’s a close call. Tandoori chicken’s juicy consistency and mouthwatering spices make it a classic that never really goes out of style and always manages to make new fans with each serving.",
    },
    {
        image : "biriyani.jpeg",
        title : "Biryani",
        rating: "5.0 rated by(20k)",
        description: "Every cuisine seems to have its own special rice dish―for Indians; this dish is biryani. The presentation of Biryani not only looks beautiful but has an addictive characteristic, earning it lots of devotees. Its blooming flavors and fluffy rice are enhanced by vegetables and sometimes meats, making it a favorite for vegetarians and meat lovers alike.",
    },
    {
        image : "chickentikkamasala.jpeg",
        title : "Chicken Tikka Masala",
        rating: "4.1 rated by(11k)",
        description: "Chicken Tikka Masala is a classic Indian dish. Everyone loves this dish worldwide. It is a delicious combination of marinated chicken with a creamy tomato-based sauce. So, it’s not hard to understand why it’s become so popular Indian dish.",
    },
    {
        image : "panipuri.jpeg",
        title : "Pani Puri",
        rating: "3.1 rated by(25k)",
        description: "Pani puri, or gol guppa,  are thought to originate from the northern state of Bihar. A perfect streetside snack, pani puri are hollow deep fried balls made of semolina or wheat. They’re served alongside spicy potatoes, chickpeas and a spicy tamarind water. Eating pani puri is an experience in itself, as you traditionally crack open the top of the deep fried shell with a spoon before filling it with the delicious accompaniments. Most Indians eat each pani puri with one swift bite, to save any of the filling spilling out of the delicate case. This infamous street snack unites most of the country – everyone from local college students to city businessmen can be found devouring them.",
    },
    {
        image : "dalmakhani.jpeg",
        title : "Dal makhani",
        rating: "Dish is made by Aryamaan",
        description: "Most foodies will have heard of or tasted dal, but there’s nothing quite like tasting the original dish in the country where it originated from. Dal is the Hindi word for lentils, and this soup-like delicacy is made by stewing small black lentils for hours on end. Whilst there are  many different varieties of this lentil dish, dal makhani is in a league of its own. It’s considered the best of the best, and is reserved for big events like wedding celebrations. With makhani meaning ‘buttery’ in Hindi, there’s no prizes for guessing how rich and creamy this Indian classic tastes.",
    },
]

const foodBox = document.getElementById("show_food");


data.forEach((el) => {
    const div1 = document.createElement("div");
    const image1 = document.createElement("img");
    image1.src = el.image;

    const foodTitle = document.createElement("h3");
    foodTitle.innerText = el.title;

    const rating = document.createElement("p");
    rating.innerText = el.rating;


    const description1 = document.createElement("p");
    description1.innerText="";

    const textarea=document.createElement("p");


    const button = document.createElement("button");
    button.innerText = "click me to know more";
    button.addEventListener('click',() => {
        textarea.innerText=el.description;
        textarea.append(description1);
        
    });
    const button1 = document.createElement("button");
    button1.innerText = "click here to hide";
    button1.addEventListener('click',() => {
        textarea.innerText="";
    });
    div1.append(image1, foodTitle, rating, button, button1 , textarea);
    foodBox.append(div1);
})

