<template>
  <div class="category">
    <h2 class="category__title">{{ category.category_title }}</h2>
    <ul class="category__list">
      <li v-for="product in category.products" :key="product.id">
        <Item @open-modal="this.$emit('open-modal', product)" :product="product"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  name: 'Category',
  components: {
    Item
  },
  props: {
    category: Object
  },
  emits: ['open-modal']
}
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
  .category__list {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 475px) {
  .category {
    padding: 10px 0;
  }
}
</style>