<template>
    <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5 d-flex flex-column align-items-center">
            <h1 class="display-5 fw-bold">Cari gambar secara bebas</h1>
            <p class="col-md-8 fs-4 text-center">Using a series of utilities, you can create this jumbotron, just like the one in
                previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your
                liking.</p>
            <form action="" method="post">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Cari gambar"
                        aria-label="Cari gambar" aria-describedby="button-addon2">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Jumbotron',
    methods: {
    searchImages(query) {
      Axios.get(
        `https://api.pexels.com/v1/search?query=${query}&per_page=100&page=1`,
        {
          headers: {
            Authorization:
              "llRT5DnJzq2SzhHJqMUFpPAZUJA9cxmo0EcbcbhiYZdgg8BMiiKHW5oy",
          },
        }
      )
        .then((res) => {
          this.images = res.data.photos;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  }
}
</script>