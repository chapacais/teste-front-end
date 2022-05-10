<template>
  <header class="header">
    <h1 class="header__title">Airton Food</h1>
    <i @click="showNav()" class="fa-solid fa-bars hamburger-btn"></i>
    <nav class="mobile-nav" v-show="navVisible">
      <i @click="showNav()" class="fa-solid fa-xmark nav-close-btn"></i>
      <ul>
        <li><router-link class="menu-link" to="/">menu</router-link></li>
        <li>
          <router-link class="menu-link" to="/addproduct"
            >adicionar produto</router-link
          >
        </li>
      </ul>
    </nav>
    <nav class="desktop-nav">
      <ul>
        <li><router-link class="menu-link" to="/">menu</router-link></li>
        <li>
          <router-link class="menu-link" to="/addproduct"
            >adicionar produto</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navVisible: false,
    };
  },
  methods: {
    showNav() {
      this.navVisible = !this.navVisible;
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  min-height: 60px;
  background-color: rgb(50, 50, 50);
  color: rgb(250, 250, 250);
}

.header__title {
  font-size: 22px;
}

.mobile-nav {
  position: fixed;
  background: rgb(70, 70, 70);
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: none;
}

.nav-close-btn {
  font-size: 30px;
  cursor: pointer;
  display: none;
}

.hamburger-btn {
  color: #eee;
  font-size: 24px;
  cursor: pointer;
  display: none;
}

ul {
  display: flex;
  gap: 10px;
}

.menu-link {
  color: rgb(168, 176, 180);
  text-decoration: none;
  transition: 0.2s all;
}

.menu-link:hover {
  color: rgb(212, 212, 212);
}

.router-link-active {
  color: rgb(240, 250, 255);
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  header {
    position: relative;
  }

  .mobile-nav {
    display: block;
  }

  .desktop-nav {
    display: none;
  }

  .hamburger-btn {
    display: block;
  }

  .nav-close-btn {
    display: block;
  }

  ul {
    flex-direction: column;
    height: 50%;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .menu-link {
    font-size: 30px;
  }
}
</style>
