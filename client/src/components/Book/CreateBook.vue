<template>
    <div>
        <h1>Create Book</h1>
        <form v-on:submit.prevent="createBook">
        <p>ชื่อหนังสือ : <input type="text" v-model="book.Title"> </p>
        <p>ชื่อผู้แต่ง : <input type="text" v-model="book.Author"> </p>
        <p>หมวดหมู่ : <input type="text" v-model="book.Format"> </p>
        <p>ประเภท : <input type="text" v-model="book.Genre"> </p>
        <p>ราคา : <input type="text" v-model="book.Price"> </p>
        <p><button type="submit">Create Book</button>
        <button v-on:click="navigateTo('/books')">ย้อนกลับ</button></p>
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

        navigateTo(route) {
            this.$router.push(route)
        },
        
        async createBook() {
            try {
                await BookService.post(this.book)
                this.$router.push({
                    name: 'books',
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
};
</script>
<style scoped></style>