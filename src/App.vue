<template>
  <router-view @submit-product="submitProduct" :menu="menuData"></router-view>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menuData: [],
    };
  },
  methods: {
    submitProduct(newProduct, productCategory) {
      this.menuData.map((category, index) => {
        if (category.category_title === productCategory) {
          this.menuData[index].products = [
            ...this.menuData[index].products,
            newProduct,
          ];
        }
      });
    },
  },
  created() {
    fetch("https://front-end-test-app.s3.amazonaws.com/menu.json")
      .then((res) => res.json())
      .then((data) => (this.menuData = data));
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

body {
  font-family: "Roboto", sans-serif;
  background-color: rgb(225, 225, 225);
}

.container {
  padding: 0 10%;
}

.btn {
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  cursor: pointer;
}

.submit-btn {
  background-color: rgb(100, 100, 100);
  color: #eee;
  width: 100%;
  transition: 0.2s all;
}

.submit-btn:hover {
  background-color: rgb(150, 150, 150);
}

.submit-btn:active {
  background-color: rgb(50, 50, 50);
}
</style>
