function saklar() {
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
  
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
  
    // Cara Itenary
    toggle1.checked ? lampu1.src = 'assets/images/on.jpg' : lampu1.src = 'assets/images/off.jpg';
    toggle2.checked ? lampu2.src = 'assets/images/on.jpg' : lampu2.src = 'assets/images/off.jpg';
    toggle3.checked ? lampu3.src = 'assets/images/on.jpg' : lampu3.src = 'assets/images/off.jpg';



    // if (toggle1.checked) {
    //   lampu1.src = "assets/images/on.jpg"
    // } else {
    //   lampu1.src = "assets/images/off.jpg";
    // }
  
    // if (toggle2.checked) {
    //   lampu2.src = "assets/images/on.jpg"
    // } else {
    //   lampu2.src = "assets/images/off.jpg";
    // }
  
    // if (toggle3.checked) {
    //   lampu3.src = "assets/images/on.jpg"
    // } else {
    //   lampu3.src = "assets/images/off.jpg";
    // }
  }