![invasion](https://user-images.githubusercontent.com/88470703/146497412-8213fdea-9ed5-4f9c-acb4-5258fe761540.png)

## Background

[**Invasion**](http://soheepark.net/invasion/) is a game inspired by the classic "Whack-a-mole" game. The user has to defend by clicking and 'whacking' the aliens in disguise. Goal is to get the highest score possible.

## Technologie Used
* Invasion was built with vanilla JavaScript, HTML, and CSS.

## Key Features

### **Randomized Alien Positions**

![radom](https://user-images.githubusercontent.com/88470703/146501737-77b717d3-fbcd-4a39-9a12-7b5ca82453ce.gif)

The bushes at which the aliens peek out from are randomized by querying all HTML elements with the same class and using `Math.random`. The `setTimeout` function is used to set a timer for when the next alien is supposed to peek at the next random bush.

```javascript
//src/scrips/bush.js

chooseRandomBush(bushes) {
     let lastBush;

     const randomBush = Math.floor(Math.random() * bushes.length);
     const bush = bushes[randomBush];

     if (bush === lastBush) {
         return chooseRandomBush(bushes);
     }

     this.lastBush = bush;
     return bush;
}
```

```javascript
//src/scripts/monster.js

showUp() {
     const bushes = document.querySelectorAll(".bush");
     let bush = this.bush.chooseRandomBush(bushes);
     bush.classList.add("up");

     const time = Math.random() * 600 + 400;
     setTimeout(() => {
         bush.classList.remove("up");
         if (!timeOut) {
             this.showUp();
         }
     }, time);
}
```

### **Animations**

When user successfully "whacks" an alien in disguise, the alien will change in color.

![Screen Recording 2021-12-17 at 2 00 48 AM](https://user-images.githubusercontent.com/88470703/146503234-6dbb9bae-122e-4f1f-bc5d-d88b4487f0d7.gif)
