<template>
  <div @click="this.$emit('open-modal', product)" class="item">
    <div class="item__info">
      <h3 class="item__title">{{ product.title }}</h3>
      <p class="item__description">{{ product.description }}</p>
      <span class="item__price">R$ {{ parseFloat(product.price).toFixed(2) }}</span>
      <div class="item__rating">
        <i v-show="product.rating" v-for="index in parseInt(product.rating)" :key="index" class="fa-solid fa-star item__rating__star"></i>
      </div>
    </div>
    <img class="item__thumb" :src="product.thumbnail ? product.thumbnail : 'https://static.umotive.com/img/product_image_thumbnail_placeholder.png'" :alt="product.title">
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    product: Object
  },
  emits: ['open-modal']
}
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 2px solid rgba(100, 100, 100, 0.5);
  border-radius: 3px;
  margin-bottom: 5px;
  margin-top: 10px;
  width: 400px;
  height: 140px;
  cursor: pointer;
  background-color: rgb(235, 235, 235);
}

.item:hover {
  background-color: rgb(225, 225, 225)
}

.item__info {
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 75%;
}

.item__title {
  font-weight: 400;
  font-size: 20px;
  padding-bottom: 3px;
  width: 90%;
  border-bottom: 1px solid rgba(150, 150, 150, 0.5);
}

.item__description {
  width: 80%;
  overflow: hidden;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  color: #4d4d4d;
  line-height: 22px;
}

.item__price {
  font-weight: bold;
  font-size: 18px;
}

.item__rating {
  font-size: 14px;
}

.item__rating__star {
  color: rgb(189, 160, 0);
  /* text-shadow:
  1px 1px 0 #333,
  -1px -1px 0 #333,  
  1px -1px 0 #333,
  -1px 1px 0 #333,
  1px 1px 0 #333; */
}

.item__thumb {
  width: 90px;
  height: 90px;
}

@media screen and (max-width: 475px) {
  .item {
    width: 95vw;
  }
}
</style>