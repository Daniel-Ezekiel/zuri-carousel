
let i = 0;
//right arrow
const right = document.getElementById("right");
//left arrow
const left = document.getElementById("left");

//get gallery img element
let gal_img = document.getElementsByClassName("gal_img");

//get display img element
let dis_img = document.getElementById("display_img");
//array of images
let img_arr = [
  {
    id: 0,
    image:
      " https://images.unsplash.com/photo-1612640975490-497b68f80639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1614357235247-99fabbee67f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1613557029019-e536807463dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
  }
];

let arr_length = img_arr.length;

(function bindImg() {
  display_img.src = img_arr[0].image;
  for (var i = 0; i < img_arr.length; i++) {
    console.log(i);
    console.log("gallery index " + i + " ^^^^^^^");
    gal_img[i].src = img_arr[i].image;
  }
})();

(function galImgClick() {
  for (let item of gal_img) {
    console.log(item);
    console.log("gallery image item " + item.id + " ^^^^^^^");
    item.onclick = () => {
      display_img.src = item.src;
      console.log(item.id);
      i = item.id;
    };
  }
})();

(function rightClick() {
  right.onclick = () => {
    i++;
    console.log(i);
    if (i > arr_length - 1) {
      i = 0;
    }
    console.log(img_arr[i]);
    display_img.src = img_arr[i].image;
  };
})();

(function leftClick() {
  left.onclick = () => {
    i--;
    console.log(i);
    if (i < 0) {
      i = arr_length - 1;
    }
    console.log(img_arr[i]);
    display_img.src = img_arr[i].image;
  };
})();
