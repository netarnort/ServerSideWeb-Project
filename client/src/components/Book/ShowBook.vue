<template>
    <div>
        <h1>Get User By Id</h1>
        <hr>
        <p>ชื่อหนังสือ : {{ book.Title }}</p>
        <p>ชื่อผู้แต่ง : {{ book.Author }}</p>
        <p>หมวดหมู่ : {{ book.Format }}</p>
        <p>ประเภท : {{ book.Genre }}</p>
        <p>ราคา : {{ book.Price }}</p>
        <p>
            <!-- <button v-on:click="navigateTo('/book/edit/' + this.$route.params.bookId)">edit user</button> -->
            <button v-on:click="navigateTo('/books')">ย้อนกลับ</button>
        </p>
        <hr>
    </div>
</template>

<script>

import BookService from '@/services/BookService'

export default {

    data() {
        return {
            book: null
        }
    },

    methods: {
        navigateTo(route) {
            // ตรง$router ต้องตั้งให้ตรง folder ของ route
            this.$router.push(route)
        }
    },

    async created() {
        try {
            let bookId = this.$route.params.bookId
            this.book = (await BookService.show(bookId)).data
            console.log(this.book);
        } catch (error) {
            console.log(error)
        }
    }
    
}

</script>

<style scoped></style>