import { defineStore } from "pinia";

export const useSubCatsStore = defineStore("subCats", {
  state: () => ({
    subCats: [
      {
        label: "فتاوى العقيدة",
      },
      {
        label: "فتاوى المعاملات",
      },
      {
        label: "فتاوى المنهج والالتزام والدعوة",
      },
      {
        label: "فتاوى الأيمان والنذور والكفارات",
      },
      {
        label: "فتاوى الكمبيوتر والإنترنت والاتصالات ووسائل الترفيه",
      },
      {
        label: "فتاوى في ميزان الشرع",
      },
      {
        label: "فتاوى متنوعة",
      },
      {
        label: "فتاوى العبادات",
      },
      {
        label: "فتاوى الزواج والمرأة والأسرة",
      },
      {
        label: "شبهات وجوابها",
      },
      {
        label: "فتاوى الأطعمة واللباس",
      },
      {
        label: "فتاوى طبية وعلاجية",
      },
      {
        label: "فتاوى الملل والنحل",
      },
    ],
    selectedSubCat: null,
  }),

  actions: {
    setSelectedSubCat(subCat) {
      this.selectedSubCat = subCat;
    },
  },
});
