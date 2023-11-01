<template>
    <div>
        <h1>Edit Book</h1>
        <form v-on:submit.prevent="editBook">
        <p>ชื่อหนังสือ : <input type="text" v-model="book.Title"> </p>
        <p>ชื่อผู้แต่ง : <input type="text" v-model="book.Author"> </p>
        <p>หมวดหมู่ : <input type="text" v-model="book.Format"> </p>
        <p>ประเภท : <input type="text" v-model="book.Genre"> </p>
        <p>ราคา : <input type="text" v-model="book.Price"> </p>
        <p><button type="submit">Edit Book</button></p>
        </form>
    </div>
</template>
<script>

import BookService from '@/services/BookService'
export default {
    data() {
        return {

            book: {
                Title: "",
                Author: "",
                Format: "",
                Genre: "",
                Price: ""
            }
        }
    },
    methods: {
        async editBook() {
            try {
                await BookService.put(this.book)
                this.$router.push({
                    name: 'books'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let bookId = this.$route.params.bookId
            this.book = (await BookService.show(bookId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>