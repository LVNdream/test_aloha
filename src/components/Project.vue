<template>
    <div class="px-2 bg-white w-4/12 rounded-xl border-r-8">
        <div class="flex justify-between mb-8">
            <div class=" text-3xl  bg-gray-100 p-4 "><i class="fa-solid fa-computer"></i></div>
            <div class="flex">
                <div class=" text-3xl  bg-gray-100 p-4 hover:cursor-pointer "><i class="fa-solid fa-plus"></i></div>
                <div class=" text-3xl  bg-gray-100 p-4 hover:cursor-pointer "><i class="fa-solid fa-ellipsis-vertical"></i></div>
            </div>
        </div>
        <div>

            <div class=" ml-6 text-3xl text-orange-700">
                Xây dựng website thương mại điện tử
            </div>

            <div class="flex mt-6 ">
                <div class=" m-auto text-xl ml-6 break-words">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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

            <div class="my-10 w-fit mx-auto ">
                <div class=" text-2xl  px-4 py-2 rounded-xl text-white bg-blue-600 hover:cursor-pointer"><i
                        class="fa-solid fa-plus mr-2 "></i>Add project</div>
            </div>

        </div>


    </div>
</template>
<script>
import Task from '@/components/Task.vue'
export default {

    components: {
        Task
    }
}
</script>
<style></style>