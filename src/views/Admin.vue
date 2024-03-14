<template>
    <div class="">

        <div class="header flex justify-between">

            <div class="headerleft flex">
                <div class="mx-4 mt-8 text-4xl  bg-gray-200  p-2 rounded-full hover:cursor-pointer">
                    <i class="fa-regular fa-folder"></i>
                </div>
                <div class="mx-4 mt-8 text-4xl  bg-gray-200  p-2 rounded-full hover:cursor-pointer ">
                    <i class="fa-regular fa-pen-to-square"></i>
                </div>
                <div class="mx-4 mt-8 text-4xl  bg-gray-200  p-2 rounded-full  hover:cursor-pointer ">
                    <i class="fa-regular fa-comment"></i>
                </div>
                <div class="mx-4 mt-8 text-4xl bg-gray-200 p-2 rounded-full  hover:cursor-pointer">
                    <i class="fa-solid fa-magnifying-glass color"></i>
                </div>
            </div>
            <div class="headerright flex">
                <div class="mx-4 mt-8 text-4xl  bg-gray-200  p-2 rounded-full hover:cursor-pointer ">
                    <i class="fa-regular fa-sun">

                    </i>
                </div>
                <div class="mx-4 mt-8 text-4xl  bg-gray-200  p-2 rounded-full hover:cursor-pointer ">
                    <i class="fa-regular fa-envelope"></i>
                </div>
                <div class="mx-4 mt-8 w-14  bg-gray-200  p-2 rounded-full hover:cursor-pointer">
                    <image src="https://cdn-icons-png.flaticon.com/256/5373/5373331.png">

                    </image>
                </div>
                <div class="mx-4 mt-8 text-4xl bg-gray-200 p-2 rounded-full hover:cursor-pointer">
                    <i class="fa-regular fa-bell"></i>
                </div>
                <div class="mx-4 mt-8 w-14 bg-gray-200 p-2 rounded-full hover:cursor-pointer">
                    <image
                        src="https://image.enjoymovie.net/052-RoVyL-yQmgdOvIqOnPPnebE=/256x256/smart/core/p/qrw2Vjv0pg.jpg">

                    </image>
                </div>
            </div>

        </div>

        <div class="main bg-gray-50 mt-4 w">

            <div class="py-10">
                <div class="ml-4 text-3xl py-4 px- rounded-xl text-white bg-blue-700 w-60 hover:cursor-pointer"><i
                        class="fa-solid fa-plus ml-2 mr-4 "></i>Add project</div>
            </div>
            <div class="p-2 flex flex-wrap">
                <Project></Project>
                <Project></Project>
                <Project></Project>
            </div>

        </div>

    </div>
</template>
<script>

import Project from '@/components/Project.vue'

export default {
    components:{
        Project,
    }
}
</script>
<style></style>