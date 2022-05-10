<template>
  <div class="category">
    <h2 class="category__title">{{ category.category_title }}</h2>
    <div class="search">
      <label for="search">Search:</label>
      <input
        type="search"
        name="search"
        @input="filter = $event.target.value"
      />
    </div>
    <ul class="category__list">
      <li v-for="product in categoryFilter" :key="product.id">
        <Item
          @open-modal="this.$emit('open-modal', product)"
          :product="product"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  name: "Category",
  components: {
    Item,
  },
  props: {
    category: Object,
  },
  data() {
    return {
      filter: "",
    };
  },
  computed: {
    categoryFilter() {
      if (this.filter) {
        let exp = new RegExp(this.filter.trim(), "i");
        return this.category.products.filter((data) => exp.test(data.title));
      } else {
        return this.category.products;
      }
    },
  },
  emits: ["open-modal"],
};
</script>

<style scoped>
.category {
  background-color: rgb(250, 250, 250);
  border: 1px solid rgba(90, 90, 90, 0.5);
  border-radius: 3px;
  padding: 10px;
  width: 900px;
  margin-bottom: 25px;
}

.category__title {
  font-size: 30px;
  margin-bottom: 12px;
  margin-left: 10px;
  margin-right: 10px;
  padding-bottom: 3px;
  letter-spacing: 1px;
  border-bottom: 1px solid rgba(150, 150, 150, 0.5);
}

.search {
  margin-top: 25px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
}

.search label {
  margin-bottom: 5px;
}

.search input {
  border: 1px solid rgba(50, 50, 50, 0.5);
  border-radius: 5px;
  padding: 10px;
  width: 50%;
}

.category__list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
}

@media screen and (max-width: 924px) {
  .category {
    padding: 10px 20px;
    border-radius: 0;
    width: 100vw;
  }
}

@media screen and (max-width: 840px) {
  .search {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .search label {
    margin-right: 5px;
  }

  .category__list {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 475px) {
  .search input {
    width: 100%;
  }

  .category {
    padding: 10px 0;
  }
}
</style>
