<template>
  <nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#"><img src="../src/assets/img/foodies.gif" ></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><router-link class="nav-link active" aria-current="page" to="/Home">Home</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/About">About</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/ProductAdd">All Product</router-link></li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="button" @click="toggleSideBar">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill"> {{ totalQuantity }}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        <!-- Header-->
        <div class = "bg-image">
        <header class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h2 class="display-4 fw-bolder">Order Your Delicious Food </h2>
                    <p class="lead fw-normal text-white-50 mb-0">From your all time favourite place</p>
                </div>
            </div>
        </header>
        </div>
  </nav>
  <router-view/>
</template>


