import { defineStore } from "pinia";

export const useSideBarStore = defineStore("sideBar", {
  state: () => ({
    sideBar: [
      { id: 1, label: "الرئيسية", route: "/" },
      { id: 2, label: "الفتاوي", route: "/subCats" },
      { id: 3, label: "بقلم المشرف", route: "/cats" },
      { id: 4, label: "دعواتنا", route: "/cats" },
      { id: 5, label: "ملفات خاصة", route: "/cats" },
      { id: 6, label: "المنهج السلفي", route: "/cats" },
      { id: 7, label: "قضايا معاصرة", route: "/cats" },
      { id: 8, label: "دليل طلب العلم", route: "/cats" },
      { id: 9, label: "الفتاوي", route: "/cats" },
      { id: 10, label: "المكتبة المقروءة", route: "/cats" },
      { id: 11, label: "مذاهب فكرية", route: "/cats" },
      { id: 12, label: "التزكية", route: "/cats" },
      { id: 13, label: "السيرة والتاريخ", route: "/cats" },
      { id: 14, label: "مع الدعاة", route: "/cats" },
      { id: 15, label: "المرأة والاسرة", route: "/cats" },
      { id: 16, label: "شبابنا", route: "/cats" },
    ],
    selectedSideBarId: null,
  }),

  actions: {
    setSelectedSideBar(item) {
      this.selectedSideBarId = item.id;
    },
  },
});
