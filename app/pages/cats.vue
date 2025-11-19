<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import DefaultImage from "~/components/UI/defaultImage.vue";

const router = useRouter();
const cats = ref([
  {
    image: "/images/books/252a8c089a0a87a8184feed10013e9ad3dd1b8de.png",
    label: "شبهات حول الحكم بغير ما أنزل الله والرد عليها",
    author: "محمد بن عبد الوهاب",
    date: "2024/12/25",
    nViews: 22114,
  },
  {
    image: "/images/books/5f49c796165c506ec0b5f0ed5f8d14a133155e5b.png",
    label: "شبهات حول الحكم بغير ما أنزل الله والرد عليها",
    author: "محمد بن عبد الوهاب",
    date: "2024/12/25",
    nViews: 22114,
  },
  {
    image: "",
    label: "شبهات حول الحكم بغير ما أنزل الله والرد عليها",
    author: "محمد بن عبد الوهاب",
    date: "2024/12/25",
    nViews: 22114,
  },
  {
    image: "/images/books/821211867e8aef18a32b44ad814c15e504c7f15a.png",
    label: "شبهات حول الحكم بغير ما أنزل الله والرد عليها",
    author: "محمد بن عبد الوهاب",
    date: "2024/12/25",
    nViews: 22114,
  },
  {
    image: "",
    label: "شبهات حول الحكم بغير ما أنزل الله والرد عليها",
    author: "محمد بن عبد الوهاب",
    date: "2024/12/25",
    nViews: 22114,
  },
  {
    image: "/images/books/ea52f9a10abc4b73f29c44b7ed6ee1e3f5b40fe6.png",
    label: "شبهات حول الحكم بغير ما أنزل الله والرد عليها",
    author: "محمد بن عبد الوهاب",
    date: "2024/12/25",
    nViews: 22114,
  },
  {
    image: "/images/left.png",
    label: "شبهات حول الحكم بغير ما أنزل الله والرد عليها",
    author: "محمد بن عبد الوهاب",
    date: "2024/12/25",
    nViews: 22114,
  },
  {
    image: "./images/right.png",
    label: "شبهات حول الحكم بغير ما أنزل الله والرد عليها",
    author: "محمد بن عبد الوهاب",
    date: "2024/12/25",
    nViews: 22114,
  },
  {
    image: "",
    label: "شبهات حول الحكم بغير ما أنزل الله والرد عليها",
    author: "محمد بن عبد الوهاب",
    date: "2024/12/25",
    nViews: 22114,
  },
]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="w-fit flex justify-center items-center gap-4 ps-3">
      <client-only>
        <VsxIcon iconName="Home2" :size="24" color="#497D74" type="linear" />
      </client-only>

      <div class="flex gap-2 justify-center items-center">
        <p class="text-[1rem] text-[#B8C2CA]">»</p>
        <p class="text-[1rem] text-[#B8C2CA]">الفتاوي</p>
        <p class="text-[1rem] text-[#497D74]">»</p>
        <p class="text-[1rem] text-[#497D74]">فتاوي متنوعة</p>
      </div>
    </div>

    <div
      class="w-full bg-[#F9F9F9] border border-[#E9E9E9] rounded-[1.25rem] p-4 grid grid-cols-3 gap-x-5 gap-y-4"
    >
      <button
        @click="router.push('/blog')"
        v-for="item in cats"
        class="p-2 h-fit bg-[#F9F9F9] hover:bg-[#E9E9E9] border border-[#E9E9E9] rounded-[20px] flex flex-col cursor-pointer transition-colors duration-200"
      >
        <div class="flex flex-col gap-2.5 items-center justify-center">
          <img
            v-if="item.image"
            :src="item.image"
            class="rounded-[20px] w-full h-[191px] object-fill"
          />
          <DefaultImage v-else />
          <p class="text-[1rem] text-[#27445D] font-bold">{{ item.label }}</p>
        </div>

        <hr class="w-full border-[#dbd7d7] my-2" />

        <div class="flex flex-col gap-2.5">
          <div class="flex flex-start items-center gap-1">
            <client-only>
              <VsxIcon
                iconName="Edit2"
                :size="16"
                color="#B8C2CA"
                type="linear"
              />
            </client-only>
            <p class="text-[0.87rem] text-[#313436]">{{ item.author }}</p>
          </div>

          <div class="flex gap-5">
            <div class="flex flex-start items-center gap-1">
              <client-only>
                <VsxIcon
                  iconName="Note1"
                  :size="18"
                  color="#B8C2CA"
                  type="linear"
                />
              </client-only>
              <p class="text-[0.87rem] text-[#313436]">{{ item.date }}</p>
            </div>

            <div class="flex flex-start items-center gap-1">
              <client-only>
                <VsxIcon
                  iconName="Eye"
                  :size="18"
                  color="#B8C2CA"
                  type="linear"
                />
              </client-only>
              <p class="text-[0.87rem] text-[#313436]">{{ item.nViews }}</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>
