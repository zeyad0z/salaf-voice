<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="bg-[#F9F9F9] border border-[#E9E9E9] rounded-3xl">
    <div class="flex justify-between bg-[#EFE9D5]">
      <div class="flex justify-center items-center gap-2">
        <client-only>
          <VsxIcon
            iconName="ArchiveBook"
            type="linear"
            :size="32"
            color="#133349"
          />
        </client-only>

        <!-- TITLE FROM PROP -->
        <p class="text-[#062033] text-[1rem]">{{ props.label }}</p>
      </div>

      <div class="flex justify-center items-center">
        <span class="text-[#062033] text-[0.87rem]">شاهد الكل</span>
        <div class="flex justify-center items-center gap-0">
          <client-only>
            <VsxIcon
              iconName="ArrowLeft2"
              :size="6"
              color="#062033"
              type="linear"
            />
          </client-only>
          <client-only>
            <VsxIcon
              iconName="ArrowLeft2"
              :size="6"
              color="#062033"
              type="linear"
            />
          </client-only>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <div class="bg-[#ffffff] border border-[#EDEDED] rounded-3xl">
        <!-- SLOT CONTENT -->
        <div class="font-bold text-[1rem] text-[#133349]" name="card-body">
          الدين الإبراهيمي بين الحقيقة والضلال (196) دعوة إبراهيم صلى الله عليه
          وسلم أباه إلى التوحيد
        </div>

        <div class="flex justify-between">
          <div class="flex justify-center items-center gap-5">
            <div class="flex justify-center items-center gap-1">
              <VsxIcon
                iconName="ArchiveAdd"
                :size="16"
                color="#133349"
                type="linear"
              />
              <span class="text-[0.87rem] text-[#133349]">حفظ</span>
            </div>

            <div class="flex justify-center items-center gap-1">
              <VsxIcon
                iconName="Share"
                :size="16"
                color="#133349"
                type="linear"
              />
              <span class="text-[0.8rem] text-[#133349]">مشاركة</span>
            </div>
          </div>

          <div
            class="bg-[#FBFBFB] rounded-3xl border border-[#EDEDED] text-[0.87rem] text-[#133349]"
          >
            ياسر برهامي
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
