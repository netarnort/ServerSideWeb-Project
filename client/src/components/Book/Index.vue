<template>
    <div>

        <h2>Get all users</h2>
        <h4>จํานวนผู้ใช้งาน {{ books.length }}</h4>
        <button v-on:click="navigateTo('/book/create')">เพิ่มหนังสือ</button>
        <hr>
        <div v-for="book in books" v-bind:key="book.id">
            <p>ชื่อหนังสือ : {{ book.Title }}</p>
            <p>ชื่อผู้แต่ง : {{ book.Author }} </p>
            <p>ราคา : {{ book.Price }} </p>
            <p>
                <button v-on:click="navigateTo('/book/' + book.id)">ดูข้อมูลหนังสือ</button>
                <button v-on:click="navigateTo('/book/edit/' + book.id)">แก้ไขข้อมูล</button>
                <button v-on:click="deleteBook(book)">ลบข้อมูล</button>

            </p>
            <hr>
        </div>

    </div>
</template>

<script>

import BookService from '@/services/BookService'

export default {
    data() {
        return {
            books: []
        }
    },

    methods: {
        navigateTo(route) {
            // ตรง$router ต้องตั้งให้ตรง folder ของ route
            this.$router.push(route)
        }
    },

    methods: {

        navigateTo(route) {
            this.$router.push(route)
        },

        async deleteBook(book) {
            let result = confirm("Want to delete?")
            if (result) {
                try {
                    await BookService.delete(book)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },

        async refreshData() {
            this.books = (await BookService.index()).data
        }
    },

    async created() {
        this.books = (await BookService.index()).data
    }

}

</script>

<style scoped></style>