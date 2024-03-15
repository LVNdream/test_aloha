<template>
    <div class="px-2 bg-white w-4/12 rounded-xl border-r-8">
        <div class="flex justify-between mb-8">
            <div class=" text-3xl  bg-gray-100 p-4 "><i class="fa-solid fa-computer"></i></div>
            <div class="flex">
                <div class=" text-3xl  bg-gray-100 p-4 hover:cursor-pointer "><i class="fa-solid fa-plus"></i></div>
                <div class=" text-3xl  bg-gray-100 p-4 hover:cursor-pointer "><i
                        class="fa-solid fa-ellipsis-vertical"></i></div>
            </div>
        </div>
        <div>

            <div class=" ml-6 text-3xl text-orange-700">
                Xây dựng website thương mại điện tử
            </div>

            <div class="flex mt-6 ">
                <div class=" text-xl ml-6 break-words">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem
                    nisi velit cum.</div>
            </div>

            <div class="mt-6">
                <Task></Task>
            </div>
            <div class="mt-6">
                <Task></Task>
            </div>
            <div class="mt-6">
                <Task></Task>
            </div>

            <div class="my-10 w-fit mx-auto" @click="handleHiddenModal">
                <div class=" text-2xl  px-4 py-2 rounded-xl text-white bg-blue-600 hover:cursor-pointer"><i
                        class="fa-solid fa-plus mr-2 "></i>Add Task</div>
            </div>

        </div>

        <div class="modal123" v-bind:class="{ hiddenModel: this.isHidden }">
            <div class="content p-3">
                <button class="btn btn-danger button-close" @click=" handleHiddenModal ">
                    X
                </button>

                <form @submit.prevent="handleSubmitTask">
                    <div class="inforOrder">
                        <div class="mb-3">
                            <div class="mb-3">
                                <label htmlFor="exampleFormControlInput2" class="form-label">
                                    Task name
                                </label>
                                <input v-model="task_name " required type="text" class="form-control"
                                    id="exampleFormControlInput2" />
                            </div>
                            <div class="mb-3 w-4/12">
                                <label htmlFor="exampleFormControlInput3" class="form-label">
                                    Task dealine
                                </label>
                                <input v-model=' task_dealine ' required type="date" class="form-control"
                                    id="exampleFormControlInput3" />
                            </div>
                        </div>

                        <div class="d-flex justify-content-around mt-5">
                            <button class="btn btn-danger submit">
                                Add task
                            </button>
                        </div>
                        <hr />
                    </div>
                </form>
            </div>
        </div>


    </div>
</template>
<script>
import Task from '@/components/Task.vue'
export default {

    components: {
        Task
    },

    data() {
        return {
            isHidden: true,
            project_id: '',
            task_name: '',
            task_dealine: '',
        }
    },
    methods: {
        handleHiddenModal() {

            this.isHidden = !this.isHidden

        },

        handleSubmitTask() {

        console.log(this.task_name,this.task_dealine)

},

    },
}


</script>
<style scoped>
.table-headers,
.table-rows {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 1.5fr;
}

.modal123 {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .button-close {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 13px;
        text-align: center;
        /* // vertical-align: middle; */
        display: inline-block;

    }

    .content {
        position: relative;
        /* // left: 13%;
    // transform: translate(-75%,0); */
        width: 40%;
        height: 70%;
        background: white;
        overflow: scroll;
    }
}

.hiddenModel {
    display: none
}

.sidebar {
    color: white;
    background-color: #173451;
    position: sticky;
    top: 0;
    left: 0;
    height: 100%;
    min-height: 100vh;
    padding: 30px;
}

.bg {
    background-color: #173451;
}

.navbar {
    /* // margin:0 15px; */
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.16);
}

.content-header {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}

.table-headers {
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid #d2d2d2;
    padding: 20px 0;
}

.table-rows {
    border-bottom: 1px solid #d2d2d2;
    padding: 20px 0;
}

.login-page {
    min-height: 100vh;
    background-color: lightblue;

    .login-modal {
        width: 40%;
        padding: 20px;
    }
}

img {
    max-width: 100%;
}

.img-items {
    border: 1px solid #d2d2d2;
    border-radius: 5px;
}

.loadingSpiner {
    min-height: 50vh;
}

.logoCart {
    width: 40px;
    color: red;
}

.aticleBtnUpDate {
    text-align: center;
}
</style>