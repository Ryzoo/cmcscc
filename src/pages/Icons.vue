<template>
    <div class="row-6 p-x-5">
        <div class="col-6 col-sm-12">
            <h3>Ikony</h3>
            <hr/>
            <p>Ikony wywołujemy za pomocą tagu <b>i</b> z klasą jako nazwą danej ikony. Lista dostępnych ikon znajduje się poniżej.</p>
            <div class="row-12">
                <form class="col-6 col-offset-3"  action="">
                    <label for="search">Wyszukaj konkretną ikonę.</label>
                    <input v-model="search" id="search" type="text" placeholder="Wpisz tekst powiązany z ikoną np. settings"/>
                </form>
            </div>
            <div class="icon-list m-5">
                <div class="icon-container" v-for="(icon, index) in filteredItems" :key="index">
                    <i :class="icon+' i-lg'"></i>
                    <code>{{icon}}</code>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                search: '',
                name: "Icons",
                items: ["i-mp4",
                    "i-pdf",
                    "i-menu",
                    "i-settings-2",
                    "i-download",
                    "i-form",
                    "i-user",
                    "i-share",
                    "i-settings",
                    "i-search",
                    "i-plus",
                    "i-strategy",
                    "i-full-screen",
                    "i-multi-users",
                    "i-empty-set",
                    "i-cross",
                    "i-compose",
                    "i-eye",
                    "i-calendar",
                    "i-bell",
                    "i-football-field",
                    "i-free-field",
                    "i-sport-thinks",
                    "i-timer",
                    "i-moon",
                "i-user-exchange",
                "i-user-options",
                "i-user-folder",
                "i-envelope"]
            }
        },
        computed: {
            filteredItems() {
                return this.items.filter(item => {
                    return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                })
            }
        }
    }
</script>

<style scoped>
    .icon-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .icon-container i {
        display: block;
        text-align: center;
        padding: 5px;
    }

    .icon-container {
        margin: 10px;
    }
</style>