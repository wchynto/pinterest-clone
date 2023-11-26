<template>
<div class="card">
  <img :src="imgSrc" class="card-img object-fit-cover" alt="...">
</div>
</template>

<script>
export default {
    name: 'Card',
    props:{
        imgSrc:{
            type:String,
            required:true
        }
    }
}
</script>