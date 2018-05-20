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
                        <li><router-link to="/siatka">Siatka</router-link></li>
                        <li><router-link to="/typografia">Typografia</router-link></li>
                        <li><router-link to="/kolory">Kolory</router-link></li>
                        <li><router-link to="/ikony">Ikony</router-link></li>
                        <li>
                            <div class="nav-drop-header">Przykłady</div>
                            <ul>
                                <li class="nav-drop-name">Poszczególne elementy</li>
                                <li><router-link to="/karty">Karty</router-link></li>
                                <li><router-link to="/nawigacje">Nawigacja</router-link></li>
                                <li><router-link to="/formularze">Formularze</router-link></li>
                                <li><router-link to="/tabele">Tabele</router-link></li>
                                <li><router-link to="/przyciski">Przyciski</router-link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="right-nav-menu">
                        <li><router-link to="/dodatki">Funkcje dodatkowe</router-link></li>
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
                <div class="col-12 text-a-c">
                    <h3>Jak zacząć?</h3>
                    <p>To bardzo proste, wystarczy że podłączysz te biblioteki do swojego projektu, a na koniec dodasz nasz framework</p>
                    <ul>
                        <li><a href="https://code.jquery.com/">jQuery</a></li>
                        <li><a href="https://cdnjs.com/libraries/hammer.js/">Hammer.js</a></li>
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
