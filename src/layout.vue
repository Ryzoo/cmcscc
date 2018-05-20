<template>
    <div class="main-container">
        <div></div>
        <nav class="bck-second-d text-third" >
            <div class="row-12 p-x-5">
                <div class="col center-flex">
                    <div class="burger">
                        <div class="burger-icon"></div>
                    </div>
                    <div class="nav-logo"><router-link to="/">CMC css framework</router-link></div>
                    <ul class="left-nav-menu">
                        <li><router-link to="/grid">Siatka</router-link></li>
                        <li><router-link to="/typografia">Typografia</router-link></li>
                        <li><router-link to="/colors">Kolory</router-link></li>
                        <li>
                            <div class="nav-drop-header">Przykłady</div>
                            <ul>
                                <li class="nav-drop-name">Poszczególne elementy</li>
                                <li><a href="">Karty</a></li>
                                <li><a href="">Nawigacja</a></li>
                                <li><a href="">Formularze</a></li>
                                <li><a href="">Tabele</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="right-nav-menu">
                        <li><a href="">Funkcje dodatkowe</a></li>
                        <li><a href="">Zmienne</a></li>
                    </ul>
                    <div class="right-burger">
                        <div class="burger-icon"></div>
                    </div>
                </div>
            </div>
        </nav>
        <main>
            <transition name="component-fade" mode="out-in" >
                <router-view></router-view>
            </transition>
        </main>
        <footer>
            <div class="row-12">
                <div class="col-6 col-sm-12">
                    <h1>Tutaj bardzo fajna lista</h1>
                    <ul>
                        <li>Lista</li>
                        <li>Bardzo</li>
                        <li>Fajna</li>
                    </ul>
                    <ul class="inline-list">
                        <li>Lista</li>
                        <li>Bardzo</li>
                        <li>Płaska</li>
                    </ul>
                </div>
            </div>
            <div class="copyright">All rights reeserved</div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "layout",
    }
</script>

<style scope>
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .2s ease;
    }
    .component-fade-enter, .component-fade-leave-to{
        opacity: 0;
    }
</style>
