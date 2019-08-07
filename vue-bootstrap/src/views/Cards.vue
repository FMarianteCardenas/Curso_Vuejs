<template>
    <div class="mt-5">
        <b-button variant="warning">Boton</b-button>
        <b-button variant="info">Boton</b-button>
        <b-button variant="danger">Boton</b-button>
        <b-button variant="success">Boton</b-button>
        <b-button variant="primary">Boton</b-button>
        <b-button variant="dark">Boton</b-button>
        
        <b-row class="mt-3">
            <b-col cols="12" md="4">
                <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </b-col>
            <b-col cols="12" md="4">
                <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </b-col>
            <b-col cols="12" md="4">
                <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    name:'Cards'
}
</script>