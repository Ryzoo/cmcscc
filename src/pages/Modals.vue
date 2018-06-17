<template>
    <div class="row-12 p-x-5">
        <div class="col-6 col-sm-12">
            <h3>Okna modal</h3>
            <hr/>
            <p>Są to okna z dodatkową zawartością. Pytające o coś lub jedynie informujące. </p>
            <ul>
                <li><code>modal</code> - tworzy modal z danego kontenera</li>
                <li><code>modal-header</code> - element modala odpowiadający za tytuł</li>
                <li><code>modal-body</code> - główna cześć, zawiera całą zawartość</li>
                <li><code>modal-action</code> - jeśli modal ma mieć przyciski, dodaj je tutaj</li>
            </ul>
            <p>Modal domyślnie jest ustawiony na środku ekranu, możesz jednak to zmienić.</p>
            <ul>
                <li><code>modal-top</code> - Modal wyświetla się od góry strony</li>
                <li><code>modal-bottom</code> - Modal wyświetla się od dołu strony</li>
            </ul>
        </div>
        <div class="col-6 col-sm-12">
            <button @click="showModal('#modal1')">Pokaż modal</button>
        </div>

        <!-- modal definitions -->
        <div class="modal" id="modal1">
            <div class="modal-header">
                To jest bardzo fajny modal
            </div>
            <div class="modal-body">
                <form >
                    <label> Imię</label>
                    <input type="text" placeholder="Podaj swoje imię "/>
                </form>
            </div>
            <div class="modal-action flex-align-right">
                <button class="button-free-s">Anuluj</button>
                <button>Akceptuje</button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Modals",
        methods: {
            showModal: function (name) {
                $(name).showModal();
            }
        }
    }
</script>

<style scoped>

</style>