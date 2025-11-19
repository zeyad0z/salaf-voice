<script setup>
import { useCatsStore } from "~/stores/cats";
import { useSubCatsStore } from "~/stores/subCats";
import DefaultImage from "~/components/UI/defaultImage.vue";

const cats = useCatsStore();
const subCats = useSubCatsStore();
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
        <p class="text-[1rem] text-[#B8C2CA]">»</p>
        <p class="text-[1rem] text-[#B8C2CA]">
          {{ subCats.selectedSubCat?.label }}
        </p>
        <p class="text-[1rem] text-[#497D74]">»</p>
        <p class="text-[1rem] text-[#497D74]">{{ cats.selectedCat?.label }}</p>
      </div>
    </div>

    <div
      class="w-full bg-[#EFE9D5] border border-[#E9E9E9] rounded-[1.25rem] flex justify-between items-center py-4.5 ps-10 pe-4 mb-2"
    >
      <p class="text-[1.12rem] text-[#27445D] font-bold">
        {{ cats.selectedCat?.label }}
      </p>

      <div class="flex gap-2.5">
        <button
          class="rounded-[0.5rem] border border-[#E9E9E9] px-6 py-3.5 bg-[#27445D] hover:bg-[#275379] cursor-pointer flex gap-1 justify-center items-center transition-all duration-200"
        >
          <client-only>
            <VsxIcon
              iconName="ArchiveAdd"
              :size="16"
              color="#FFFFFF"
              type="linear"
            />
          </client-only>
          <p class="text-[0.87rem] text-[#FFFFFF] font-light">حفظ</p>
        </button>
        <button
          class="rounded-[0.5rem] border border-[#E9E9E9] px-6 py-3.5 bg-[#229342] hover:bg-[#40a85e] cursor-pointer flex gap-1 justify-center items-center transition-all duration-200"
        >
          <client-only>
            <VsxIcon
              iconName="DocumentDownload"
              :size="16"
              color="#FFFFFF"
              type="linear"
            />
          </client-only>
          <p class="text-[0.87rem] text-[#FFFFFF] font-light">تنزيل</p>
        </button>
      </div>
    </div>

    <div
      class="bg-[#F9F9F9] border border-[#E9E9E9] rounded-[1.25rem] px-5 py-2 mb-2"
    >
      <span class="article-font">
        <div id="FatwaA" class="row">
          <p class="text-justify"></p>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 13pt; line-height: 150%; color: navy"
                >كتبه/ سعيد محمود</span
              ></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 13pt; line-height: 150%"
                >الحمد لله، والصلاة والسلام على رسول الله، أما بعد؛
                <span style="color: blue">&nbsp;</span></span
              ></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 15pt; line-height: 150%; color: blue"
                >الغرض من الموضوع:</span
              ></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 13pt; line-height: 150%"
                >- تسهيل السبيل لعموم المؤمنين للتعبد بأعظم أبواب العبادة
                -الأسماء والصفات- من خلال الوقوف مع بعض الأسماء والصفات الإلهية،
                وبيان آثارها في زيادة الإيمان، وتحسين سلوك الإنسان.</span
              ></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 15pt; line-height: 150%; color: blue"
                >المقدمة:</span
              ></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 13pt; line-height: 150%; color: blue"
                >- التعرُّف على الله -تعالى- أجلُّ أنواع المعرفة، والتعبد له
                بأسمائه وصفاته أجلُّ أبواب التعبد: </span
              ><span style="font-size: 13pt; line-height: 150%"
                >قال -تعالى-: (<span style="color: red"
                  >وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَى فَادْعُوهُ بِهَا وَذَرُوا
                  الَّذِينَ يُلْحِدُونَ فِي أَسْمَائِهِ سَيُجْزَوْنَ مَا كَانُوا
                  يَعْمَلُونَ</span
                >) </span
              ><span style="font-size: 11pt; line-height: 150%"
                >(الأعراف: 180)</span
              ><span style="font-size: 13pt; line-height: 150%"
                >، وقال النبي -صلى الله عليه وسلم-: (<span style="color: red"
                  >إِنَّ لِلَّهِ تِسْعَةً وَتِسْعِينَ اسْمًا مِائَةً إِلَّا
                  وَاحِدًا، مَنْ أَحْصَاهَا دَخَلَ الْجَنَّةَ</span
                >) </span
              ><span style="font-size: 11pt; line-height: 150%"
                >(متفق عليه)</span
              ><span style="font-size: 13pt; line-height: 150%">.</span></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 15pt; line-height: 150%; color: blue"
                >التعريف بالله خلاصة دعوة الأنبياء:</span
              ></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 13pt; line-height: 150%; color: blue"
                >- قامت دعوة الرسل جميعًا على هذا الأصل العظيم "اعرفوا الله": </span
              ><span style="font-size: 13pt; line-height: 150%"
                >قال -تعالى- لكلِّ الأنبياء: (<span style="color: red"
                  >وَادْعُ إِلَى رَبِّكَ إِنَّكَ لَعَلَى هُدًى مُسْتَقِيمٍ</span
                >) </span
              ><span style="font-size: 11pt; line-height: 150%">(الحج: 67)</span
              ><span style="font-size: 13pt; line-height: 150%"
                >، وقال: (<span style="color: red"
                  >يَا أَيُّهَا النَّبِيُّ إِنَّا أَرْسَلْنَاكَ شَاهِدًا
                  وَمُبَشِّرًا وَنَذِيرًا . وَدَاعِيًا إِلَى اللَّهِ بِإِذْنِهِ
                  وَسِرَاجًا مُنِيرًا</span
                >) </span
              ><span style="font-size: 11pt; line-height: 150%"
                >(الأحزاب: 45-46)</span
              ><span style="font-size: 13pt; line-height: 150%">.</span></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 13pt; line-height: 150%; color: blue"
                >قال السعدي -رحمه الله- في تفسيره: </span
              ><span style="font-size: 13pt; line-height: 150%"
                >"أي: أرسله يدعو الخلق إلى ربِّهم، بتعريفهم لربهم بصفاته
                المقدَّسة، وتنزيهه عمَّا لا يليق".</span
              ></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 13pt; line-height: 150%; color: blue"
                >- التعريف بالله أعظم مقامات العبودية، ولذا كان الرسل أعبد الناس
                لربهم، لأنَّهم أعرف الناس به: </span
              ><span style="font-size: 13pt; line-height: 150%"
                >(<span style="color: red"
                  >وَمَنْ أَحْسَنُ قَوْلًا مِمَّنْ دَعَا إِلَى اللَّهِ وَعَمَلَ
                  صَالِحًا وَقَالَ إِنَّنِي مِنَ الْمُسْلِمِينَ</span
                >) </span
              ><span style="font-size: 11pt; line-height: 150%">(فصلت: 33)</span
              ><span style="font-size: 13pt; line-height: 150%">.</span></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 13pt; line-height: 150%; color: blue"
                >- أجهل الناس من لا يعرف ربَّه: </span
              ><span style="font-size: 13pt; line-height: 150%"
                >قال ابن القيم -رحمه الله-: "ولو عرف العبد كلَّ شيء، ولم يعرف
                ربَّه، فكأنَّه لم يعرف شيئًا" </span
              ><span style="font-size: 11pt; line-height: 150%"
                >(إغاثة اللهفان)</span
              ><span style="font-size: 13pt; line-height: 150%">.</span></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 15pt; line-height: 150%; color: blue"
                >أهمية العلم بالأسماء والصفات الإلهية والتعبد لله بها:</span
              ></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 13pt; line-height: 150%; color: blue"
                >- التوحيد أوَّل فرض على العباد، ولا يتمُّ إلَّا بمعرفة الله
                بأسمائه وصفاته، والتعبد لله بها: </span
              ><span style="font-size: 13pt; line-height: 150%"
                >قال النبي -صلى الله عليه وسلم- لمعاذ لما أرسله لأهل اليمن:
                (<span style="color: red"
                  >إِنَّكَ تَقْدَمُ عَلَى قَوْمٍ مِنْ أَهْلِ الْكِتَابِ
                  فَلْيَكُنْ أَوَّلَ مَا تَدْعُوهُمْ إِلَى أَنْ يُوَحِّدُوا
                  اللَّهَ -تَعَالَى-، فَإِذَا عَرَفُوا ذَلِكَ فَأَخْبِرْهُمْ
                  أَنَّ اللَّهَ فَرَضَ عَلَيْهِمْ خَمْسَ صَلَوَاتٍ فِي
                  يَوْمِهِمْ وَلَيْلَتِهِمْ، فَإِذَا صَلَّوْا فَأَخْبِرْهُمْ
                  أَنَّ اللَّهَ افْتَرَضَ عَلَيْهِمْ زَكَاةً فِي أَمْوَالِهِمْ
                  تُؤْخَذُ مِنْ غَنِيِّهِمْ فَتُرَدُّ عَلَى فَقِيرِهِمْ فَإِذَا
                  أَقَرُّوا بِذَلِكَ فَخُذْ مِنْهُمْ، وَتَوَقَّ كَرَائِمَ
                  أَمْوَالِ النَّاسِ</span
                >) </span
              ><span style="font-size: 11pt; line-height: 150%"
                >(رواه البخاري)</span
              ><span style="font-size: 13pt; line-height: 150%">.</span></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 13pt; line-height: 150%; color: blue"
                >- ولقد أمر الله -تعالى- عباده بالتعبد له بالأسماء والصفات
                الإلهية:</span
              ><span style="font-size: 13pt; line-height: 150%">
                (<span style="color: red"
                  >وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَى فَادْعُوهُ بِهَا وَذَرُوا
                  الَّذِينَ يُلْحِدُونَ فِي أَسْمَائِهِ سَيُجْزَوْنَ مَا كَانُوا
                  يَعْمَلُونَ</span
                >) </span
              ><span style="font-size: 11pt; line-height: 150%"
                >(الأعراف: 180)</span
              ><span style="font-size: 13pt; line-height: 150%"
                >، وقال النبي -صلى الله عليه وسلم-: (<span style="color: red"
                  >إِنَّ لِلَّهِ تِسْعَةً وَتِسْعِينَ اسْمًا مِائَةً إِلَّا
                  وَاحِدًا مَنْ أَحْصَاهَا دَخَلَ الْجَنَّةَ</span
                >) </span
              ><span style="font-size: 11pt; line-height: 150%"
                >(متفق عليه)</span
              ><span style="font-size: 13pt; line-height: 150%">.</span></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 13pt; line-height: 150%; color: blue"
                >- فمدار القرآن العظيم كلِّه على ذكر الأسماء والصفات الإلهية
                -تأمَّل خواتيم الآيات- ومن ذلك: </span
              ><span style="font-size: 13pt; line-height: 150%"
                >(<span style="color: red"
                  >وَالَّذِينَ هَاجَرُوا فِي سَبِيلِ اللَّهِ ثُمَّ قُتِلُوا أَوْ
                  مَاتُوا لَيَرْزُقَنَّهُمُ اللَّهُ رِزْقًا حَسَنًا وَإِنَّ
                  اللَّهَ لَهُوَ خَيْرُ الرَّازِقِينَ . لَيُدْخِلَنَّهُمْ
                  مُدْخَلًا يَرْضَوْنَهُ وَإِنَّ اللَّهَ لَعَلِيمٌ حَلِيمٌ .
                  ذَلِكَ وَمَنْ عَاقَبَ بِمِثْلِ مَا عُوقِبَ بِهِ ثُمَّ بُغِيَ
                  عَلَيْهِ لَيَنْصُرَنَّهُ اللَّهُ إِنَّ اللَّهَ لَعَفُوٌّ
                  غَفُورٌ . ذَلِكَ بِأَنَّ اللَّهَ يُولِجُ اللَّيْلَ فِي
                  النَّهَارِ وَيُولِجُ النَّهَارَ فِي اللَّيْلِ وَأَنَّ اللَّهَ
                  سَمِيعٌ بَصِيرٌ . ذَلِكَ بِأَنَّ اللَّهَ هُوَ الْحَقُّ وَأَنَّ
                  مَا يَدْعُونَ مِنْ دُونِهِ هُوَ الْبَاطِلُ وَأَنَّ اللَّهَ
                  هُوَ الْعَلِيُّ الْكَبِيرُ . أَلَمْ تَرَ أَنَّ اللَّهَ
                  أَنْزَلَ مِنَ السَّمَاءِ مَاءً فَتُصْبِحُ الْأَرْضُ
                  مُخْضَرَّةً إِنَّ اللَّهَ لَطِيفٌ خَبِيرٌ . لَهُ مَا فِي
                  السَّمَاوَاتِ وَمَا فِي الْأَرْضِ وَإِنَّ اللَّهَ لَهُوَ
                  الْغَنِيُّ الْحَمِيدُ .
                </span></span
              ><span style="font-size: 13pt; line-height: 150%; color: red"
                >أَلَمْ تَرَ أَنَّ اللَّهَ سَخَّرَ لَكُمْ مَا فِي الْأَرْضِ
                وَالْفُلْكَ تَجْرِي فِي الْبَحْرِ بِأَمْرِهِ وَيُمْسِكُ
                السَّمَاءَ أَنْ تَقَعَ عَلَى الْأَرْضِ إِلَّا بِإِذْنِهِ إِنَّ
                اللَّهَ بِالنَّاسِ لَرَءُوفٌ رَحِيمٌ</span
              ><span style="font-size: 13pt; line-height: 150%">) </span
              ><span style="font-size: 11pt; line-height: 150%"
                >(الحج: 59-65)</span
              ><span style="font-size: 13pt; line-height: 150%">.</span></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 13pt; line-height: 150%; color: blue"
                >- وجعل الله -تعالى- كلامه في القرآن أعظم كلامه، وجعل أعظمه ما
                اشتمل على أسمائه وصفاته:</span
              ><span style="font-size: 13pt; line-height: 150%">
                قال النبي -صلى الله عليه وسلم- لمعاذ بن جبل: (<span
                  style="color: red"
                  >يَا أَبَا الْمُنْذِرِ، أَتَدْرِي أَيُّ آيَةٍ مِنْ كِتَابِ
                  اللَّهِ مَعَكَ أَعْظَمُ؟</span
                >) قال: قلت: الله ورسوله أعلم. قال: (<span style="color: red"
                  >يَا أَبَا الْمُنْذِرِ، أَتَدْرِي أَيُّ آيَةٍ مِنْ كِتَابِ
                  اللَّهِ مَعَكَ أَعْظَمُ؟</span
                >) قال: قلت: (<span style="color: red"
                  >اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ</span
                >)، قال: فضرب في صدري، وقال: (<span style="color: red"
                  >وَاللَّهِ لِيَهْنِكَ الْعِلْمُ أَبَا الْمُنْذِرِ</span
                >) </span
              ><span style="font-size: 11pt; line-height: 150%"
                >(رواه مسلم)</span
              ><span style="font-size: 13pt; line-height: 150%"
                >.
              </span></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 13pt; line-height: 150%; color: blue"
                >قال الحافظ ابن حجر -رحمه الله-:</span
              ><span style="font-size: 13pt; line-height: 150%">
                "قال العلماء: إنَّما تميَّزت آية الكرسي بكونها أعظم آية لما جمعت
                من أصول الأسماء والصفات".</span
              ></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 15pt; line-height: 150%; color: blue"
                >التربية النبوية على الأسماء والصفات الإلهية:</span
              ></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 13pt; line-height: 150%; color: blue"
                >- الأنبياء -عليهم السلام- لا يزالون يتعبدون بالأسماء والصفات
                الإلهية، ويربُّون الناس عليها:</span
              ><span style="font-size: 13pt; line-height: 150%">
                قال تعالى عن إبراهيم وإسماعيل: (<span style="color: red"
                  >وَإِذْ يَرْفَعُ إِبْرَاهِيمُ الْقَوَاعِدَ مِنَ الْبَيْتِ
                  وَإِسْمَاعِيلُ رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ
                  السَّمِيعُ الْعَلِيمُ</span
                >) </span
              ><span style="font-size: 11pt; line-height: 150%"
                >(البقرة: 127)</span
              ><span style="font-size: 13pt; line-height: 150%"
                >. وقال عن توبة آدم وحواء -عليهما السلام-: (<span
                  style="color: red"
                  >قَالَا رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ
                  لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ</span
                >) </span
              ><span style="font-size: 11pt; line-height: 150%"
                >(الأعراف: 23)</span
              ><span style="font-size: 13pt; line-height: 150%"
                >. وقال عن موسى -عليه السلام-: (<span style="color: red"
                  >فَسَقَى لَهُمَا ثُمَّ تَوَلَّى إِلَى الظِّلِّ فَقَالَ رَبِّ
                  إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ</span
                >) </span
              ><span style="font-size: 11pt; line-height: 150%"
                >(القصص: 24)</span
              ><span style="font-size: 13pt; line-height: 150%"
                >. وقال عن أيوب: (<span style="color: red"
                  >وَأَيُّوبَ إِذْ نَادَى رَبَّهُ أَنِّي مَسَّنِيَ الضُّرُّ
                  وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ . فَاسْتَجَبْنَا لَهُ
                  فَكَشَفْنَا مَا بِهِ مِنْ ضُرٍّ وَآتَيْنَاهُ أَهْلَهُ
                  وَمِثْلَهُمْ مَعَهُمْ رَحْمَةً مِنْ عِنْدِنَا وَذِكْرَى
                  لِلْعَابِدِينَ</span
                >) </span
              ><span style="font-size: 11pt; line-height: 150%"
                >(الأنبياء: 83-84)</span
              ><span style="font-size: 13pt; line-height: 150%"
                >.
              </span></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 13pt; line-height: 150%"
                >وقال عن يوسف -عليه السلام-: (<span style="color: red"
                  >وَرَفَعَ أَبَوَيْهِ عَلَى الْعَرْشِ وَخَرُّوا لَهُ سُجَّدًا
                  وَقَالَ يَا أَبَتِ هَذَا تَأْوِيلُ رُؤْيَايَ مِنْ قَبْلُ قَدْ
                  جَعَلَهَا رَبِّي حَقًّا وَقَدْ أَحْسَنَ بِي إِذْ أَخْرَجَنِي
                  مِنَ السِّجْنِ وَجَاءَ بِكُمْ مِنَ الْبَدْوِ مِنْ بَعْدِ أَنْ
                  نَزَغَ الشَّيْطَانُ بَيْنِي وَبَيْنَ إِخْوَتِي إِنَّ رَبِّي
                  لَطِيفٌ لِمَا يَشَاءُ إِنَّهُ هُوَ الْعَلِيمُ الْحَكِيمُ</span
                >) </span
              ><span style="font-size: 11pt; line-height: 150%"
                >(يوسف: 100)</span
              ><span style="font-size: 13pt; line-height: 150%">.</span></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 13pt; line-height: 150%; color: blue"
                >- النبي محمد -صلى الله عليه وسلم- يربِّيهم بالتوجيه النظري
                والتطبيق العملي على التعبد لله بالأسماء والصفات الإلهية (مثال
                على التنبيه إلى صفة الرحمة): </span
              ><span style="font-size: 13pt; line-height: 150%"
                >قال عمر -رضي الله عنه-: قَدِمَ عَلَى رَسُولِ اللَّهِ -صلى الله
                عليه وسلم- بِسَبْيٍ فَإِذَا امْرَأَةٌ مِنَ السَّبْيِ تَسْعَى
                إِذْ وَجَدَتْ صَبِيًّا فِي السَّبْيِ فَأَخَذَتْهُ وَأَلْصَقَتْهُ
                بِبَطْنِهَا وَأَرْضَعَتْهُ . فَقَالَ رَسُولُ اللَّهِ -صلى الله
                عليه وسلم-: (<span style="color: red"
                  >أَتَرَوْنَ هَذِهِ طَارِحَةً وَلَدَهَا فِي النَّارِ؟</span
                >) قلنا: لا والله، وهي تقدر ألا تطرحَه، فقال رسول الله -صلى الله
                عليه وسلم-: (<span style="color: red"
                  >اللَّهُ أَرْحَمُ بِعِبَادِهِ مِنَ الْمَرْأَةِ
                  بِوَلَدِهَا</span
                >) </span
              ><span style="font-size: 11pt; line-height: 150%"
                >(متفق عليه)</span
              ><span style="font-size: 13pt; line-height: 150%">.</span></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 15pt; line-height: 150%; color: blue"
                >خاتمة:</span
              ></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 13pt; line-height: 150%; color: blue"
                >- كلَّما تعبَّد العبد بالأسماء والصفات الإلهية زاد إيمانه، ورفع
                مكانه في الدارين: </span
              ><span style="font-size: 13pt; line-height: 150%"
                >عن عائشة -رضي الله عنها-: أَنَّ النَّبِيَّ -صلى الله عليه وسلم-
                بَعَثَ رَجُلًا عَلَى سَرِيَّةٍ، وَكَانَ يَقْرَأُ لِأَصْحَابِهِ
                فِي صَلَاتِهِمْ فَيَخْتِمُ بِقُلْ هُوَ اللَّهُ أَحَدٌ، فَلَمَّا
                رَجَعُوا ذَكَرُوا ذَلِكَ لِلنَّبِيِّ -صلى الله عليه وسلم-،
                فَقَالَ: (<span style="color: red"
                  >سَلُوهُ لِأَيِّ شَيْءٍ يَصْنَعُ ذَلِكَ</span
                >) فَسَأَلُوهُ، فَقَالَ: لِأَنَّهَا صِفَةُ الرَّحْمَنِ وَأَنَا
                أُحِبُّ أَنْ أَقْرَأَ بِهَا. فَقَالَ النَّبِيُّ -صلى الله عليه
                وسلم-: (<span style="color: red"
                  >أَخْبِرُوهُ أَنَّ اللَّهَ يُحِبُّهُ</span
                >) </span
              ><span style="font-size: 11pt; line-height: 150%"
                >(رواه مسلم)</span
              ><span style="font-size: 13pt; line-height: 150%">.</span></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <strong
              ><span style="font-size: 13pt; line-height: 150%; color: blue"
                >- مجمل كلام العلماء في كيفية التعبد لله بأسمائه وصفاته:</span
              ><span style="font-size: 13pt; line-height: 150%">
                (معرفتها وتعلمها وفهم معانيها - التعبد بها كلِّها وعدم ترك بعضها
                - معاملة كلِّ اسم بمقتضاه واستعماله في محله الأنسب - الاتِّصاف
                بما يليق الاتِّصاف به منها، واجتناب ما لا يليق الاتِّصاف
                به).</span
              ></strong
            >
          </p>
          <strong> </strong>
          <p dir="rtl" style="text-align: justify; line-height: 150%">
            <span style="font-size: 13pt; line-height: 150%"
              ><strong
                >فاللهمَّ يا حنَّان يا منَّان، يا بديع السماوات والأرض، افتح
                علينا من بركاتك العظيمة، وآلائك الجسيمة، وعلِّمنا من أسمائك
                وصفاتك ما جهلنا، وانفعنا بما علَّمتنا.</strong
              >
            </span>
          </p>
          <br />

          <p></p>
        </div>
      </span>
    </div>

    <div class="felx flex-col justify-center items-center">
      <p class="text-[1rem] font-bold text-[#133349] ">مواد ذات صلة</p>

      <div class="py-3 grid grid-cols-3 gap-x-5 gap-y-4">
        <button
          @click="selectCat(item)"
          v-for="item in cats.selectedCat?.relatedBlogs"
          class="p-2 h-fit bg-[#F9F9F9] hover:bg-[#E9E9E9] border border-[#E9E9E9] rounded-[20px] flex flex-col cursor-pointer transition-colors duration-200"
        >
          <div class="flex flex-col gap-2.5 items-center justify-center">
            <img
              v-if="item.image"
              :src="item.image"
              class="rounded-[20px] w-full h-[191px] object-fill"
            />
            <DefaultImage v-else />
            <p class="text-[1rem] text-[#27445D] font-bold">
              {{ item.label }}
            </p>
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
  </div>
</template>
